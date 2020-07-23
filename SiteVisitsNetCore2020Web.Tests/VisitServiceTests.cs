using Moq;
using SiteVisitsNetCore2020Web.Models;
using SiteVisitsNetCore2020Web.Services;
using SiteVisitsNetCore2020Web.ViewModels;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Xunit;

namespace SiteVisitsNetCore2020Web.Tests
{
    public class VisitServiceTests
    {
        private Mock<IEntityHelper> _mockEntityHelper;

        Guid visitId01 = new Guid("bdc277a7-9d5e-40ae-97e8-f78b3400044b");
        Guid visitId02 = new Guid("4888c98d-a954-4b1e-8769-b437acb9520d");
        Guid visitId03 = new Guid("a29aaeed-b5fa-467e-b724-d99c94019403");

        Guid visitId0 = new Guid("d56c50a7-c925-40b4-b1f5-9fdd41df7388");
        Guid visitId1 = new Guid("bf2d0c87-8302-454b-904b-1f8b1123863c");
        Guid visitId2 = new Guid("fea85e20-2aaa-4cfd-88f0-cb8df904411b");
        Guid visitId3 = new Guid("dbb12484-216d-43ea-a138-0fb537854fba");

        Guid visitId4 = new Guid("08cee290-2c68-407e-be56-1ac2aae28c68");
        Guid visitId5 = new Guid("d18c6504-9813-4e44-a845-0cae6a146d67");
        Guid visitId6 = new Guid("c337af78-0dbf-4c1b-a79a-6f360128d611");


        string ipAddress = "70.123.136.47";
        string logFileName = "c:\\Users\\Elze\\Documents\\MyProjects\\DataImport\\FileExamplesForImport\\forImport_StatCounter-Log-2721969.csv";

        /*** Made-up visits **/
        string dateTime01 = "2009-09-01T15:00:00";
        string dateTime02 = "2009-09-01T15:01:01";
        string dateTime03 = "2009-09-01T15:02:02";

        /** Real visits **/
        string dateTime0 = "2009-09-02T22:51:38";
        string dateTime1 = "2009-09-02T22:51:56";
        string dateTime2 = "2009-09-02T22:52:06";
        string dateTime3 = "2009-09-02T22:53:16";

        /*** Made-up visits **/
        string dateTime4 = "2009-09-02T23:40:00";
        string dateTime5 = "2009-09-01T23:41:01";
        string dateTime6 = "2009-09-01T23:42:02";


        string pageTitle = "Austin Tech Happy Hours, 9/11/2008 and 12/4/2008";
        string pageUrl = "http://pic.geekitude.com/v/2008/20080911ATHH/";
        string urlCompact = "2008/20080911ATHH/";
        string cameFrom1 = "http://pic.geekitude.com/v/2008/20080911ATHH/";
        string cameFrom3 = "http://sfragments.blogspot.com/2008/12/interesting-startups-at-austin-tech_11.html";
        Guid browserId = new Guid("557718c8-6a50-47ae-2a87-08d8206247f6");
        Guid deviceId = new Guid("0594edf1-1cfc-4d3d-2a88-08d8206247f6");
        Guid extractedTermId1 = new Guid("315044bf-f962-4843-2a89-08d8206247f6");
        Guid extractedTermId2 = new Guid("a751eb9c-d45c-48f2-2a8b-08d8206247f6");
        Guid extractedTermId3 = new Guid("c49bf52a-f085-400f-0fa1-08d820624801");
        Guid referrerId1 = new Guid("77cfa0b6-cc4d-4ec4-2a8a-08d8206247f6");
        Guid referrerId2 = new Guid("9c1239b2-e9b9-4380-0f9d-08d820624801");
        Guid referrerId3 = new Guid("15edbcdb-d17b-4ab0-0f9e-08d820624801");
        Guid referrerId4 = new Guid("c0c30e03-c906-4846-0f9f-08d820624801");
        //Guid referrerId5 = new Guid("13911194-75e4-4a20-0fa0-08d820624801");

