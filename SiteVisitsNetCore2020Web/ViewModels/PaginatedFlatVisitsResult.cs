using SiteVisitsNetCore2020Web.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SiteVisitsNetCore2020Web.ViewModels
{
    public class PaginatedFlatVisitsResult
    {
        public int TotalCount { get; set; }
        public List<VisitFlat> visits { get; set; }
    }
}
