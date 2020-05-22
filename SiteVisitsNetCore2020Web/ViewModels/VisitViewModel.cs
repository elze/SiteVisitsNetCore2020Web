using SiteVisitsNetCore2020Web.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SiteVisitsNetCore2020Web.ViewModels
{
    public class VisitViewModel
    {
        public Visit Visit { get; set; }
        public string IpAddress { get => Visit.IpAddress?.IpV4Address; }
        public string CombinedTerms { get; set; }
        public string Location { get; set; }
        public string PageUrl { get; set; }
        public string PageTitle { get; set; }
        public string CameFrom { get; set; }
    }
}
