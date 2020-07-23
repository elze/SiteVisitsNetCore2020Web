using System;
using System.Collections.Generic;
using System.Text;

namespace SiteVisitsNetCore2020Web.Models
{
    public class Device
    {
        //public int Id { get; set; }
        public Guid Id { get; set; }
        public string OperatingSystem { get; set; }
        public string Resolution { get; set; }
        public DateTime FirstOccurrence { get; set; }
        public DateTime DateCreated { get; set; }
    }
}
