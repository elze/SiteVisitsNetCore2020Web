using SiteVisitsNetCore2020Web.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SiteVisitsNetCore2020Web.Models
{
    public class VisitSessionBlock
    {
        public string Browser { get; set; }
        public string Device { get; set; }
        public List<VisitViewModel> Visits { get; set; }
    }
}