        Browser browser;
        Device device;
        PageTitle pageTitleObj;
        PageUrl pageUrlObj;
        Visit visit01, visit02, visit03;
        Visit visit0, visit1, visit2, visit3;
        Visit visit4, visit5, visit6;

        public VisitServiceTests()
        {
            browser = new Browser
            {
                Id = browserId,
                Name = "MSIE",
                Version = "8.0"
            };
            device = new Device
            {
                Id = deviceId,
                OperatingSystem = "Windows NT6.1",
                Resolution = "1280x1024"
            };
            pageTitleObj = new PageTitle
            {
                Title = pageTitle,
                FirstOccurrence = DateTime.Parse("2009-09-02T22:51:38"),
                //PageUrl = pageUrlObj,
            };
            pageUrlObj = new PageUrl
            {
                Url = pageUrl,
                UrlCompact = urlCompact,
                PageTitle = pageTitleObj,
                FirstOccurrence = DateTime.Parse("2009-09-02T22:51:38")
            };

            visit03 = new Visit
            {
                Id = visitId03,
                VisitDatetime = DateTime.Parse(dateTime03),
                NumberOfTimes = 0,
                SeTerm = "ATHH 2009",
                LogFileName = logFileName,
                VisitType = "page view",
                IpAddress = new IpAddress
                {
                    IpV4Address = ipAddress,
                    NumberOfTimes = 1,
                },
                ExtractedTerms = new List<ExtractedTerm> {
                    new ExtractedTerm {
                        Id = extractedTermId1,
                        VisitId = visitId03,
                        Term= "ATHH 2009"
                    }
                },
                PageTitle = pageTitleObj,
                PageUrl = pageUrlObj,
                CameFrom = new Referrer
                {
                    Id = referrerId1,
                    CameFrom = "http://www.google.com/search?hl=en&q=ATHH 2009&start=10&sa=N",
                    ShortCameFrom = "q=ATHH 2009"
                },
                Browser = browser,
                Device = device
            };

            visit02 = new Visit
            {
                Id = visitId02,
                VisitDatetime = DateTime.Parse(dateTime02),
                NumberOfTimes = 0,
                SeTerm = "ATHH 2009",
                LogFileName = logFileName,
                VisitType = "page view",
                IpAddress = new IpAddress
                {
                    IpV4Address = ipAddress,
                    NumberOfTimes = 1,
                },
                ExtractedTerms = new List<ExtractedTerm> {
                    new ExtractedTerm {
                        Id = extractedTermId1,
                        VisitId = visitId02,
                        Term= "ATHH 2009"
                    }
                },
                PageTitle = pageTitleObj,
                PageUrl = pageUrlObj,
                /**
                PageTitle = new PageTitle
                {
                    Title = pageTitle,
                    FirstOccurrence = DateTime.Parse("2009-09-02T22:51:38"),
                    //PageUrl = pageUrlObj,
                },
                ***/
                CameFrom = new Referrer
                {
                    Id = referrerId1,
                    CameFrom = "http://www.google.com/search?hl=en&q=ATHH 2009&start=10&sa=N",
                    ShortCameFrom = "q=ATHH 2009"
                },
                Browser = browser,
                Device = device
            };

            visit01 = new Visit
            {
                Id = visitId01,
                VisitDatetime = DateTime.Parse(dateTime01),
                NumberOfTimes = 0,
                SeTerm = "ATHH 2009",
                LogFileName = logFileName,
                VisitType = "page view",
                IpAddress = new IpAddress
                {
                    IpV4Address = ipAddress,
                    NumberOfTimes = 1,
                },
                ExtractedTerms = new List<ExtractedTerm> {
                    new ExtractedTerm {
                        Id = extractedTermId1,
                        VisitId = visitId01,
                        Term= "ATHH 2009"
                    }
                },
                PageTitle = pageTitleObj,
                PageUrl = pageUrlObj,
                /**
                PageTitle = new PageTitle
                {
                    Title = pageTitle,
                    FirstOccurrence = DateTime.Parse("2009-09-02T22:51:38"),
                    PageUrl = pageUrlObj,
                },
                ***/
                CameFrom = new Referrer
                {
                    Id = referrerId1,
                    CameFrom = "http://www.google.com/search?hl=en&q=ATHH 2009&start=10&sa=N",
                    ShortCameFrom = "q=ATHH 2009"
                },
                Browser = browser,
                Device = device
            };

            visit0 = new Visit
            {
                Id = visitId0,
                VisitDatetime = DateTime.Parse(dateTime0),
                NumberOfTimes = 0,
                SeTerm = "austin tech happy hour 2009",
                LogFileName = logFileName,
                VisitType = "page view",
                IpAddress = new IpAddress
                {
                    IpV4Address = ipAddress,
                    NumberOfTimes = 1,
                },
                ExtractedTerms = new List<ExtractedTerm> {
                    new ExtractedTerm {
                        Id = extractedTermId2,
                        VisitId = visitId0,
                        Term= "\"austin tech happy hour\" 2009"
                    }
                },
                PageTitle = pageTitleObj,
                PageUrl = pageUrlObj,
                /**
                PageTitle = new PageTitle
                {
                    Title = pageTitle,
                    FirstOccurrence = DateTime.Parse("2009-09-02T22:51:38"),
                    //PageUrl = pageUrlObj,
                },
                **/
                CameFrom = new Referrer
                {
                    Id = referrerId2,
                    CameFrom = "http://www.google.com/search?hl=en&q=%22austin tech happy hour%22 2009&start=10&sa=N",
                    ShortCameFrom = "q=\"austin tech happy hour\" 2009"
                },
                Browser = browser,
                Device = device
            };
            
            visit1 = new Visit
            {
                Id = visitId1,
                VisitDatetime = DateTime.Parse(dateTime1),
                NumberOfTimes = 0,
                LogFileName = logFileName,
                VisitType = "page view",
                IpAddress = new IpAddress
                {
                    IpV4Address = ipAddress,
                    NumberOfTimes = 1,
                },
                ExtractedTerms = null,
                PageUrl = new PageUrl
                {
                    Url = "http://pic.geekitude.com/v/2008/20080911ATHH/?g2_page=2",
                    UrlCompact = "2008/20080911ATHH/?g2_page=2",
                    PageTitle = pageTitleObj,
                    FirstOccurrence = DateTime.Parse("2009-09-02T22:51:56")
                },
                PageTitle = pageTitleObj,
                /**
                PageTitle = new PageTitle
                {
                    Title = pageTitle,
                    FirstOccurrence = DateTime.Parse("2009-09-02T22:51:38"),
                    PageUrl = pageUrlObj,
                },
                **/
                CameFrom = new Referrer
                {
                    Id = referrerId3,
                    CameFrom = cameFrom1,
                },
                Browser = browser,
                Device = device
            };

            visit2 = new Visit
            {
                Id = visitId2,
                VisitDatetime = DateTime.Parse(dateTime2),
                NumberOfTimes = 0,
                SeTerm = "austin tech happy hour 2009",
                LogFileName = logFileName,
                VisitType = "page view",
                IpAddress = new IpAddress
                {
                    IpV4Address = ipAddress,
                    NumberOfTimes = 1,
                },
                ExtractedTerms = new List<ExtractedTerm> {
                    new ExtractedTerm {
                        Id = extractedTermId3,
                        VisitId = visitId2,
                        Term= "\"austin tech happy hour\" 2009"
                    }
                },
                PageTitle = pageTitleObj,
                PageUrl = pageUrlObj,
                /**
                PageTitle = new PageTitle
                {
                    Title = pageTitle,
                    FirstOccurrence = DateTime.Parse("2009-09-02T22:51:38"),
                    PageUrl = pageUrlObj,
                },
                **/
                CameFrom = new Referrer
                {
                    Id = referrerId2,
                    CameFrom = "http://www.google.com/search?hl=en&q=%22austin tech happy hour%22 2009&start=10&sa=N",
                    ShortCameFrom = "q=\"austin tech happy hour\" 2009"
                },
                Browser = browser,
                Device = device
            };

            visit3 = new Visit
            {
                Id = visitId3,
                VisitDatetime = DateTime.Parse(dateTime3),
                NumberOfTimes = 0,
                LogFileName = logFileName,
                VisitType = "page view",
                IpAddress = new IpAddress
                {
                    IpV4Address = ipAddress,
                    NumberOfTimes = 1,
                },
                ExtractedTerms = null,
                PageTitle = pageTitleObj,
                PageUrl = pageUrlObj,
                /**
                PageTitle = new PageTitle
                {
                    Title = pageTitle,
                    FirstOccurrence = DateTime.Parse("2009-09-02T22:51:38"),
                    PageUrl = pageUrlObj,
                },
                **/
                CameFrom = new Referrer
                {
                    Id = referrerId4,
                    CameFrom = cameFrom3,
                },
                Browser = browser,
                Device = device
            };

            visit4 = new Visit
            {
                Id = visitId4,
                VisitDatetime = DateTime.Parse(dateTime4),
                NumberOfTimes = 0,
                LogFileName = logFileName,
                VisitType = "page view",
                IpAddress = new IpAddress
                {
                    IpV4Address = ipAddress,
                    NumberOfTimes = 1,
                },
                ExtractedTerms = null,
                PageUrl = pageUrlObj,
                PageTitle = pageTitleObj,
                /**
                PageTitle = new PageTitle
                {
                    Title = pageTitle,
                    FirstOccurrence = DateTime.Parse("2009-09-02T22:51:38"),
//                    PageUrl = pageUrlObj,
                },
                **/
                CameFrom = new Referrer
                {
                    Id = referrerId4,
                    CameFrom = cameFrom3,
                },
                Browser = browser,
                Device = device
            };

            visit5 = new Visit
            {
                Id = visitId5,
                VisitDatetime = DateTime.Parse(dateTime5),
                NumberOfTimes = 0,
                LogFileName = logFileName,
                VisitType = "page view",
                IpAddress = new IpAddress
                {
                    IpV4Address = ipAddress,
                    NumberOfTimes = 1,
                },
                ExtractedTerms = null,
                PageUrl = pageUrlObj,
                PageTitle = pageTitleObj,
                /**
                PageTitle = new PageTitle
                {
                    Title = pageTitle,
                    FirstOccurrence = DateTime.Parse("2009-09-02T22:51:38"),
                    //PageUrl = pageUrlObj,
                },
                **/
                CameFrom = new Referrer
                {
                    Id = referrerId4,
                    CameFrom = cameFrom3,
                },
                Browser = browser,
                Device = device
            };

            visit6 = new Visit
            {
                Id = visitId6,
                VisitDatetime = DateTime.Parse(dateTime6),
                NumberOfTimes = 0,
                LogFileName = logFileName,
                VisitType = "page view",
                IpAddress = new IpAddress
                {
                    IpV4Address = ipAddress,
                    NumberOfTimes = 1,
                },
                ExtractedTerms = null,
                PageTitle = pageTitleObj,
                PageUrl = pageUrlObj,
                /**
                PageTitle = new PageTitle
                {
                    Title = pageTitle,
                    FirstOccurrence = DateTime.Parse("2009-09-02T22:51:38"),
                    //PageUrl = pageUrlObj,
                },
                ***/
                CameFrom = new Referrer
                {
                    Id = referrerId4,
                    CameFrom = cameFrom3,
                },
                Browser = browser,
                Device = device
            };

        }

