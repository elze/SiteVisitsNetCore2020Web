using System;
using System.Collections.Generic;
using System.Text;

namespace SiteVisitsNetCore2020Web.Models
{
    public class Visit
    {
        public Guid Id { get; set; }
        public DateTime VisitDatetime { get; set; }
        public int NumberOfTimes { get; set; }
        public string SeTerm { get; set; }
        public string LogFileName { get; set; }
        public string VisitType { get; set; }
        public virtual IpAddress IpAddress { get; set; }
        public virtual PageUrl PageUrl { get; set; }
        public virtual PageUrlVariation PageUrlVariation { get; set; }
        public virtual PageTitle PageTitle { get; set; }
        public virtual PageTitleVariation PageTitleVariation { get; set; }
        public virtual Referrer CameFrom { get; set; }
        public virtual Browser Browser { get; set; }
        public virtual Device Device { get; set; }
        public virtual SearchEngine SearchEngine { get; set; }
    }
}
