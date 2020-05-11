using SiteVisitsNetCore2020Web.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SiteVisitsNetCore2020Web.Services
{
    public class VisitsService: IVisitsService
    {
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
                    /**
        !string.IsNullOrEmpty(ipAddress.Country?.Name) ? ipAddress.Country.Name : null,
        !string.IsNullOrEmpty(ipAddress.Region?.Name) ? ipAddress.Region.Name : null,
        !string.IsNullOrEmpty(ipAddress.City?.Name) ? ipAddress.City.Name : null
    ***/
    ipAddress?.Country?.Name, ipAddress?.Region?.Name, ipAddress?.City?.Name
            };

            location = string.Join(" / ", locationElements.Where(el => !string.IsNullOrEmpty(el)));
            return location;
        }

        public string GetCameFrom(Visit visit)
        {
            var cameFromDisplay = visit.CameFrom?.ShortCameFrom ?? visit.CameFrom?.CameFrom;

            //string shortCameFrom = visit.CameFrom?.ShortCameFrom;
            //var cameFromDisplay = !string.IsNullOrEmpty(shortCameFrom) ? shortCameFrom : visit.CameFrom?.CameFrom;

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


    }
}
