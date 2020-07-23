using System;
using System.Collections.Generic;
using System.Text;

namespace SiteVisitsNetCore2020Web.Models
{
    public class Region
    {
        //public int Id { get; set; }
        public Guid Id { get; set; }
        public string Name { get; set; }
        public virtual Country Country { get; set; }
        public DateTime FirstOccurrence { get; set; }
        public DateTime DateCreated { get; set; }

    }
}
