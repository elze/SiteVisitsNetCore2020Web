import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { AppModule } from '../app.module';
import { VisitSessionBlockComponent } from './visit-session-block.component';
import { VisitSessionBlock } from '../viewmodels/VisitSessionBlock';
import { Visit } from '../models/Visit';
import { Browser } from '../models/Browser';
import { Device } from '../models/Device';

describe('VisitSessionBlockComponent', () => {
  let component: VisitSessionBlockComponent;
  let fixture: ComponentFixture<VisitSessionBlockComponent>;

  const visitSessionBlocks = new Array<VisitSessionBlock>();
  visitSessionBlocks.push({
    "browser": "Safari",
    "device": "MacOSX",
    "visits": [
      {
        "visit": new Visit({
          "id": "9d72f183-2d34-4f62-8e46-b75cd8c782fe",
          //"visitDatetime": new Date("2011-06-14T03:20:06"),
          "visitDatetime": "2011-06-14T03:20:06",
          "numberOfTimes": 0,
          "seTerm": "",
          "logFileName": "c:\\Users\\Elze\\Documents\\MyProjects\\DataImport\\FileExamplesForImport\\forImport_StatCounter-Log-2721969_20110614.csv",
          "visitType": "page view",
          "ipAddress": {
            "ipV4Address": "70.244.202.70",
            "numberOfTimes": 1,
            "postalCode": "",
            "city": {
              "id": 807,
              "name": "Austin",
              "region": {
                "id": 436,
                "name": "Texas",
                "country": {
                  "id": 247,
                  "name": "United States"
                }
              }
            },
            "region": {
              "id": 436,
              "name": "Texas",
              "country": {
                "id": 247,
                "name": "United States"
              }
            },
            "country": {
              "id": 247,
              "name": "United States"
            },
            "isp": null,
            "visitor": null,
            //"ipAddressRelations": null
          },
          "extractedTerms": [
            {
              "id": 471,
              "visitId": "9d72f183-2d34-4f62-8e46-b75cd8c782fe",
              "term": "14"
            },
            {
              "id": 472,
              "visitId": "9d72f183-2d34-4f62-8e46-b75cd8c782fe",
              "term": "thistle+cafe+austin+texas"
            }
          ],
          "pageUrl": {
            "url": "http://gallery.geekitude.com/v/2008/socialMediaCamp2008/",
            "urlCompact": "2008/socialMediaCamp2008/"
          },
          "pageUrlVariation": null,
          "pageTitle": {
            "title": "Social Media Camp, July 30, 2008, Austin, Texas",
            "titleCompact": null,
            "pageUrl": {
              "url": "http://gallery.geekitude.com/v/2008/socialMediaCamp2008/",
              "urlCompact": "2008/socialMediaCamp2008/"
            }
          },
          "pageTitleVariation": null,
          "cameFrom": {
            "id": 1310,
            "cameFrom": "http://www.google.com/imgres?imgurl=http://gallery.geekitude.com/d/5346-2/P1010375Everybody.jpg&imgrefurl=http://gallery.geekitude.com/v/2008/socialMediaCamp2008/&usg=__Of1-TbyBYLodZlryD4b1L15goi8=&h=113&w=150&sz=6&hl=en&start=12&zoom=0&tbnid=SrlDKXf9S4004M:&tbnh=72&tbnw=96&ei=cBn3TY3sC8Lr0gHW--2oCw&prev=/search%3Fq%3Dthistle%2Bcafe%2Baustin%2Btexas%26um%3D1%26hl%3Den%26client%3Dsafari%26rls%3Den%26biw%3D1024%26bih%3D613%26tbm%3Disch&um=1&itbs=1&iact=hc&vpx=820&vpy=220&dur=19&hovh=72&hovw=96&tx=58&ty=54&page=2&ndsp=14&ved=1t:429,r:13,s:12&biw=1024&bih=613",
            "shortCameFrom": "q=thistle+cafe+austin+texas ... p=14 ... /www.google.com/imgres?imgurl=http://gallery.geekitude.com/d/5346-2/P1010375Everybody.jpg"
          },
          "browser": new Browser({
            "id": 327,
            "name": "Safari",
            "version": "5.0"
          }),
          "device": new Device({
            "id": 605,
            "operatingSystem": "MacOSX",
            "resolution": "1024x768"
          }),
          "searchEngine": null
        }),
        "ipAddress": "70.244.202.70",
        "combinedTerms": "14, thistle+cafe+austin+texas",
        "location": "United States / Texas / Austin",
        "pageUrl": "2008/socialMediaCamp2008/",
        "pageTitle": "Social Media Camp, July 30, 2008, Austin, Texas",
        "cameFrom": "q=thistle+cafe+austin+texas ... p=14 ... /www.google.com/imgres?imgurl=http://gallery.geekitude.com/d/5346-2/P1010375Everybody.jpg"
      },
      {
        "visit": new Visit({
          "id": "e69a0ab5-3645-42d8-876f-59a0081cfd37",
          //"visitDatetime": new Date("2011-06-14T03:19:56"),
          "visitDatetime": "2011-06-14T03:19:56",
          "numberOfTimes": 0,
          "seTerm": "",
          "logFileName": "c:\\Users\\Elze\\Documents\\MyProjects\\DataImport\\FileExamplesForImport\\forImport_StatCounter-Log-2721969_20110614.csv",
          "visitType": "page view",
          "ipAddress": {
            "ipV4Address": "70.244.202.70",
            "numberOfTimes": 1,
            "postalCode": "",
            "city": {
              "id": 807,
              "name": "Austin",
              "region": {
                "id": 436,
                "name": "Texas",
                "country": {
                  "id": 247,
                  "name": "United States"
                }
              }
            },
            "region": {
              "id": 436,
              "name": "Texas",
              "country": {
                "id": 247,
                "name": "United States"
              }
            },
            "country": {
              "id": 247,
              "name": "United States"
            },
            "isp": null,
            "visitor": null
            //"ipAddressRelations": null
          },
          "extractedTerms": [
            {
              "id": 469,
              "visitId": "e69a0ab5-3645-42d8-876f-59a0081cfd37",
              "term": "14"
            },
            {
              "id": 470,
              "visitId": "e69a0ab5-3645-42d8-876f-59a0081cfd37",
              "term": "thistle+cafe+austin+texas"
            }
          ],
          "pageUrl": {
            "url": "http://gallery.geekitude.com/v/2008/socialMediaCamp2008/",
            "urlCompact": "2008/socialMediaCamp2008/"
          },
          "pageUrlVariation": null,
          "pageTitle": {
            "title": "Social Media Camp, July 30, 2008, Austin, Texas",
            "titleCompact": null,
            "pageUrl": {
              "url": "http://gallery.geekitude.com/v/2008/socialMediaCamp2008/",
              "urlCompact": "2008/socialMediaCamp2008/"
            }
          },
          "pageTitleVariation": null,
          "cameFrom": {
            "id": 1310,
            "cameFrom": "http://www.google.com/imgres?imgurl=http://gallery.geekitude.com/d/5346-2/P1010375Everybody.jpg&imgrefurl=http://gallery.geekitude.com/v/2008/socialMediaCamp2008/&usg=__Of1-TbyBYLodZlryD4b1L15goi8=&h=113&w=150&sz=6&hl=en&start=12&zoom=0&tbnid=SrlDKXf9S4004M:&tbnh=72&tbnw=96&ei=cBn3TY3sC8Lr0gHW--2oCw&prev=/search%3Fq%3Dthistle%2Bcafe%2Baustin%2Btexas%26um%3D1%26hl%3Den%26client%3Dsafari%26rls%3Den%26biw%3D1024%26bih%3D613%26tbm%3Disch&um=1&itbs=1&iact=hc&vpx=820&vpy=220&dur=19&hovh=72&hovw=96&tx=58&ty=54&page=2&ndsp=14&ved=1t:429,r:13,s:12&biw=1024&bih=613",
            "shortCameFrom": "q=thistle+cafe+austin+texas ... p=14 ... /www.google.com/imgres?imgurl=http://gallery.geekitude.com/d/5346-2/P1010375Everybody.jpg"
          },
          "browser": new Browser({
            "id": 327,
            "name": "Safari",
            "version": "5.0"
          }),
          "device": new Device({
            "id": 605,
            "operatingSystem": "MacOSX",
            "resolution": "1024x768"
          }),
          "searchEngine": null
        }),
        "ipAddress": "70.244.202.70",
        "combinedTerms": "14, thistle+cafe+austin+texas",
        "location": "United States / Texas / Austin",
        "pageUrl": "2008/socialMediaCamp2008/",
        "pageTitle": "Social Media Camp, July 30, 2008, Austin, Texas",
        "cameFrom": "q=thistle+cafe+austin+texas ... p=14 ... /www.google.com/imgres?imgurl=http://gallery.geekitude.com/d/5346-2/P1010375Everybody.jpg"
      },
      {
        "visit": new Visit({
          "id": "9d72f183-2d34-4f62-8e46-b75cd8c782fe",
          //"visitDatetime": new Date("2011-06-14T03:20:06"),
          "visitDatetime": "2011-06-14T03:20:06",
          "numberOfTimes": 0,
          "seTerm": "",
          "logFileName": "c:\\Users\\Elze\\Documents\\MyProjects\\DataImport\\FileExamplesForImport\\forImport_StatCounter-Log-2721969_20110614.csv",
          "visitType": "page view",
          "ipAddress": {
            "ipV4Address": "70.244.202.70",
            "numberOfTimes": 1,
            "postalCode": "",
            "city": {
              "id": 807,
              "name": "Austin",
              "region": {
                "id": 436,
                "name": "Texas",
                "country": {
                  "id": 247,
                  "name": "United States"
                }
              }
            },
            "region": {
              "id": 436,
              "name": "Texas",
              "country": {
                "id": 247,
                "name": "United States"
              }
            },
            "country": {
              "id": 247,
              "name": "United States"
            },
            "isp": null,
            "visitor": null,
            //"ipAddressRelations": null
          },
          "extractedTerms": [
            {
              "id": 471,
              "visitId": "9d72f183-2d34-4f62-8e46-b75cd8c782fe",
              "term": "14"
            },
            {
              "id": 472,
              "visitId": "9d72f183-2d34-4f62-8e46-b75cd8c782fe",
              "term": "thistle+cafe+austin+texas"
            }
          ],
          "pageUrl": {
            "url": "http://gallery.geekitude.com/v/2008/socialMediaCamp2008/",
            "urlCompact": "2008/socialMediaCamp2008/",
          },
          "pageUrlVariation": null,
          "pageTitle": {
            "title": "Social Media Camp, July 30, 2008, Austin, Texas",
            "titleCompact": null,
            "pageUrl": {
              "url": "http://gallery.geekitude.com/v/2008/socialMediaCamp2008/",
              "urlCompact": "2008/socialMediaCamp2008/"
            }
          },
          "pageTitleVariation": null,
          "cameFrom": {
            "id": 1310,
            "cameFrom": "http://www.google.com/imgres?imgurl=http://gallery.geekitude.com/d/5346-2/P1010375Everybody.jpg&imgrefurl=http://gallery.geekitude.com/v/2008/socialMediaCamp2008/&usg=__Of1-TbyBYLodZlryD4b1L15goi8=&h=113&w=150&sz=6&hl=en&start=12&zoom=0&tbnid=SrlDKXf9S4004M:&tbnh=72&tbnw=96&ei=cBn3TY3sC8Lr0gHW--2oCw&prev=/search%3Fq%3Dthistle%2Bcafe%2Baustin%2Btexas%26um%3D1%26hl%3Den%26client%3Dsafari%26rls%3Den%26biw%3D1024%26bih%3D613%26tbm%3Disch&um=1&itbs=1&iact=hc&vpx=820&vpy=220&dur=19&hovh=72&hovw=96&tx=58&ty=54&page=2&ndsp=14&ved=1t:429,r:13,s:12&biw=1024&bih=613",
            "shortCameFrom": "q=thistle+cafe+austin+texas ... p=14 ... /www.google.com/imgres?imgurl=http://gallery.geekitude.com/d/5346-2/P1010375Everybody.jpg"
          },
          "browser": new Browser({
            "id": 327,
            "name": "Safari",
            "version": "5.0"
          }),
          "device": new Device({
            "id": 605,
            "operatingSystem": "MacOSX",
            "resolution": "1024x768"
          }),
          "searchEngine": null
        }),
        "ipAddress": "70.244.202.70",
        "combinedTerms": "14, thistle+cafe+austin+texas",
        "location": "United States / Texas / Austin",
        "pageUrl": "2008/socialMediaCamp2008/",
        "pageTitle": "Social Media Camp, July 30, 2008, Austin, Texas",
        "cameFrom": "q=thistle+cafe+austin+texas ... p=14 ... /www.google.com/imgres?imgurl=http://gallery.geekitude.com/d/5346-2/P1010375Everybody.jpg"
      },
      {
        "visit": new Visit({
          "id": "e74a86b7-f2f7-4fb6-833c-dddaabfbdc91",
          //"visitDatetime": new Date("2011-06-14T03:20:16"),
          "visitDatetime": "2011-06-14T03:19:56",
          "numberOfTimes": 0,
          "seTerm": "",
          "logFileName": "c:\\Users\\Elze\\Documents\\MyProjects\\DataImport\\FileExamplesForImport\\forImport_StatCounter-Log-2721969_20110614.csv",
          "visitType": "page view",
          "ipAddress": {
            "ipV4Address": "70.244.202.70",
            "numberOfTimes": 1,
            "postalCode": "",
            "city": {
              "id": 807,
              "name": "Austin",
              "region": {
                "id": 436,
                "name": "Texas",
                "country": {
                  "id": 247,
                  "name": "United States"
                }
              }
            },
            "region": {
              "id": 436,
              "name": "Texas",
              "country": {
                "id": 247,
                "name": "United States"
              }
            },
            "country": {
              "id": 247,
              "name": "United States"
            },
            "isp": null,
            "visitor": null,
            //"ipAddressRelations": null
          },
          "extractedTerms": [],
          "pageUrl": {
            "url": "http://gallery.geekitude.com/v/2008/socialMediaCamp2008/P1010375Everybody.jpg.html",
            "urlCompact": "2008/socialMediaCamp2008/P1010375Everybody.jpg.html"
          },
          "pageUrlVariation": null,
          "pageTitle": {
            "title": "P1010375 Everybody in the main room of Thistle Cafe",
            "titleCompact": null,
            "pageUrl": {
              "url": "http://gallery.geekitude.com/v/2008/socialMediaCamp2008/P1010375Everybody.jpg.html",
              "urlCompact": "2008/socialMediaCamp2008/P1010375Everybody.jpg.html"
            }
          },
          "pageTitleVariation": null,
          "cameFrom": {
            "id": 1311,
            "cameFrom": "http://gallery.geekitude.com/v/2008/socialMediaCamp2008/",
            "shortCameFrom": null
          },
          "browser": new Browser({
            "id": 327,
            "name": "Safari",
            "version": "5.0"
          }),
          "device": new Device({
            "id": 605,
            "operatingSystem": "MacOSX",
            "resolution": "1024x768"
          }),
          "searchEngine": null
        }),
        "ipAddress": "70.244.202.70",
        "combinedTerms": "",
        "location": "United States / Texas / Austin",
        "pageUrl": "2008/socialMediaCamp2008/P1010375Everybody.jpg.html",
        "pageTitle": "P1010375 Everybody in the main room of Thistle Cafe",
        "cameFrom": "http://gallery.geekitude.com/v/2008/socialMediaCamp2008/"
      }
    ]
  });


  const initialState = {
    visitSessionBlocks: {
      dataSourceData: {
        isp: "Spectrum", visitSessionBlocks: visitSessionBlocks
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
