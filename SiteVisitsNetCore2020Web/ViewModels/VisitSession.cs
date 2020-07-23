using SiteVisitsNetCore2020Web.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SiteVisitsNetCore2020Web.ViewModels
{
    public class VisitSession
    {
        public string Organization { get; set; }
        /**
        public DateTime firstVisit { get; set; }
        public DateTime lastVisit { get; set; }
    **/
        public DateTime SampleVisitDateTime { get; set; }
        public string SampleIpAddress { get; set; }
        public List<VisitSessionBlock> VisitSessionBlocks { get; set; }
    }
}
