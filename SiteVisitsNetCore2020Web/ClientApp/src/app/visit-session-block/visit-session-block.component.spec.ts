import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { AppModule } from '../app.module';
import { VisitSessionBlockComponent } from './visit-session-block.component';
import { VisitSessionBlock } from '../viewmodels/VisitSessionBlock';
import { Visit } from '../models/Visit';
import { Browser } from '../models/Browser';
import { Device } from '../models/Device';
import { PageTitle } from '../models/PageTitle';

describe('VisitSessionBlockComponent', () => {
  let component: VisitSessionBlockComponent;
  let fixture: ComponentFixture<VisitSessionBlockComponent>;

  const browserId0 = "26eb2e19-7082-408b-b754-26ccacaa75b8"; //327
  const deviceId0 = "9840f9cc-9137-47af-80f9-e88207a60792"; // 605

  const cityId0 = "d0af49d4-fb2c-4f40-afaa-4157210795a0"; //807
  const regionId0 = "7808031b-3390-4509-ba7e-fbfb806ae305"; // 436 
  const countryId0 = "b5a3fb8d-a413-498f-bbc8-c0929743526a"; // 247
  const cameFromId0 = "1c42fa69-8595-4175-bfc9-13b8cbf4452f"; // 1310
  const cameFromStr0 = "http://www.google.com/imgres?imgurl=http://gallery.geekitude.com/d/5346-2/P1010375Everybody.jpg&imgrefurl=http://gallery.geekitude.com/v/2008/socialMediaCamp2008/&usg=__Of1-TbyBYLodZlryD4b1L15goi8=&h=113&w=150&sz=6&hl=en&start=12&zoom=0&tbnid=SrlDKXf9S4004M:&tbnh=72&tbnw=96&ei=cBn3TY3sC8Lr0gHW--2oCw&prev=/search%3Fq%3Dthistle%2Bcafe%2Baustin%2Btexas%26um%3D1%26hl%3Den%26client%3Dsafari%26rls%3Den%26biw%3D1024%26bih%3D613%26tbm%3Disch&um=1&itbs=1&iact=hc&vpx=820&vpy=220&dur=19&hovh=72&hovw=96&tx=58&ty=54&page=2&ndsp=14&ved=1t:429,r:13,s:12&biw=1024&bih=613";
  const shortCameFromStr0 = "q=thistle+cafe+austin+texas ... p=14 ... /www.google.com/imgres?imgurl=http://gallery.geekitude.com/d/5346-2/P1010375Everybody.jpg";
  const cameFromId1 = "3cb80c6b-1a32-4aa6-83f9-554899c5bf48"; // 1311
  const cameFromStr1 = "http://gallery.geekitude.com/v/2008/socialMediaCamp2008/";

  const extractedTermId0 = "b81fd69d-b552-438c-a46c-ba77bfbc6809"; // 471
  const extractedTermId1 = "2dc3a105-01ea-4f5e-bd72-984acdb79a5d"; // 472
  const extractedTermId2 = "243d605b-c51d-4321-8838-8f3184135e1c"; // 469
  const extractedTermId3 = "6601a98a-82fc-4873-bd8a-fd0d5188e90b"; // 470

  const ipV4Address = "70.244.202.70";

  const pageTitle0 = "Social Media Camp, July 30, 2008, Austin, Texas";
  const pageTitle1 = "P1010375 Everybody in the main room of Thistle Cafe";

  const pageUrlStr = "http://gallery.geekitude.com/v/2008/socialMediaCamp2008/P1010375Everybody.jpg.html";
  const pageUrlCompactStr = "2008/socialMediaCamp2008/P1010375Everybody.jpg.html";

  const pageTitleObj0: PageTitle = {
    "title": pageTitle0,
    "titleCompact": null,
    /**
    "pageUrl": {
      "url": "http://gallery.geekitude.com/v/2008/socialMediaCamp2008/",
      "urlCompact": pageUrl0
    }
    **/
  };

  const pageTitleObj1: PageTitle = {
    "title": pageTitle1,
    "titleCompact": null,
    /*
      "pageUrl": {
    "url": "http://gallery.geekitude.com/v/2008/socialMediaCamp2008/P1010375Everybody.jpg.html",
      "urlCompact": "2008/socialMediaCamp2008/P1010375Everybody.jpg.html"
  }
  */
  };


  const visitDatetime_1956 = "2011-06-14T03:19:56";
  const visitDateTime_2006 = "2011-06-14T03:20:06";
  const visitDateTime_2016 = "2011-06-14T03:20:16";

  const visitId0 = "9d72f183-2d34-4f62-8e46-b75cd8c782fe";
  const visitId1 = "e69a0ab5-3645-42d8-876f-59a0081cfd37";
  const visitId2 = "e74a86b7-f2f7-4fb6-833c-dddaabfbdc91";

  const visitSessionBlocks = new Array<VisitSessionBlock>();
  visitSessionBlocks.push({
    "browser": "Safari",
    "device": "MacOSX",
    "visits": [
      {
        "visit": new Visit({
          "id": visitId0,
          //"visitDatetime": new Date("2011-06-14T03:20:06"),
          "visitDatetime": visitDatetime_1956,
          "numberOfTimes": 0,
          "seTerm": "",
          "logFileName": "c:\\Users\\Elze\\Documents\\MyProjects\\DataImport\\FileExamplesForImport\\forImport_StatCounter-Log-2721969_20110614.csv",
          "visitType": "page view",
          "ipAddress": {
            "ipV4Address": ipV4Address,
            "numberOfTimes": 1,
            "postalCode": "",
            "city": {
              "id": cityId0,
              "name": "Austin",
              "region": {
                "id": regionId0,
                "name": "Texas",
                "country": {
                  "id": countryId0,
                  "name": "United States"
                }
              }
            },
            "region": {
              "id": regionId0,
              "name": "Texas",
              "country": {
                "id": countryId0,
                "name": "United States"
              }
            },
            "country": {
              "id": countryId0,
              "name": "United States"
            },
            "organization": null,
            "visitor": null,
            //"ipAddressRelations": null
          },
          "extractedTerms": [
            {
              "id": extractedTermId0,
              "visitId": visitId0,
              "term": "14"
            },
            {
              "id": extractedTermId1,
              "visitId": visitId0,
              "term": "thistle+cafe+austin+texas"
            }
          ],
          "pageUrl": {
            "url": "http://gallery.geekitude.com/v/2008/socialMediaCamp2008/",
            "urlCompact": "2008/socialMediaCamp2008/",
            "pageTitle": pageTitleObj0
          },
          "pageUrlVariation": null,
          "pageTitle": pageTitleObj0,
          "pageTitleVariation": null,
          "cameFrom": {
            "id": cameFromId0,
            "cameFrom": cameFromStr0,
            "shortCameFrom": shortCameFromStr0
          },
          "browser": new Browser({
            "id": browserId0,
            "name": "Safari",
            "version": "5.0"
          }),
          "device": new Device({
            "id": deviceId0,
            "operatingSystem": "MacOSX",
            "resolution": "1024x768"
          }),
          "searchEngine": null
        }),
        "ipAddress": ipV4Address,
        "combinedTerms": "14, thistle+cafe+austin+texas",
        "location": "United States / Texas / Austin",
        "pageUrl": "2008/socialMediaCamp2008/",
        "pageTitle": pageTitle0,
        "cameFrom": shortCameFromStr0
      },
      {
        "visit": new Visit({
          "id": visitId1,
          //"visitDatetime": new Date("2011-06-14T03:19:56"),
          "visitDatetime": visitDateTime_2006,
          "numberOfTimes": 0,
          "seTerm": "",
          "logFileName": "c:\\Users\\Elze\\Documents\\MyProjects\\DataImport\\FileExamplesForImport\\forImport_StatCounter-Log-2721969_20110614.csv",
          "visitType": "page view",
          "ipAddress": {
            "ipV4Address": ipV4Address,
            "numberOfTimes": 1,
            "postalCode": "",
            "city": {
              "id": cityId0,
              "name": "Austin",
              "region": {
                "id": regionId0,
                "name": "Texas",
                "country": {
                  "id": countryId0,
                  "name": "United States"
                }
              }
            },
            "region": {
              "id": regionId0,
              "name": "Texas",
              "country": {
                "id": countryId0,
                "name": "United States"
              }
            },
            "country": {
              "id": countryId0,
              "name": "United States"
            },
            "organization": null,
            "visitor": null
            //"ipAddressRelations": null
          },
          "extractedTerms": [
            {
              "id": extractedTermId2,
              "visitId": visitId1,
              "term": "14"
            },
            {
              "id": extractedTermId3,
              "visitId": visitId1,
              "term": "thistle+cafe+austin+texas"
            }
          ],
          "pageUrl": {
            "url": "http://gallery.geekitude.com/v/2008/socialMediaCamp2008/",
            "urlCompact": "2008/socialMediaCamp2008/",
            "pageTitle": pageTitleObj0
          },
          "pageUrlVariation": null,
          "pageTitle": pageTitleObj0,
          "pageTitleVariation": null,
          "cameFrom": {
            "id": cameFromId0,
            "cameFrom": cameFromStr0,
            "shortCameFrom": shortCameFromStr0
          },
          "browser": new Browser({
            "id": browserId0,
            "name": "Safari",
            "version": "5.0"
          }),
          "device": new Device({
            "id": deviceId0,
            "operatingSystem": "MacOSX",
            "resolution": "1024x768"
          }),
          "searchEngine": null
        }),
        "ipAddress": ipV4Address,
        "combinedTerms": "14, thistle+cafe+austin+texas",
        "location": "United States / Texas / Austin",
        "pageUrl": "2008/socialMediaCamp2008/",
        "pageTitle": pageTitle0,
        "cameFrom": shortCameFromStr0
      },
      {
        "visit": new Visit({
          "id": visitId2,
          //"visitDatetime": new Date("2011-06-14T03:20:16"),
          "visitDatetime": visitDateTime_2016,
          "numberOfTimes": 0,
          "seTerm": "",
          "logFileName": "c:\\Users\\Elze\\Documents\\MyProjects\\DataImport\\FileExamplesForImport\\forImport_StatCounter-Log-2721969_20110614.csv",
          "visitType": "page view",
          "ipAddress": {
            "ipV4Address": ipV4Address,
            "numberOfTimes": 1,
            "postalCode": "",
            "city": {
              "id": cityId0,
              "name": "Austin",
              "region": {
                "id": regionId0,
                "name": "Texas",
                "country": {
                  "id": countryId0,
                  "name": "United States"
                }
              }
            },
            "region": {
              "id": regionId0,
              "name": "Texas",
              "country": {
                "id": countryId0,
                "name": "United States"
              }
            },
            "country": {
              "id": countryId0,
              "name": "United States"
            },
            "organization": null,
            "visitor": null,
            //"ipAddressRelations": null
          },
          "extractedTerms": [],
          "pageUrl": {
            "url": pageUrlStr,
            "urlCompact": pageUrlCompactStr,
            "pageTitle": pageTitleObj1
          },
          "pageUrlVariation": null,
          "pageTitle": pageTitleObj1,
          "pageTitleVariation": null,
          "cameFrom": {
            "id": cameFromId1,
            "cameFrom": cameFromStr1,
            "shortCameFrom": null
          },
          "browser": new Browser({
            "id": browserId0,
            "name": "Safari",
            "version": "5.0"
          }),
          "device": new Device({
            "id": deviceId0,
            "operatingSystem": "MacOSX",
            "resolution": "1024x768"
          }),
          "searchEngine": null
        }),
        "ipAddress": ipV4Address,
        "combinedTerms": "",
        "location": "United States / Texas / Austin",
        "pageUrl": pageUrlStr,
        "pageTitle": pageTitle1,
        "cameFrom": cameFromStr1
      }
    ]
  });


  const initialState = {
    visitSessionBlocks: {
      dataSourceData: {
        organization: "Spectrum", visitSessionBlocks: visitSessionBlocks
      },
      loading: true,
      error: null
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      //declarations: [ VisitSessionBlockComponent ]
      providers: [
        provideMockStore({ initialState })
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitSessionBlockComponent);
    component = fixture.componentInstance;
    component.browser = "Safari";
    component.device = "MacOSX";
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
