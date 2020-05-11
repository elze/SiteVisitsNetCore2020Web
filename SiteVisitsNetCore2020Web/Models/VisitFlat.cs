using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SiteVisitsNetCore2020Web.Models
{
    public class VisitFlat
    {
        public Guid Id { get; set; }
        public DateTime VisitDatetime { get; set; }

        public string IpAddress;
        public int NumberOfTimes { get; set; }
        public string Isp { get; set; }
        public string City { get; set; }
        public string Region { get; set; }
        public string Country { get; set; }
        public string PostalCode { get; set; }
        public string Location { get; set; }
        public string PageUrl { get; set; }
        public string PageTitle { get; set; }
        public string CameFrom { get; set; }
        public string CombinedTerms { get; set; }


    }
}
