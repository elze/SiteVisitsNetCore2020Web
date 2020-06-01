using SiteVisitsNetCore2020Web.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SiteVisitsNetCore2020Web.ViewModels
{
    public class VisitSession
    {
        public string Isp { get; set; }
        public List<VisitSessionBlock> VisitSessionBlocks { get; set; }
    }
}
