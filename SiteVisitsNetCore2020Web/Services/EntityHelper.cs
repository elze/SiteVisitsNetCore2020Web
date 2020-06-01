using SiteVisitsNetCore2020Web.Data;
using SiteVisitsNetCore2020Web.Models;
using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;

namespace SiteVisitsNetCore2020Web.Services
{
    public class EntityHelper : IEntityHelper
    {
        private readonly SiteVisitsNetCore2020WebContext _context;

        public EntityHelper(SiteVisitsNetCore2020WebContext context)
        {
            _context = context;
        }

        public async Task<int> GetVisitCount()
        {
            return await _context.Visit.CountAsync();
        }

        public async Task<List<Visit>> GetVisitSubset(Visit visit, List<string> ipAddresses)
        {
            var subsequentVisits = await _context.Visit
                .Include(v => v.Device)
                .Include(v => v.Browser)
                .Include(v => v.IpAddress)
                    .ThenInclude(i => i.City).ThenInclude(c => c.Region).ThenInclude(r => r.Country)
                .Include(v => v.IpAddress)
                    .ThenInclude(i => i.Isp)
                .Include(v => v.ExtractedTerms)
                .Include(v => v.PageUrl)
                .Include(v => v.PageUrlVariation)
                .Include(v => v.PageTitle)
                .Include(v => v.PageTitleVariation)
                .Include(v => v.CameFrom).ToListAsync();
            return subsequentVisits;
        }

        public IQueryable<Visit> GetFlatVisits()
        {
            var visits = _context.Visit
            //.Where(v => !string.IsNullOrEmpty(v.SeTerm) && !v.SeTerm.Contains("Encrypted Search") 
            //|| v.ExtractedTerms.Count > 0
            //)
            .Include(v => v.IpAddress)
                .ThenInclude(i => i.City).ThenInclude(c => c.Region).ThenInclude(r => r.Country)
            .Include(v => v.IpAddress)
                .ThenInclude(i => i.Isp)
            //.Include(v => v.IpAddress)
            // .ThenInclude(i => i.Visitor)
            .Include(v => v.ExtractedTerms)
            .Include(v => v.PageUrl)
            .Include(v => v.PageUrlVariation)
            .Include(v => v.PageTitle)
            .Include(v => v.PageTitleVariation)
            .Include(v => v.CameFrom)
            .OrderByDescending(v => v.VisitDatetime);
        //.ToListAsync();
            //return await visits;
            return visits;
        }


        //public async Task<List<Visit>> GetVisitsPage(int pageNum, int pageSize)
        public IQueryable<Visit> GetFlatVisitsPage(int pageNum, int pageSize)
        {
            int nToSkip = pageNum * pageSize;
            var visits = _context.Visit
            //.Where(v => !string.IsNullOrEmpty(v.SeTerm) && !v.SeTerm.Contains("Encrypted Search") 
            //|| v.ExtractedTerms.Count > 0
            //)
            .Include(v => v.IpAddress)
                .ThenInclude(i => i.City).ThenInclude(c => c.Region).ThenInclude(r => r.Country)
            .Include(v => v.IpAddress)
                .ThenInclude(i => i.Isp)
            //.Include(v => v.IpAddress)
            // .ThenInclude(i => i.Visitor)
            .Include(v => v.ExtractedTerms)
            .Include(v => v.PageUrl)
            .Include(v => v.PageUrlVariation)
            .Include(v => v.PageTitle)
            .Include(v => v.PageTitleVariation)
            .Include(v => v.CameFrom)
            .OrderByDescending(v => v.VisitDatetime)
            .Skip(nToSkip)
        .Take(pageSize);
        //.ToListAsync();
            //return await visits;
            return visits;
        }

    }
}
