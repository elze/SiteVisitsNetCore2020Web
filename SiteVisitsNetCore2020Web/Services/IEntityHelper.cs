﻿using SiteVisitsNetCore2020Web.Data;
using SiteVisitsNetCore2020Web.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SiteVisitsNetCore2020Web.Services
{
    public interface IEntityHelper
    {
        Task<int> GetVisitCount();
        Task<List<Visit>> GetVisitSubset(Visit visit, List<string> ipAddresses);
        IQueryable<Visit> GetFlatVisits();
        IQueryable<Visit> GetFlatVisitsPage(int pageNum, int pageSize);
    }
}
