using SiteVisitsNetCore2020Web.Data;
using SiteVisitsNetCore2020Web.Models;
using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;

namespace SiteVisitsNetCore2020Web.Services
{
    public class EntityHelper: IEntityHelper
    {
        private readonly SiteVisitsNetCore2020WebContext _context;

        public EntityHelper(SiteVisitsNetCore2020WebContext context)
        {
            _context = context;
        }

        public async Task<List<Visit>> GetVisitSubset(
            //SiteVisitsNetCore2020WebContext context, 
            Visit visit,
            //List<string> ipAddresses, Predicate<Visit> comparison)
            List<string> ipAddresses
            //Func<DateTime, DateTime, bool> comparison
            )
        {
            var subsequentVisits = await _context.Visit
                .Include(v => v.Device)
                .Include(v => v.Browser)
                .Include(v => v.IpAddress)
                    .ThenInclude(i => i.City).ThenInclude(c => c.Region).ThenInclude(r => r.Country)
                .Include(v => v.ExtractedTerms)
                .Include(v => v.PageUrl)
                .Include(v => v.PageUrlVariation)
                .Include(v => v.PageTitle)
                .Include(v => v.PageTitleVariation)
                .Include(v => v.CameFrom).ToListAsync();
            //.Where(v => ipAddresses.Contains(v.IpAddress.IpV4Address) && v.VisitDatetime >= visit.VisitDatetime)
            //var subsequentVisits = subsequentVisits1.Where(v => ipAddresses.Contains(v.IpAddress.IpV4Address) && comparison(v.VisitDatetime, visit.VisitDatetime))
              //  .OrderBy(v => v.VisitDatetime).ToList();
                //.ToListAsync();
            return subsequentVisits;
        }
    }
}