        [Fact]
        public async Task GetSubsequentSessionVisits_ShouldReturnVisitsFromSessionLaterThanGivenVisit()
        {
            _mockEntityHelper = new Mock<IEntityHelper>();
            _mockEntityHelper.Setup(s => s.GetVisitSubset(visit2, new List<string> { ipAddress }
              )).ReturnsAsync(new List<Visit> { visit0, visit1, visit2, visit3 });
            VisitsService visitsService = new VisitsService(_mockEntityHelper.Object);
            List<Visit> subsequentSessionVisits = await visitsService.GetSubsequentSessionVisits(visit2, new List<string> { ipAddress });
            Assert.Equal(visit2, subsequentSessionVisits[0]);
            Assert.Equal(visit3, subsequentSessionVisits[1]);
        }

        [Fact]
        public async Task GetPrecedingSessionVisitsSessionVisits_ShouldReturnVisitsFromSessionEarlierThanGivenVisit()
        {
            _mockEntityHelper = new Mock<IEntityHelper>();
            _mockEntityHelper.Setup(s => s.GetVisitSubset(visit2, new List<string> { ipAddress }
              )).ReturnsAsync(new List<Visit> { visit0, visit1, visit2, visit3 });
            VisitsService visitsService = new VisitsService(_mockEntityHelper.Object);
            List<Visit> precedingSessionVisits = await visitsService.GetPrecedingSessionVisits(visit2, new List<string> { ipAddress });
            Assert.Equal(visit0, precedingSessionVisits[0]);
            Assert.Equal(visit1, precedingSessionVisits[1]);
        }


