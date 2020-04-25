using System;
using System.Collections.Generic;
using System.Text;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
//using Microsoft.EntityFrameworkCore;

namespace SiteVisitsNetCore2020Web.Models
{
    public class IpAddressRelation
    {
        public int Id { get; set; }
        [Column(Order = 10)]
        public string IpGroup { get; set; }
        public int RelationLevel { get; set; }

        [Key, ForeignKey("IpAddress")]
        [Column(Order = 20)]
        public string IpV4Address { get; set; }

        public IpAddress IpAddress { get; set; }
        public int NumberOfTimes { get; set; }
    }
}
