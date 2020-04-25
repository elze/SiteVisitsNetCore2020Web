using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using SiteVisitsNetCore2020Web.Models;

namespace SiteVisitsNetCore2020Web.Data
{
    public class SiteVisitsNetCore2020WebContext : DbContext
    {
        public SiteVisitsNetCore2020WebContext (DbContextOptions<SiteVisitsNetCore2020WebContext> options)
            : base(options)
        {
        }

        public DbSet<SiteVisitsNetCore2020Web.Models.Visit> Visit { get; set; }
    }
}
