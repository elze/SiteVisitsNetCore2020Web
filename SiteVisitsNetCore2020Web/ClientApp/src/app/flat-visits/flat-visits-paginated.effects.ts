import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
//import { loadFlatvisits, loadFlatvisitsSuccess, loadFlatvisitsFailure } from '../actions/flatvisit.actions';
import { FlatVisitDataService } from './flat-visit-data.service';
import { VisitFlat } from '../viewmodels/VisitFlat';
import { loadPaginatedFlatVisits, loadPaginatedFlatVisitsSuccess, loadPaginatedFlatVisitsFailure } from '../actions/paginatedflatvisit.actions';
import { PaginatedFlatVisitsResult } from '../viewmodels/PaginatedFlatVisitsResult';
import { PaginatedFlatVisitsResultRaw } from '../viewmodels/PaginatedFlatVisitsResultRaw';


@Injectable()
export class PaginatedFlatVisitsEffects {

  constructor(private actions$: Actions,
    public flatVisitDataService: FlatVisitDataService
  ) {
    console.log(`FlatVisitsEffects: flatVisitDataService = ${flatVisitDataService})`);
  }

  public loadVisits$ = createEffect(() => this.actions$.pipe(
    ofType(loadPaginatedFlatVisits),
    switchMap((loadAction) =>
      this.flatVisitDataService.GetPaginatedFlatVisits(loadAction.pageNum, loadAction.pageSize).pipe(
        // If successful, dispatch success action with result
        tap(ev => console.log(`PaginatedFlatVisits called this.http.get`)),
        //map((data: PaginatedFlatVisitsResult) => {
        map((data: PaginatedFlatVisitsResultRaw) => {
          console.log(`PaginatedFlatVisitsEffects: we are in map`);
          return loadPaginatedFlatVisitsSuccess({ data })
        }
        ),
        // If request fails, dispatch failed action
        catchError(response =>
          of(loadPaginatedFlatVisitsFailure({ response }))
        )
      ) // end of inner pipe
    ) // end of switchMap
  ) // end of outer pipe

  );
}
