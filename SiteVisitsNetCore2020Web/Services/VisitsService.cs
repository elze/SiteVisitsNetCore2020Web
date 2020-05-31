using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Query.Internal;
using SiteVisitsNetCore2020Web.Data;
using SiteVisitsNetCore2020Web.Models;
using SiteVisitsNetCore2020Web.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.Xml;
using System.Threading.Tasks;

namespace SiteVisitsNetCore2020Web.Services
{
    public class VisitsService : IVisitsService
    {
        public static readonly int MinutesBetweenVisits = 30;
        private readonly IEntityHelper _entityHelper;
        public VisitsService(IEntityHelper entityHelper)
        {
            _entityHelper = entityHelper;
        }

        public static string GetCombinedTerms(string seTerm, List<ExtractedTerm> extractedTerms)
        {
            string combinedTerms = "";
            if (extractedTerms != null && extractedTerms.Count > 0)
            {
                var extractedTermsValues = extractedTerms.Select(x => x.Term);
                combinedTerms = string.Join(", ", extractedTermsValues);
                if (!string.IsNullOrEmpty(seTerm) && !extractedTermsValues.Any(t => t == seTerm))
                {
                    combinedTerms += ", " + seTerm;
                }
            }
            else
                combinedTerms = seTerm;
            return combinedTerms;
        }

        public static string GetLocation(IpAddress ipAddress)
        {
            string location = "";
            List<string> locationElements = new List<string>() {
    ipAddress?.Country?.Name, ipAddress?.Region?.Name, ipAddress?.City?.Name
            };

            location = string.Join(" / ", locationElements.Where(el => !string.IsNullOrEmpty(el)));
            return location;
        }

        public static string GetCameFrom(Visit visit)
        {
            var cameFromDisplay = visit.CameFrom?.ShortCameFrom ?? visit.CameFrom?.CameFrom;
            return cameFromDisplay;
        }

        public static string GetPageUrl(Visit visit)
        {
            //string urlVariationCompact = visit.PageUrlVariation?.UrlVariationCompact;

            //var cameFromDisplay = !string.IsNullOrEmpty(urlVariationCompact) ? urlVariationCompact : visit.PageUrlVariation?.UrlVariation;

            string urlVariationCompact = visit.PageUrlVariation?.UrlVariationCompact ?? visit.PageUrlVariation?.UrlVariation;

            urlVariationCompact ??= visit.PageUrl?.UrlCompact ?? visit.PageUrl?.Url;

            return urlVariationCompact;
        }

        public static string GetPageTitle(Visit visit)
        {
            string titleVariationCompact = visit.PageTitleVariation?.TitleVariationCompact ?? visit.PageTitleVariation?.TitleVariation;

            titleVariationCompact ??= visit.PageTitle?.TitleCompact ?? visit.PageTitle?.Title;

            return titleVariationCompact;
        }


        public List<string> GetIpAddresses(Visit visit)
        {
            return new List<string> { visit.IpAddress.IpV4Address };
        }

        private bool VisitsBelongToSameSession(List<Visit> accVisits, Visit nextVisit)
        {
            TimeSpan diff = accVisits.Last().VisitDatetime - nextVisit.VisitDatetime;
            if (diff.TotalMinutes < MinutesBetweenVisits)
            {
                return true;
            }
            return false;
        }

        private bool VisitsNotTooDistant(List<Visit> visits, Visit nextVisit, int index)
        {
            if (index == 0)
                return true;
            TimeSpan diff = visits[index - 1].VisitDatetime - nextVisit.VisitDatetime;
            if (diff.TotalMinutes < MinutesBetweenVisits)
            {
                return true;
            }
            return false;
        }

        public async Task<List<VisitFlat>> GetFlatVisits()
        {
            var visits = _entityHelper.GetFlatVisits();
            var flatVisits = visits.Select(v => new VisitFlat
            {
                Id = v.Id,
                VisitDatetime = v.VisitDatetime,
                NumberOfTimes = v.NumberOfTimes,
                IpAddress = v.IpAddress.IpV4Address,
                City = v.IpAddress.City != null ? v.IpAddress.City.Name : "",
                Region = v.IpAddress.Region != null ? v.IpAddress.Region.Name : "",
                Country = v.IpAddress.Country != null ? v.IpAddress.Country.Name : "",
                Location = GetLocation(v.IpAddress),
                CombinedTerms = GetCombinedTerms(v.SeTerm, v.ExtractedTerms),
                CameFrom = GetCameFrom(v),
                PageTitle = GetPageTitle(v),
                PageUrl = GetPageUrl(v)
            });
            return await flatVisits.ToListAsync();
        }

