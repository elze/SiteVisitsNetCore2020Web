using SiteVisitsNetCore2020Web.Models;
using SiteVisitsNetCore2020Web.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SiteVisitsNetCore2020Web.Services
{
    public interface IVisitsService
    {
        Task<List<VisitFlat>> GetFlatVisits();
        Task<List<VisitSessionBlock>> GetVisitSessionByDeviceAndBrowserPair(Visit visit);
        Task<PaginatedFlatVisitsResult> GetFlatVisitsPage(int pageNum, int pageSize);
    }
}
