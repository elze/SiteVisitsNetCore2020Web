import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { environment } from '../../environments/environment';
import { loadFlatvisits, loadFlatvisitsSuccess, loadFlatvisitsFailure } from '../actions/flatvisit.actions';
import { FlatVisitDataService } from './flat-visit-data.service';
import { VisitFlat } from '../models/VisitFlat';


@Injectable()
export class FlatVisitsEffects {

  constructor(private actions$: Actions,
    //private http: HttpClient
    public flatVisitDataService: FlatVisitDataService
  ) {
    console.log(`FlatVisitsEffects: flatVisitDataService = ${flatVisitDataService})`);
  }

  public loadVisits$ = createEffect(() => this.actions$.pipe(
    ofType(loadFlatvisits),
    switchMap(() =>
      //this.http.get(
        //environment.baseHref + 'api/visits').pipe(
        this.flatVisitDataService.GetFlatVisits().pipe(
        // If successful, dispatch success action with result
          tap(ev => console.log(`FlatVisitsEffects called this.http.get`)),
          map((data: VisitFlat[]) => {
            console.log(`FlatVisitsEffects: we are in map`);
            return loadFlatvisitsSuccess({ data })
          }
        ),
        // If request fails, dispatch failed action
          catchError(response =>
          of(loadFlatvisitsFailure({ response }))
        )
      ) // end of inner pipe
    ) // end of switchMap
  ) // end of outer pipe

    );  
}
