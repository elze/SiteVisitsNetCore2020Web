import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';

import { FlatVisitsEffects } from './flat-visits.effects';
import { VisitFlat } from '../viewmodels/VisitFlat';
import { FlatVisitDataService } from './flat-visit-data.service';
//import { loadFlatvisits } from '../actions/flatvisit.actions';

describe('FlatVisitsEffects', () => {
  let actions$: Observable<any>;
  let effects: FlatVisitsEffects;

  const flatVisits = new Array<VisitFlat>();
  flatVisits.push(
    new VisitFlat({
      "id": "14067745-1463-4baa-a707-c2ec35be278d",
      "visitDatetime": "2009-09-01T16:49:09",
      "ipAddress": "63.71.120.26",
      "numberOfTimes": 0,
      "isp": null,
      "city": "",
      "region": "",
      "country": "",
      "postalCode": null,
      "location": "",
      "pageUrl": "2007/2007Cruise/mayanRuins/CIMG8162MayanSouvenirsInShop.jpg.html",
      "pageTitle": "CIMG8162 Mayan souvenirs",
      "cameFrom": "q=mayan souveiners",
      "combinedTerms": "mayan souveiners",
      "logFileName": "forImport_StatCounter-Log-2721969_20110614.csv",
      "seTerm": "",
      "visitType": "page view"
    }));
  flatVisits.push(
    new VisitFlat({
      "id": "0dac3a31-c93f-43fc-823f-32684c4d3041",
      "visitDatetime": "2009-09-01T16:48:24",
      "ipAddress": "63.71.120.26",
      "numberOfTimes": 0,
      "isp": null,
      "city": "",
      "region": "",
      "country": "",
      "postalCode": null,
      "location": "",
      "pageUrl": "2007/2007Cruise/mayanRuins/CIMG8162MayanSouvenirsInShop.jpg.html?g2_imageViewsIndex=1",
      "pageTitle": "CIMG8162 Mayan souvenirs",
      "cameFrom": "/pic.geekitude.com/v/2007/2007Cruise/mayanRuins/CIMG8162MayanSouvenirsInShop.jpg",
      "combinedTerms": "",
      "logFileName": "forImport_StatCounter-Log-2721969_20110614.csv",
      "seTerm": "",
      "visitType": "page view"
    }));
  flatVisits.push(
    new VisitFlat({
      "id": "0c1ffc64-08f2-4123-900f-b7670c22a957",
      "visitDatetime": "2009-09-01T16:47:28",
      "ipAddress": "63.71.120.26",
      "numberOfTimes": 0,
      "isp": null,
      "city": "",
      "region": "",
      "country": "",
      "postalCode": null,
      "location": "",
      "pageUrl": "2007/2007Cruise/mayanRuins/CIMG8162MayanSouvenirsInShop.jpg.html",
      "pageTitle": "CIMG8162 Mayan souvenirs",
      "cameFrom": "q=mayan souveiners",
      "combinedTerms": "mayan souveiners",
      "logFileName": "forImport_StatCounter-Log-2721969_20110614.csv",
      "seTerm": "",
      "visitType": "page view"
    }));

  //let flatVisitDataServiceSpy: jasmine.SpyObj<FlatVisitDataService>;

  beforeEach(() => {
    /**
    let flatVisitDataService = {
      GetFlatVisits: function () {
        return of(flatVisits);
      }
    } as FlatVisitDataService;

    class MockFlatVisitDataService extends FlatVisitDataService {
      GetFlatVisits() {
        return of(flatVisits);
      }
    }
     */

    //const spy = jasmine.createSpyObj('FlatVisitDataService', ['GetFlatVisits']);

    const spy = jasmine.createSpyObj('FlatVisitDataService', {
      'GetFlatVisits': function () {
        return of(flatVisits);
      }
    });

    //spy.GetFlatVisits().

    TestBed.configureTestingModule({
      providers: [
        { provide: FlatVisitDataService, useValue: spy },
        FlatVisitsEffects,
        provideMockActions(() => actions$),
      ]
    });

    effects = TestBed.get<FlatVisitsEffects>(FlatVisitsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
