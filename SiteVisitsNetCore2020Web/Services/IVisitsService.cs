using SiteVisitsNetCore2020Web.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SiteVisitsNetCore2020Web.Services
{
    public interface IVisitsService
    {
        string GetCameFrom(Visit visit);
        string GetCombinedTerms(string seTerm, List<ExtractedTerm> extractedTerms);
        string GetLocation(IpAddress ipAddress);
        string GetPageTitle(Visit visit);
        string GetPageUrl(Visit visit);
    }
}
