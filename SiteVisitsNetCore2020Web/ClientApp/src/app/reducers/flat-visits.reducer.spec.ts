import * as fromFlatVisits from './flat-visits.reducer';
import * as fromActions from '../actions/flatvisit.actions';
import { VisitFlat } from '../viewmodels/VisitFlat';


describe('FlatVisitsReducer', () => {
  /**
  describe('undefined action', () => {
    xit('should return the default state', () => {
      const { initialVisitState } = fromFlatVisits;
      const action = {};
      const state = fromFlatVisits.vReducer(undefined, action);

      expect(state).toBe(initialVisitState);
    });
  });

  describe('loadFlatvisits action', () => {
    it('should set loading to true', () => {
      const { initialVisitState } = fromFlatVisits;
      const action = fromActions.loadFlatvisits();
      const state = fromFlatVisits.vReducer(initialVisitState, action);
      expect(state.loading).toEqual(true);
      expect(state.flatVisitsDataSourceData).toEqual([]);
    });
  });

  describe('loadFlatvisitsFailure action', () => {
    xit('should return the previous state', () => {
      const errorMessage = "Error";
      const { initialVisitState } = fromFlatVisits;
      const previousState = { ...initialVisitState, loading: true };
      const action = fromActions.loadFlatvisitsFailure({ response: { error: errorMessage }});
      const state = fromFlatVisits.vReducer(previousState, action);
      expect(state.error).toEqual(errorMessage);
      expect(state.flatVisitsDataSourceData).toEqual(initialVisitState.flatVisitsDataSourceData);
      expect(state.loading).toBeFalsy();
    });
  });

  describe('loadFlatvisitsSuccess', () => {
    xit('should return something interesting', () => {

      const visit0id = "aca51b4e-5e2d-484d-911d-d5fcbd52bdfa";
      const visit0DateTime = "2011-06-14T12:52:45";
      const visit0IpV4Address = "162.39.214.225";
      const visit0City = "Branford";
      const visit0Region = "Florida";
      const visit0Country = "United States";
      const visit0extractedTerm0 = "24";
      const visit0extractedTerm1 = "watermelon+ship";
      const visit0PageUrlUrl = "http://pic.geekitude.com/v/2007/2007Cruise/?g2_page=2";
      const visit0PageUrlCompact = "2007/2007Cruise/?g2_page=2";
      const visit0PageTitleTitle = "Caribbean cruise, November 17-22, 2007";
      const visit0CameFrom = "http://www.google.com/imgres?imgurl=http://pic.geekitude.com/d/4096-2/CIMG8380WatermellonFlowers.jpg&imgrefurl=http://pic.geekitude.com/v/2007/2007Cruise/%3Fg2_page%3D2&usg=__4xXwrOo2jN7QSz9qYgLjpXloZAA=&h=150&w=145&sz=5&hl=en&start=212&zoom=0&tbnid=xEWNlQBBaNYgRM:&tbnh=96&tbnw=93&ei=85j3Te6tLMHEgQfz9ciNDA&prev=/search%3Fq%3Dwatermelon%2Bship%26hl%3Den%26sa%3DX%26biw%3D1575%26bih%3D680%26rlz%3D1R2ADRA_enUS388%26tbm%3Disch&itbs=1&iact=rc&dur=514&page=10&ndsp=24&ved=1t:429,r:17,s:212&tx=34&ty=85";
      const visit0ShortCameFrom = "q = watermelon + ship ...p = 24 ... /www.google.com/imgres ? imgurl = http ://pic.geekitude.com/d/4096-2/CIMG8380WatermellonFlowers.jpg";

      const visit1id = "883b010b-61fe-4f30-9f47-7785b0daa868";
      const visit1Datetime = "2011-06-14T09:17:58";
      const visit1seTerm = "harry potter";
      const visit1IpV4Address = "124.43.66.244";
      const visit1City = "Colombo";
      const visit1Region = "Western";
      const visit1Country = "Sri Lanka";
      const visit1PageUrlUrl = "http://gallery.geekitude.com/v/sf/readercon2006/CIMG3465HarryPotterLookalike.jpg.html";
      const visit1PageUrlCompact = "sf/readercon2006/CIMG3465HarryPotterLookalike.jpg.html";
      const visit1PageTitleTitle = "CIMG3465 Harry Potter look-alike";
      const visit1CameFrom = "http://www.bing.com/images/search?q=harry potter&view=detail&id=F6C3CA013DC5FD3ECA2070C7D3CF9B5545E79FCC&first=211&qpvt=harry potter&FORM=IDFRIR";
      const visit1ShortCameFrom = `q=${visit1seTerm}`;
      const data = [
        {
          "id": visit0id,
          "visitDatetime": visit0DateTime,
          "numberOfTimes": 0,
          "seTerm": "",
          "visitType": "page view",
          "ipAddress": {
            "ipV4Address": visit0IpV4Address,
            "numberOfTimes": 1,
            "postalCode": "32008",
            "city": {
              "id": 802,
              "name": visit0City,
              "region": {
                "id": 431,
                "name": visit0Region,
                "country": {
                  "id": 242,
                  "name": visit0Country,
                  "shortCode": null
                }
              }
            },
            "region": {
              "id": 431,
              "name": visit0Region,
              "country": {
                "id": 242,
                "name": visit0Country,
                "shortCode": null
              }
            },
            "country": {
              "id": 242,
              "name": visit0Country,
              "shortCode": null
            },
            "isp": {
              "id": 683,
              "name": "Windstream Communications"
            },
            "visitor": null,
            "ipAddressRelations": null
          },
          "extractedTerms": [
            {
              "id": 197,
              "visitId": visit0id,
              "term": visit0extractedTerm0
            },
            {
              "id": 198,
              "visitId": visit0id,
              "term": visit0extractedTerm1
            }
          ],
          "pageUrl": {
            "url": visit0PageUrlUrl,
            "urlCompact": visit0PageUrlCompact,
            "firstOccurrence": "2011-06-14T12:52:45"
          },
          "pageUrlVariation": null,
          "pageTitle": {
            "title": visit0PageTitleTitle,
            "titleCompact": null,
            "firstOccurrence": "2011-06-14T12:52:45",
            "pageUrl": {
              "url": visit0PageUrlUrl,
              "urlCompact": visit0PageUrlCompact,
              "firstOccurrence": "2011-06-14T12:52:45"
            }
          },
          "pageTitleVariation": null,
          "cameFrom": {
            "id": 889,
            "cameFrom": visit0CameFrom,
            "shortCameFrom": visit0ShortCameFrom
          },
          "browser": null,
          "device": null,
          "searchEngine": null
        },
        {
          "id": visit1id,
          "visitDatetime": visit1Datetime,
          "numberOfTimes": 0,
          "seTerm": visit1seTerm,
          "visitType": "page view",
          "ipAddress": {
            "ipV4Address": visit1IpV4Address,
            "numberOfTimes": 1,
            "postalCode": "",
            "city": {
              "id": 791,
              "name": visit1City,
              "region": {
                "id": 421,
                "name": visit1Region,
                "country": {
                  "id": 241,
                  "name": visit1Country,
                  "shortCode": null
                }
              }
            },
            "region": {
              "id": 421,
              "name": visit1Region,
              "country": {
                "id": 241,
                "name": visit1Country,
                "shortCode": null
              }
            },
            "country": {
              "id": 241,
              "name": visit1Country,
              "shortCode": null
            },
            "isp": {
              "id": 678,
              "name": "Sri Lanka Telecom"
            },
            "visitor": null,
            "ipAddressRelations": null
          },
          "extractedTerms": [
            {
              "id": 187,
              "visitId": visit0id,
              "term": visit1seTerm
            }
          ],
          "pageUrl": {
            "url": visit1PageUrlUrl,
            "urlCompact": visit1PageUrlCompact,
            "firstOccurrence": "2011-06-14T09:17:58"
          },
          "pageUrlVariation": null,
          "pageTitle": {
            "title": visit1PageTitleTitle,
            "titleCompact": null,
            "firstOccurrence": "2011-06-14T09:17:58",
            "pageUrl": {
              "url": visit1PageUrlUrl,
              "urlCompact": visit1PageUrlCompact,
              "firstOccurrence": "2011-06-14T09:17:58"
            }
          },
          "pageTitleVariation": null,
          "cameFrom": {
            "id": 885,
            "cameFrom": visit1CameFrom,
            "shortCameFrom": visit1ShortCameFrom
          },
          "browser": null,
          "device": null,
          "searchEngine": null
        }
      ];

      

      const { initialVisitState } = fromFlatVisits;
      const action = fromActions.loadFlatvisitsSuccess({ data });
      const state = fromFlatVisits.vReducer(initialVisitState, action);

      //spyOn(fromFlatVisits, 'dataSourceFromAction');

      expect(state.flatVisitsDataSourceData.length).toEqual(data.length);

      const row0 = state.flatVisitsDataSourceData[0];
      expect(row0.id).toEqual(visit0id);
      expect(row0.ipAddress.city.name).toEqual(visit0City);
      expect(row0.ipAddress.region.name).toEqual(visit0Region);
      expect(row0.ipAddress.country.name).toEqual(visit0Country);
      const location = visit0Country + " / " + visit0Region + " / " + visit0City;
      expect(row0.location).toEqual(location);
      expect(row0.extractedTerms[0].term).toEqual(visit0extractedTerm0);
      expect(row0.extractedTerms[1].term).toEqual(visit0extractedTerm1);
      expect(row0.combinedTerms).toEqual("24, watermelon+ship, ");


      expect(row0.pageUrl.url).toEqual(visit0PageUrlUrl);
      expect(row0.pageUrl.urlCompact).toEqual(visit0PageUrlCompact);
      expect(row0.pageTitle.title).toEqual(visit0PageTitleTitle);
      expect(row0.cameFrom.cameFrom).toEqual(visit0CameFrom);
      expect(row0.cameFrom.shortCameFrom).toEqual(visit0ShortCameFrom);
      

      const row1 = state.flatVisitsDataSourceData[1];
      expect(row1.id).toEqual(visit1id);
      expect(row1.seTerm).toEqual(visit1seTerm);

      const location1 = visit1Country + " / " + visit1Region + " / " + visit1City;
      expect(row1.location).toEqual(location1);


      expect(row1.pageUrl.url).toEqual(visit1PageUrlUrl);
      expect(row1.pageUrl.urlCompact).toEqual(visit1PageUrlCompact);
      expect(row1.pageTitle.title).toEqual(visit1PageTitleTitle);
      expect(row1.cameFrom.cameFrom).toEqual(visit1CameFrom);
      expect(row1.cameFrom.shortCameFrom).toEqual(visit1ShortCameFrom);


      expect(row1.id).toEqual(visit1id);
      expect(row1.combinedTerms).toEqual(row1.seTerm);

    });
  });
***/

  describe('undefined action', () => {
   it('should return the default state', () => {
     const { initialFlatVisitState } = fromFlatVisits;
      const action = {};
      const state = fromFlatVisits.fvReducer(undefined, action);

     expect(state).toBe(initialFlatVisitState);
    });
  });

  describe('loadFlatvisits action', () => {
    it('should set loading to true', () => {
      const { initialFlatVisitState } = fromFlatVisits;
      const action = fromActions.loadFlatvisits();
      const state = fromFlatVisits.fvReducer(initialFlatVisitState, action);
      expect(state.loading).toEqual(true);
      expect(state.flatVisitsDataSourceData).toEqual([]);
    });
  });

  describe('loadFlatvisitsFailure action', () => {
    it('should return the previous state', () => {
      const errorMessage = "Error";
      const { initialFlatVisitState } = fromFlatVisits;
      const previousState = { ...initialFlatVisitState, loading: true };
      const action = fromActions.loadFlatvisitsFailure({ response: { error: errorMessage } });
      const state = fromFlatVisits.fvReducer(previousState, action);
      expect(state.error).toEqual(errorMessage);
      expect(state.flatVisitsDataSourceData).toEqual(initialFlatVisitState.flatVisitsDataSourceData);
      expect(state.loading).toBeFalsy();
    });
  });

  describe('loadFlatvisitsSuccess', () => {
    it('should return something interesting', () => {

      const visit0id = "aca51b4e-5e2d-484d-911d-d5fcbd52bdfa";
      const visit0DateTime = "2011-06-14T12:52:45";
      const visit0IpV4Address = "162.39.214.225";
      const visit0City = "Branford";
      const visit0Region = "Florida";
      const visit0Country = "United States";
      const visit0extractedTerm0 = "24";
      const visit0extractedTerm1 = "watermelon+ship";
      const visit0combinedTerms = visit0extractedTerm0 + ", " + visit0extractedTerm1;
      const visit0PageUrlUrl = "http://pic.geekitude.com/v/2007/2007Cruise/?g2_page=2";
      const visit0PageUrlCompact = "2007/2007Cruise/?g2_page=2";
      const visit0PageTitleTitle = "Caribbean cruise, November 17-22, 2007";
      const visit0CameFrom = "http://www.google.com/imgres?imgurl=http://pic.geekitude.com/d/4096-2/CIMG8380WatermellonFlowers.jpg&imgrefurl=http://pic.geekitude.com/v/2007/2007Cruise/%3Fg2_page%3D2&usg=__4xXwrOo2jN7QSz9qYgLjpXloZAA=&h=150&w=145&sz=5&hl=en&start=212&zoom=0&tbnid=xEWNlQBBaNYgRM:&tbnh=96&tbnw=93&ei=85j3Te6tLMHEgQfz9ciNDA&prev=/search%3Fq%3Dwatermelon%2Bship%26hl%3Den%26sa%3DX%26biw%3D1575%26bih%3D680%26rlz%3D1R2ADRA_enUS388%26tbm%3Disch&itbs=1&iact=rc&dur=514&page=10&ndsp=24&ved=1t:429,r:17,s:212&tx=34&ty=85";
      const visit0ShortCameFrom = "q = watermelon + ship ...p = 24 ... /www.google.com/imgres ? imgurl = http ://pic.geekitude.com/d/4096-2/CIMG8380WatermellonFlowers.jpg";

      const visit1id = "883b010b-61fe-4f30-9f47-7785b0daa868";
      const visit1Datetime = "2011-06-14T09:17:58";
      const visit1seTerm = "harry potter";
      const visit1IpV4Address = "124.43.66.244";
      const visit1City = "Colombo";
      const visit1Region = "Western";
      const visit1Country = "Sri Lanka";
      const visit1location = visit1Country + " / " + visit1Region + " / " + visit1City;
      //const visit1location = "Sri Lanka / Western / Colombo";
      const visit1PageUrlUrl = "http://gallery.geekitude.com/v/sf/readercon2006/CIMG3465HarryPotterLookalike.jpg.html";
      const visit1PageUrlCompact = "sf/readercon2006/CIMG3465HarryPotterLookalike.jpg.html";
      const visit1PageTitleTitle = "CIMG3465 Harry Potter look-alike";
      const visit1CameFrom = "http://www.bing.com/images/search?q=harry potter&view=detail&id=F6C3CA013DC5FD3ECA2070C7D3CF9B5545E79FCC&first=211&qpvt=harry potter&FORM=IDFRIR";
      const visit1ShortCameFrom = `q=${visit1seTerm}`;
      const data = [
        new VisitFlat({
          "id": visit0id,
          "visitDatetime": visit0DateTime,
          "numberOfTimes": 0,
          "seTerm": "",
          "visitType": "page view",
          "ipAddress": visit0IpV4Address,
          "city": visit0City,
          "region": visit0Region,
          "country": visit0Country,
          "location": visit0Country + " / " + visit0Region + " / " + visit0City,
          "postalCode": "78323",
          "isp": "Windstream Communications",
          "logFileName": "forImport_StatCounter-Log-2721969_20110614.csv",
          //"ipAddressRelations": null,
          "pageUrl": visit0PageUrlCompact,
          "pageTitle": visit0PageTitleTitle,
          "cameFrom": visit0ShortCameFrom,
          //"extractedTerms": visit0extractedTerm1,
          "combinedTerms": visit0combinedTerms
        }),
        new VisitFlat({
          "id": visit1id,
          "visitDatetime": visit1Datetime,
          "numberOfTimes": 0,
          "seTerm": visit1seTerm,
          "visitType": "page view",
          "ipAddress": visit1IpV4Address,
          "city": visit1City,
          "region": visit1Region,
          "country": visit1Country,
          "postalCode": "78323",
          "location": visit1location,
          "isp": "Sri Lanka Telecom",
          "logFileName": "forImport_StatCounter-Log-2721969_20110614.csv",
          //"ipAddressRelations": null,
          "pageUrl": visit1PageUrlCompact,
          "pageTitle": visit1PageTitleTitle,
          "cameFrom": visit1ShortCameFrom,
          "combinedTerms": visit1seTerm
          //"extractedTerms": null
        })
      ];

      const { initialFlatVisitState } = fromFlatVisits;
      const action = fromActions.loadFlatvisitsSuccess({ data });
      const state = fromFlatVisits.fvReducer(initialFlatVisitState, action);
      expect(state.flatVisitsDataSourceData.length).toEqual(data.length);

      const row0 = state.flatVisitsDataSourceData[0];
      expect(row0.id).toEqual(visit0id);
      expect(row0.ipAddress).toEqual(visit0IpV4Address);
      //expect(row0.city).toEqual(visit0City);
      //expect(row0.region).toEqual(visit0Region);
      //expect(row0.country).toEqual(visit0Country);
      const location = visit0Country + " / " + visit0Region + " / " + visit0City;
      expect(row0.location).toEqual(location);
      expect(row0.combinedTerms).toEqual(visit0combinedTerms);

      expect(row0.pageUrl).toEqual(visit0PageUrlCompact);
      expect(row0.pageTitle).toEqual(visit0PageTitleTitle);
      expect(row0.cameFrom).toEqual(visit0ShortCameFrom);

      const row1 = state.flatVisitsDataSourceData[1];
      expect(row1.id).toEqual(visit1id);

      expect(row1.location).toEqual(visit1location);


      expect(row1.pageUrl).toEqual(visit1PageUrlCompact);
      expect(row1.pageTitle).toEqual(visit1PageTitleTitle);
      expect(row1.cameFrom).toEqual(visit1ShortCameFrom);

      expect(row1.id).toEqual(visit1id);
      expect(row1.combinedTerms).toEqual(visit1seTerm);

    });
  });

})
