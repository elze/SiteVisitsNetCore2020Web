using System;
using System.Collections.Generic;
using System.Text;

namespace SiteVisitsNetCore2020Web.Models
{
    public class Referrer
    {
        public int Id { get; set; }
        public string CameFrom { get; set; }
        public string ShortCameFrom { get; set; }
        public DateTime FirstOccurrence { get; set; }
        public DateTime DateCreated { get; set; }
    }
}
