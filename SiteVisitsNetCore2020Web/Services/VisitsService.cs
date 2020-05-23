using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Query.Internal;
using SiteVisitsNetCore2020Web.Data;
using SiteVisitsNetCore2020Web.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SiteVisitsNetCore2020Web.Services
{
    public class VisitsService: IVisitsService
    {
        public static readonly int MinutesBetweenVisits = 30;
        private readonly SiteVisitsNetCore2020WebContext _context;
        public VisitsService(SiteVisitsNetCore2020WebContext context)
        {
            _context = context;
        }

        public string GetCombinedTerms(string seTerm, List<ExtractedTerm> extractedTerms)
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

        public string GetLocation(IpAddress ipAddress)
        {
            string location = "";
            List<string> locationElements = new List<string>() {
    ipAddress?.Country?.Name, ipAddress?.Region?.Name, ipAddress?.City?.Name
            };

            location = string.Join(" / ", locationElements.Where(el => !string.IsNullOrEmpty(el)));
            return location;
        }

        public string GetCameFrom(Visit visit)
        {
            var cameFromDisplay = visit.CameFrom?.ShortCameFrom ?? visit.CameFrom?.CameFrom;
            return cameFromDisplay;
        }

        public string GetPageUrl(Visit visit)
        {
            //string urlVariationCompact = visit.PageUrlVariation?.UrlVariationCompact;

            //var cameFromDisplay = !string.IsNullOrEmpty(urlVariationCompact) ? urlVariationCompact : visit.PageUrlVariation?.UrlVariation;

            string urlVariationCompact = visit.PageUrlVariation?.UrlVariationCompact ?? visit.PageUrlVariation?.UrlVariation;

            urlVariationCompact ??= visit.PageUrl?.UrlCompact ?? visit.PageUrl?.Url;

            return urlVariationCompact;
        }

        public string GetPageTitle(Visit visit)
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

        public List<Visit> GetVisitSessionAllVisits(Visit visit)
        {
            List<string> ipAddresses = GetIpAddresses(visit);
            var subsequentVisits = _context.Visit
                .Where(v => ipAddresses.Contains(v.IpAddress.IpV4Address) && v.VisitDatetime >= visit.VisitDatetime).ToList();
            List<Visit> subsequentSessionVisits = subsequentVisits.Aggregate(new List<Visit> { visit },
                (accVisits, nextVisit) =>
    VisitsBelongToSameSession(accVisits, nextVisit) ? accVisits.Append(nextVisit).ToList() : accVisits.ToList());
            //.ToList();

            var precedingVisits = _context.Visit
                .Where(v => ipAddresses.Contains(v.IpAddress.IpV4Address) && v.VisitDatetime < visit.VisitDatetime).ToList();
            precedingVisits.Reverse();
            List<Visit> precedingSessionVisits = precedingVisits.Aggregate(new List<Visit> { visit },
                (accVisits, nextVisit) =>
    VisitsBelongToSameSession(accVisits, nextVisit) ? accVisits.Append(nextVisit).ToList() : accVisits.ToList());
            var sessionVisits = precedingVisits.Concat(subsequentVisits).ToList();
            return sessionVisits;
        }

        public async Task<Dictionary<string, Dictionary<string, List<Visit>>>> GetVisitSession(Visit visit)            
        {
            List<string> ipAddresses = GetIpAddresses(visit);
            var subsequentVisits = await _context.Visit
                .Include(v => v.Device)
                .Include(v => v.Browser)
                .Where(v => ipAddresses.Contains(v.IpAddress.IpV4Address) && v.VisitDatetime >= visit.VisitDatetime)
                .OrderBy(v => v.VisitDatetime)
                .ToListAsync();

            List<Visit> subsequentSessionVisits = subsequentVisits.TakeWhile((v, i) => VisitsNotTooDistant(subsequentVisits, v, i)).ToList();

            /**
            List <Visit> subsequentSessionVisits = subsequentVisits.Aggregate(new List<Visit> { visit },
                (accVisits, nextVisit) =>
    VisitsBelongToSameSession(accVisits, nextVisit) ? accVisits.Append(nextVisit).ToList() : accVisits.ToList());
            //.ToList();
            ***/

            var precedingVisits = _context.Visit
                .Include(v => v.Device)
                .Include(v => v.Browser)
                .Where(v => ipAddresses.Contains(v.IpAddress.IpV4Address) && v.VisitDatetime <= visit.VisitDatetime)
                .OrderByDescending(v => v.VisitDatetime)
                .ToList();
            //precedingVisits.Reverse();
            List<Visit> precedingSessionVisits = precedingVisits.TakeWhile((v, i) => VisitsNotTooDistant(subsequentVisits, v, i)).ToList();
            // since the 0th element is the same as the 0th element of subsequentSessionVisits and is the visit object that was passed into this function.
            precedingSessionVisits.RemoveAt(0);
            var sessionVisits = precedingVisits.Concat(subsequentVisits);
            //.ToList();


            var sessionVisitsGrouped = sessionVisits

            .GroupBy(v => new { v.Device, v.Browser })
            .GroupBy(v => v.Key.Device);

            Dictionary<string, Dictionary<string, List<Visit>>> dSessionVisits = 
                new Dictionary<string, Dictionary<string, List<Visit>>>();
            foreach (var grouping in sessionVisitsGrouped)
            {
                dSessionVisits[grouping.Key.OperatingSystem] = new Dictionary<string, List<Visit>>();
                foreach (var g in grouping.ToList())
                {
                    dSessionVisits[grouping.Key.OperatingSystem][g.Key.Browser.Name] = g.ToList();
                }
            }

            return dSessionVisits;
        }

        public async Task<List<VisitSessionBlock>> GetVisitSessionByDeviceAndBrowserPair(Visit visit)
        {
            List<string> ipAddresses = GetIpAddresses(visit);
            var subsequentVisits = await _context.Visit
                .Include(v => v.Device)
                .Include(v => v.Browser)
                .Include(v => v.IpAddress)
                    .ThenInclude(i => i.City).ThenInclude(c => c.Region).ThenInclude(r => r.Country)
                .Include(v => v.ExtractedTerms)
                .Include(v => v.PageUrl)
                .Include(v => v.PageUrlVariation)
                .Include(v => v.PageTitle)
                .Include(v => v.PageTitleVariation)
                .Include(v => v.CameFrom)
                .Where(v => ipAddresses.Contains(v.IpAddress.IpV4Address) && v.VisitDatetime >= visit.VisitDatetime)
                .OrderBy(v => v.VisitDatetime)
                .ToListAsync();

            List<Visit> subsequentSessionVisits = subsequentVisits.TakeWhile((v, i) => VisitsNotTooDistant(subsequentVisits, v, i)).ToList();

            var precedingVisits = _context.Visit
                .Include(v => v.Device)
                .Include(v => v.Browser)
                .Include(v => v.IpAddress)
                    .ThenInclude(i => i.City).ThenInclude(c => c.Region).ThenInclude(r => r.Country)
                .Include(v => v.ExtractedTerms)
                .Include(v => v.PageUrl)
                .Include(v => v.PageUrlVariation)
                .Include(v => v.PageTitle)
                .Include(v => v.PageTitleVariation)
                .Include(v => v.CameFrom)
                .Where(v => ipAddresses.Contains(v.IpAddress.IpV4Address) && v.VisitDatetime <= visit.VisitDatetime)
                .OrderByDescending(v => v.VisitDatetime)
                .ToList();
            List<Visit> precedingSessionVisits = precedingVisits.TakeWhile((v, i) => VisitsNotTooDistant(subsequentVisits, v, i)).ToList();
            // since the 0th element is the same as the 0th element of subsequentSessionVisits and is the visit object that was passed into this function.
            precedingSessionVisits.RemoveAt(0);
            var sessionVisits = precedingSessionVisits.Concat(subsequentSessionVisits);
            //.ToList();

            var sessionVisitsGrouped = sessionVisits
            .GroupBy(v => new Tuple<Device, Browser> (v.Device, v.Browser));


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

    }
}
