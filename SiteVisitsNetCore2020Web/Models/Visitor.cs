﻿using System;
using System.Collections.Generic;
using System.Text;

namespace SiteVisitsNetCore2020Web.Models
{
    public class Visitor
    {
        //public int Id { get; set; }
        public Guid Id { get; set; }
        public string Label { get; set; }
        public string Note { get; set; }
        public DateTime FirstOccurrence { get; set; }
        public DateTime DateCreated { get; set; }
    }
}
