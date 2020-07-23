using System;
using System.Collections.Generic;
using System.Text;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace SiteVisitsNetCore2020Web.Models
{
    public class ExtractedTerm
    {
        //public int Id { get; set; }
        public Guid Id { get; set; }
        //[Key, ForeignKey("Visit")]
        [ForeignKey("Visit")]
        [Column(Order = 20)]
        public Guid VisitId { get; set; }
        public string Term { get; set; }
        public DateTime FirstOccurrence { get; set; }
        public DateTime DateCreated { get; set; }
    }
}
