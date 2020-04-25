using System;
using System.Collections.Generic;
using System.Text;
using System.ComponentModel.DataAnnotations;

namespace SiteVisitsNetCore2020Web.Models
{
    public class PageTitle
    {
        [Key]
        public string Title { get; set; }
        public string TitleCompact { get; set; }
        public DateTime FirstOccurrence { get; set; }
        public virtual PageUrl PageUrl { get; set; }
    }
}
