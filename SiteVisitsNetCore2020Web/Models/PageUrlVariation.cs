using System;
using System.Collections.Generic;
using System.Text;
using System.ComponentModel.DataAnnotations;

namespace SiteVisitsNetCore2020Web.Models
{
    public class PageUrlVariation
    {
        [Key]
        public string UrlVariation { get; set; }
        public string UrlVariationCompact { get; set; }
        public DateTime FirstOccurrence { get; set; }
        public virtual PageUrl PageUrl { get; set; }
        /**
        protected IAdapter adapter;
        public PageUrlVariation() { }

        public PageUrlVariation(IAdapter adapterV)
        {
            adapter = adapterV;
        }

        public void AddToContext()
        {
            adapter.AddPageUrlVariation(this);
        }
**/
    }
}
