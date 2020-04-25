using System;
using System.Collections.Generic;
using System.Text;
using System.ComponentModel.DataAnnotations;

namespace SiteVisitsNetCore2020Web.Models
{
    public class IpAddress
    {
        [Key]
        public string IpV4Address { get; set; }
        public int NumberOfTimes { get; set; }
        public string PostalCode { get; set; }
        public virtual City City { get; set; }
        public virtual Region Region { get; set; }
        public virtual Country Country { get; set; }
        public virtual Isp Isp { get; set; }
        public virtual Visitor Visitor { get; set; }
        public virtual List<IpAddressRelation> IpAddressRelations { get; set; }
    }
}
