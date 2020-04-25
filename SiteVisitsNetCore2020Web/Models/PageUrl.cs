using System;
using System.Collections.Generic;
using System.Text;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.RegularExpressions;

namespace SiteVisitsNetCore2020Web.Models
{
    public class PageUrl
    {
        [Key]
        public string Url { get; set; }
        public string UrlCompact { get; set; }
        public DateTime FirstOccurrence { get; set; }

        public static string CanonicalUrl(string url)
        {
            string canonicalUrl = url;
            int canonicalUrlEndInd;
            int indOfGallery = url.IndexOf("pic.geekitude");
            if (indOfGallery == -1)
                indOfGallery = url.IndexOf("gallery.geekitude");
            if (indOfGallery != -1)
            {
                canonicalUrlEndInd = url.IndexOf("?", indOfGallery);
                if (canonicalUrlEndInd != -1)
                {
                    int slideShowInd = url.IndexOf("slideshow", indOfGallery);
                    if (slideShowInd != -1)
                        // Query string is normal in a slideshow URL
                        return canonicalUrl;
                    int pageNumInd = url.IndexOf("g2_page", indOfGallery);
                    if (pageNumInd != -1)
                        // Query string is normal in a URL that goes to a specific page in an album
                        return canonicalUrl;
                    canonicalUrl = url.Substring(0, canonicalUrlEndInd);
                }

                return canonicalUrl;
            }

            int indOfArmad = url.IndexOf("armadillocon.org");
            if (indOfArmad != -1)
            {
                canonicalUrlEndInd = url.IndexOf("?", indOfArmad);
                if (canonicalUrlEndInd != -1)
                {
                    canonicalUrl = url.Substring(0, canonicalUrlEndInd);
                }
            }

            canonicalUrl = AngularRoutes(canonicalUrl);

            return canonicalUrl;

        }

        private static string AngularRoutes(string url)
        {
            string canonicalUrl = url;
            int canonicalUrlEndInd = url.LastIndexOf("#", canonicalUrl.Length - 1);
            if (canonicalUrlEndInd != -1)
            {

                Match m = Regex.Match(url, "/#/", RegexOptions.IgnoreCase);
                if (m == null || m != null && m.Index + 1 != canonicalUrlEndInd)
                {
                    canonicalUrl = url.Substring(0, canonicalUrlEndInd);
                }
            }
            return canonicalUrl;
        }

    }
}