        [Fact]
        public async Task GetPrecedingSessionVisitsSessionVisits_ShouldNotReturnVisitsOlderThanCertainTime()
        {
            _mockEntityHelper = new Mock<IEntityHelper>();
            _mockEntityHelper.Setup(s => s.GetVisitSubset(visit2, new List<string> { ipAddress }
              )).ReturnsAsync(new List<Visit> { visit03, visit02, visit01, visit0, visit1, visit2, visit3 });
            VisitsService visitsService = new VisitsService(_mockEntityHelper.Object);
            List<Visit> precedingSessionVisits = await visitsService.GetPrecedingSessionVisits(visit2, new List<string> { ipAddress });
            Assert.Equal(visit0, precedingSessionVisits[0]);
            Assert.Equal(visit1, precedingSessionVisits[1]);
        }

        [Fact]
        public async Task GetSubsequentSessionVisits_ShouldNotReturnVisitsNewerThanCertainTime()
        {
            _mockEntityHelper = new Mock<IEntityHelper>();
            _mockEntityHelper.Setup(s => s.GetVisitSubset(visit2, new List<string> { ipAddress }
              )).ReturnsAsync(new List<Visit> { visit03, visit02, visit01, visit0, visit1, visit2, visit3, visit4, visit5, visit6 });
            VisitsService visitsService = new VisitsService(_mockEntityHelper.Object);
            List<Visit> subsequentSessionVisits = await visitsService.GetSubsequentSessionVisits(visit2, new List<string> { ipAddress });
            Assert.Equal(visit2, subsequentSessionVisits[0]);
            Assert.Equal(visit3, subsequentSessionVisits[1]);
        }