        public async Task<List<Visit>> GetSubsequentSessionVisits(Visit visit, List<string> ipAddresses)
        {
            var subsequentVisitsFromContext = await _entityHelper.GetVisitSubset(
                visit, ipAddresses);

            var subsequentVisits = subsequentVisitsFromContext.Where(v => ipAddresses.Contains(v.IpAddress.IpV4Address) && v.VisitDatetime >= visit.VisitDatetime)
    .OrderBy(v => v.VisitDatetime).ToList();
            List<Visit> subsequentSessionVisits = subsequentVisits.TakeWhile((v, i) => VisitsNotTooDistant(subsequentVisits, v, i)).ToList();
            return subsequentSessionVisits;
        }

        public async Task<List<Visit>> GetPrecedingSessionVisits(Visit visit, List<string> ipAddresses)
        {
            var precedingVisitsFromContext = await _entityHelper.GetVisitSubset(
                visit, ipAddresses);
            var precedingVisits = precedingVisitsFromContext.Where(v => ipAddresses.Contains(v.IpAddress.IpV4Address) && v.VisitDatetime <= visit.VisitDatetime)
    .OrderBy(v => v.VisitDatetime).ToList();
            precedingVisits.Reverse();
            List<Visit> precedingSessionVisits = precedingVisits.TakeWhile((v, i) => VisitsNotTooDistant(precedingVisits, v, i)).ToList();
            // since the 0th element is the same as the 0th element of subsequentSessionVisits and is the visit object that was passed into this function.
            precedingSessionVisits.RemoveAt(0);
            precedingSessionVisits.Reverse();
            return precedingSessionVisits;
        }

        public async Task<List<VisitSessionBlock>> GetVisitSessionByDeviceAndBrowserPair(Visit visit)
        {
            List<string> ipAddresses = GetIpAddresses(visit);

            List<Visit> subsequentSessionVisits = await GetSubsequentSessionVisits(visit, ipAddresses);
            List<Visit> precedingSessionVisits = await GetPrecedingSessionVisits(visit, ipAddresses);
            var sessionVisits = precedingSessionVisits.Concat(subsequentSessionVisits);
            var sessionVisitsGrouped = sessionVisits
            .GroupBy(v => new Tuple<Device, Browser>(v.Device, v.Browser));


            Dictionary<Tuple<string, string>, List<Visit>> dSessionVisits =
                new Dictionary<Tuple<string, string>, List<Visit>>();
            List<VisitSessionBlock> visitSessionBlocks = new List<VisitSessionBlock>();
            foreach (var grouping in sessionVisitsGrouped)
            {
                visitSessionBlocks.Add(new VisitSessionBlock
                {
                    Browser = grouping.Key.Item2?.Name,
                    Device = grouping.Key.Item1?.OperatingSystem,
                    Visits = grouping.ToList().Select(v => new ViewModels.VisitViewModel
                    {
                        Visit = v,
                        CombinedTerms = GetCombinedTerms(v.SeTerm, v.ExtractedTerms),
                        CameFrom = GetCameFrom(v),
                        Location = GetLocation(v.IpAddress),
                        PageUrl = GetPageUrl(v),
                        PageTitle = GetPageTitle(v)
                    }).ToList()
                });
            }
            return visitSessionBlocks;
        }
        public async Task<PaginatedFlatVisitsResult> GetFlatVisitsPage(int pageNum, int pageSize)
        {
            int totalVisitCount = await _entityHelper.GetVisitCount();
            var visits = _entityHelper.GetFlatVisitsPage(pageNum, pageSize);
            var flatVisits = visits.Select(v => new VisitFlat
            {
                Id = v.Id,
                VisitDatetime = v.VisitDatetime,
                NumberOfTimes = v.NumberOfTimes,
                IpAddress = v.IpAddress.IpV4Address,
                Isp = v.IpAddress.Isp.Name,
                City = v.IpAddress.City != null ? v.IpAddress.City.Name : "",
                Region = v.IpAddress.Region != null ? v.IpAddress.Region.Name : "",
                Country = v.IpAddress.Country != null ? v.IpAddress.Country.Name : "",
                Location = GetLocation(v.IpAddress),
                CombinedTerms = GetCombinedTerms(v.SeTerm, v.ExtractedTerms),
                CameFrom = GetCameFrom(v),
                PageTitle = GetPageTitle(v),
                PageUrl = GetPageUrl(v)
            });
            PaginatedFlatVisitsResult paginatedFlatVisitsResult = new PaginatedFlatVisitsResult
            {
                TotalCount = totalVisitCount,
                visits = await flatVisits.ToListAsync()
            };
            return paginatedFlatVisitsResult;
        }
    }
}
