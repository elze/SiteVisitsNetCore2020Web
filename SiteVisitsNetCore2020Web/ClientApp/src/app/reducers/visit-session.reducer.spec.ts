import * as fromVisitSession from './visit-session.reducer';
import * as fromActions from '../actions/sessionvisit.actions';
import { VisitFlat } from '../viewmodels/VisitFlat';
import { Browser } from '../models/Browser';
import { Device } from '../models/Device';
import { Visit } from '../models/Visit';
import { VisitSessionBlock } from '../viewmodels/VisitSessionBlock';

describe('VisitSessionReducer', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const { initialVisitSessionState } = fromVisitSession;
      const action = {};
      const state = fromVisitSession.vsReducer(undefined, action);

      expect(state).toBe(initialVisitSessionState);
    });
  });

  describe('loadFlatvisits action', () => {
    it('should set loading to true', () => {
      const { initialVisitSessionState } = fromVisitSession;
      const action = fromActions.loadSessionvisits({ id: "uiwhuh" });
      const state = fromVisitSession.vsReducer(initialVisitSessionState, action);
      expect(state.loading).toEqual(true);
      expect(state.dataSourceData).toEqual([]);
    });
  });

  describe('loadFlatvisitsFailure action', () => {
    it('should return the previous state', () => {
      const errorMessage = "Error";
      const { initialVisitSessionState } = fromVisitSession;
      const previousState = { ...initialVisitSessionState, loading: true };
      const action = fromActions.loadSessionvisitsFailure({ response: { error: errorMessage } });
      const state = fromVisitSession.vsReducer(previousState, action);
      expect(state.error).toEqual(errorMessage);
      expect(state.dataSourceData).toEqual(initialVisitSessionState.dataSourceData);
      expect(state.loading).toBeFalsy();
    });
  });

  describe('loadFlatvisitsSuccess', () => {
    it('should return something interesting', () => {

      const browser = "Safari";
      const device = "MacOSX";
      const ipAddress0 = "70.244.202.70";
      const combinedTerms0 = "14, thistle + cafe + austin + texas";
      const location0 = "United States / Texas / Austin";
      const pageUrl0 = "2008/socialMediaCamp2008/";
      const pageTitle0 = "Social Media Camp, July 30, 2008, Austin, Texas";
      const cameFrom0 = "q=thistle+cafe+austin+texas ... p=14 ... /www.google.com/imgres?imgurl=http://gallery.geekitude.com/d/5346-2/P1010375Everybody.jpg";

      const data = new Array<VisitSessionBlock>();
      data.push({
        browser: browser,
        device: device,
        "visits": [
          {
            "visit": new Visit({
              "id": "9d72f183-2d34-4f62-8e46-b75cd8c782fe",
              "visitDatetime": "2011-06-14T03:20:06",
              "numberOfTimes": 0,
              "seTerm": "",
              "logFileName": "c:\\Users\\Elze\\Documents\\MyProjects\\DataImport\\FileExamplesForImport\\forImport_StatCounter-Log-2721969_20110614.csv",
              "visitType": "page view",
              "ipAddress": {
                "ipV4Address": ipAddress0,
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
                "urlCompact": pageUrl0
              },
              "pageUrlVariation": null,
              "pageTitle": {
                "title": pageTitle0,
                "titleCompact": null,
                "pageUrl": {
                  "url": "http://gallery.geekitude.com/v/2008/socialMediaCamp2008/",
                  "urlCompact": pageUrl0
                }
              },
              "pageTitleVariation": null,
              "cameFrom": {
                "id": 1310,
                "cameFrom": "http://www.google.com/imgres?imgurl=http://gallery.geekitude.com/d/5346-2/P1010375Everybody.jpg&imgrefurl=http://gallery.geekitude.com/v/2008/socialMediaCamp2008/&usg=__Of1-TbyBYLodZlryD4b1L15goi8=&h=113&w=150&sz=6&hl=en&start=12&zoom=0&tbnid=SrlDKXf9S4004M:&tbnh=72&tbnw=96&ei=cBn3TY3sC8Lr0gHW--2oCw&prev=/search%3Fq%3Dthistle%2Bcafe%2Baustin%2Btexas%26um%3D1%26hl%3Den%26client%3Dsafari%26rls%3Den%26biw%3D1024%26bih%3D613%26tbm%3Disch&um=1&itbs=1&iact=hc&vpx=820&vpy=220&dur=19&hovh=72&hovw=96&tx=58&ty=54&page=2&ndsp=14&ved=1t:429,r:13,s:12&biw=1024&bih=613",
                "shortCameFrom": cameFrom0
              },
              "browser": new Browser({
                "id": 327,
                "name": browser,
                "version": "5.0"
              }),
              "device": new Device({
                "id": 605,
                "operatingSystem": device,
                "resolution": "1024x768"
              }),
              "searchEngine": null
            }),
            "ipAddress": ipAddress0,
            "combinedTerms": combinedTerms0,
            "location": location0,
            "pageUrl": pageUrl0,
            "pageTitle": pageTitle0,
            "cameFrom": cameFrom0
          },
          {
            "visit": new Visit({
              "id": "e69a0ab5-3645-42d8-876f-59a0081cfd37",
              "visitDatetime": "2011-06-14T03:19:56",
              "numberOfTimes": 0,
              "seTerm": "",
              "logFileName": "c:\\Users\\Elze\\Documents\\MyProjects\\DataImport\\FileExamplesForImport\\forImport_StatCounter-Log-2721969_20110614.csv",
              "visitType": "page view",
              "ipAddress": {
                "ipV4Address": ipAddress0,
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
                "urlCompact": pageUrl0
              },
              "pageUrlVariation": null,
              "pageTitle": {
                "title": pageTitle0,
                "titleCompact": null,
                "pageUrl": {
                  "url": "http://gallery.geekitude.com/v/2008/socialMediaCamp2008/",
                  "urlCompact": pageUrl0
                }
              },
              "pageTitleVariation": null,
              "cameFrom": {
                "id": 1310,
                "cameFrom": "http://www.google.com/imgres?imgurl=http://gallery.geekitude.com/d/5346-2/P1010375Everybody.jpg&imgrefurl=http://gallery.geekitude.com/v/2008/socialMediaCamp2008/&usg=__Of1-TbyBYLodZlryD4b1L15goi8=&h=113&w=150&sz=6&hl=en&start=12&zoom=0&tbnid=SrlDKXf9S4004M:&tbnh=72&tbnw=96&ei=cBn3TY3sC8Lr0gHW--2oCw&prev=/search%3Fq%3Dthistle%2Bcafe%2Baustin%2Btexas%26um%3D1%26hl%3Den%26client%3Dsafari%26rls%3Den%26biw%3D1024%26bih%3D613%26tbm%3Disch&um=1&itbs=1&iact=hc&vpx=820&vpy=220&dur=19&hovh=72&hovw=96&tx=58&ty=54&page=2&ndsp=14&ved=1t:429,r:13,s:12&biw=1024&bih=613",
                "shortCameFrom": cameFrom0
              },
              "browser": new Browser({
                "id": 327,
                "name": browser,
                "version": "5.0"
              }),
              "device": new Device({
                "id": 605,
                "operatingSystem": device,
                "resolution": "1024x768"
              }),
              "searchEngine": null
            }),
            "ipAddress": ipAddress0,
            "combinedTerms": combinedTerms0,
            "location": location0,
            "pageUrl": pageUrl0,
            "pageTitle": pageTitle0,
            "cameFrom": cameFrom0
          },
        ]
      });

      const { initialVisitSessionState } = fromVisitSession;
      const action = fromActions.loadSessionvisitsSuccess({ data });
      const state = fromVisitSession.vsReducer(initialVisitSessionState, action);
      expect(state.dataSourceData.length).toEqual(data.length);

      const row0 = state.dataSourceData[0];
      expect(row0.browser).toEqual(browser);
      expect(row0.device).toEqual(device);
      expect(row0.visits[0].location).toEqual(location0);
      expect(row0.visits[0].combinedTerms).toEqual(combinedTerms0);
      expect(row0.visits[0].pageUrl).toEqual(pageUrl0);
      expect(row0.visits[0].pageTitle).toEqual(pageTitle0);
      expect(row0.visits[0].cameFrom).toEqual(cameFrom0);

      expect(row0.visits[1].location).toEqual(location0);
      expect(row0.visits[1].combinedTerms).toEqual(combinedTerms0);
      expect(row0.visits[1].pageUrl).toEqual(pageUrl0);
      expect(row0.visits[1].pageTitle).toEqual(pageTitle0);
      expect(row0.visits[1].cameFrom).toEqual(cameFrom0);

    });
  });

})