        [Fact]
        public async Task GetVisitSessionByDeviceAndBrowserPair_ShouldReturnAllVisitsFromSession()
        {
            _mockEntityHelper = new Mock<IEntityHelper>();
            _mockEntityHelper.Setup(s => s.GetVisitSubset(visit2, new List<string> { ipAddress }
              )).ReturnsAsync(new List<Visit> { visit0, visit1, visit2, visit3 });
            VisitsService visitsService = new VisitsService(_mockEntityHelper.Object);
            var visitSession = await visitsService.GetVisitSessionByDeviceAndBrowserPair(visit2);
            Assert.Equal(visit2.IpAddress.Organization?.Name, visitSession.Organization);
            var visitSessionBlocks = visitSession.VisitSessionBlocks;
            Assert.Single(visitSessionBlocks);
            Assert.Equal(browser.Name, visitSessionBlocks[0].Browser);
            Assert.Equal(device.OperatingSystem, visitSessionBlocks[0].Device);
            Assert.Equal(4, visitSessionBlocks[0].Visits.Count);

            Assert.Equal(ipAddress, visitSessionBlocks[0].Visits[0].IpAddress);
            Assert.Equal("", visitSessionBlocks[0].Visits[0].Location);
            Assert.Equal(pageTitle, visitSessionBlocks[0].Visits[0].PageTitle);
            Assert.Equal(urlCompact, visitSessionBlocks[0].Visits[0].PageUrl);
            Assert.Equal("q=\"austin tech happy hour\" 2009", visitSessionBlocks[0].Visits[0].CameFrom);
            Assert.Equal("\"austin tech happy hour\" 2009, austin tech happy hour 2009", visitSessionBlocks[0].Visits[0].CombinedTerms);
            Assert.Equal(visit0, visitSessionBlocks[0].Visits[0].Visit);

            Assert.Equal(ipAddress, visitSessionBlocks[0].Visits[1].IpAddress);
            Assert.Equal("", visitSessionBlocks[0].Visits[1].Location);
            Assert.Equal(pageTitle, visitSessionBlocks[0].Visits[1].PageTitle);
            Assert.Equal("2008/20080911ATHH/?g2_page=2", visitSessionBlocks[0].Visits[1].PageUrl);
            Assert.Equal(cameFrom1, visitSessionBlocks[0].Visits[1].CameFrom);
            Assert.Null(visitSessionBlocks[0].Visits[1].CombinedTerms);
            Assert.Equal(visit1, visitSessionBlocks[0].Visits[1].Visit);

            Assert.Equal(ipAddress, visitSessionBlocks[0].Visits[2].IpAddress);
            Assert.Equal("", visitSessionBlocks[0].Visits[2].Location);
            Assert.Equal(pageTitle, visitSessionBlocks[0].Visits[2].PageTitle);
            Assert.Equal(urlCompact, visitSessionBlocks[0].Visits[2].PageUrl);
            Assert.Equal("q=\"austin tech happy hour\" 2009", visitSessionBlocks[0].Visits[2].CameFrom);
            Assert.Equal("\"austin tech happy hour\" 2009, austin tech happy hour 2009", visitSessionBlocks[0].Visits[2].CombinedTerms);
            Assert.Equal(visit2, visitSessionBlocks[0].Visits[2].Visit);

            Assert.Equal(ipAddress, visitSessionBlocks[0].Visits[3].IpAddress);
            Assert.Equal("", visitSessionBlocks[0].Visits[3].Location);
            Assert.Equal(pageTitle, visitSessionBlocks[0].Visits[3].PageTitle);
            Assert.Equal(urlCompact, visitSessionBlocks[0].Visits[3].PageUrl);
            Assert.Equal(cameFrom3, visitSessionBlocks[0].Visits[3].CameFrom);
            Assert.Null(visitSessionBlocks[0].Visits[3].CombinedTerms);
            Assert.Equal(visit3, visitSessionBlocks[0].Visits[3].Visit);
        }

