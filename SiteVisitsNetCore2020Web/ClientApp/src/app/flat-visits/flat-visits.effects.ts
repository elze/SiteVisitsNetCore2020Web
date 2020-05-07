import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { environment } from '../../environments/environment';
import { loadFlatvisits, loadFlatvisitsSuccess, loadFlatvisitsFailure } from '../actions/flatvisit.actions';


@Injectable()
export class FlatVisitsEffects {

  constructor(private actions$: Actions,
    private http: HttpClient) { }

  @Effect()
  public loadVisits$ = createEffect(() => this.actions$.pipe(
    ofType(loadFlatvisits),
    switchMap(() =>
      this.http.get(
        //environment.apiUrl +
        environment.baseHref + 'api/visits').pipe(
        // If successful, dispatch success action with result
        map((data: any[]) =>
          loadFlatvisitsSuccess({ data })
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
