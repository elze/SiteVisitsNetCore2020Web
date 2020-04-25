using System;
using System.Collections.Generic;
using System.Text;
using System.ComponentModel.DataAnnotations;

namespace SiteVisitsNetCore2020Web.Models
{
    public class PageTitleVariation
    {
        [Key]
        public string TitleVariation { get; set; }
        public string TitleVariationCompact { get; set; }
        public DateTime FirstOccurrence { get; set; }
        public virtual PageTitle PageTitle { get; set; }
    }
}
