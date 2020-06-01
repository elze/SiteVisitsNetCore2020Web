import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { loadSessionvisits, loadSessionvisitsSuccess, loadSessionvisitsFailure } from '../actions/sessionvisit.actions';
import { VisitSessionDataService } from './visit-session-data.service';
import { VisitSessionBlock } from '../viewmodels/VisitSessionBlock';
import { VisitSession } from '../viewmodels/VisitSession';

@Injectable()
export class VisitSessionEffects {

  constructor(private actions$: Actions,
    public visitSessionDataService: VisitSessionDataService) { }

  public loadVisits$ = createEffect(() => this.actions$.pipe(
    ofType(loadSessionvisits),
    switchMap((loadAction) => 
      //this.http.get(environment.baseHref + `api/Visits/sessionvisits/${loadAction.id}`).pipe(
      this.visitSessionDataService.GetVisitSession(loadAction.id).pipe(
        tap(ev => console.log(`VisitSessionEffects loadAction.id = ${loadAction.id}`)),
        // If successful, dispatch success action with result
        //map((data: VisitSessionBlock[]) => {
        map((data: VisitSession) => {
          console.log(`VisitSessionEffects: we are in map, loadAction.id = ${loadAction.id}`);
          return loadSessionvisitsSuccess({ data })
        }
        ),
        // If request fails, dispatch failed action
        catchError(response =>
          of(loadSessionvisitsFailure({ response }))
        )
      ) // end of inner pipe
    
    ) // end of switchMap
  ) // end of outer pipe

  );  
}