        /***
        [Fact]
        public async Task GetGetFlatVisitsPage_ShouldReturnVisitsInAGivenRange()
        {
            _mockEntityHelper = new Mock<IEntityHelper>();
            _mockEntityHelper.Setup(s => s.GetVisitCount()).ReturnsAsync(10);

            //IQueryable listOppLineData = Enumerable.Empty<Visit>().AsQueryable();
            //var visits = new List<Visit> { visit03, visit02, visit01, visit0, visit1, visit2, visit3, visit4, visit5, visit6 };
            var visits = new List<Visit> { visit0, visit1, visit2 };
            int totalCount = 236;
            IQueryable<Visit> visitsQ = visits.AsQueryable();

            _mockEntityHelper.Setup(s => s.GetFlatVisitsPage(3, 5)).Returns(visitsQ);
            VisitsService visitsService = new VisitsService(_mockEntityHelper.Object);
            PaginatedFlatVisitsResult paginatedFlatVisitsResult = await visitsService.GetFlatVisitsPage(3, 5);
            Assert.Equal(totalCount, paginatedFlatVisitsResult.TotalCount);
            //foreach (var v in paginatedFlatVisitsResult.visits) { 
            Assert.Equal(visit0.Id, paginatedFlatVisitsResult.visits[0].Id);
            Assert.Equal(visit1.Id, paginatedFlatVisitsResult.visits[1].Id);
            Assert.Equal(visit2.Id, paginatedFlatVisitsResult.visits[2].Id);
        }
        ***/

    }
}
