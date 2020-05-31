import {
  createReducer,
  MetaReducer,
  on
} from '@ngrx/store';

import { loadPaginatedFlatVisits, loadPaginatedFlatVisitsFailure , loadPaginatedFlatVisitsSuccess } from '../actions/paginatedflatvisit.actions';
import { VisitFlat } from '../viewmodels/VisitFlat';
import { PaginatedFlatVisitsResult } from '../viewmodels/PaginatedFlatVisitsResult';

export interface PaginatedFlatVisitsState {
  //dataSourceData: Array<VisitFlat>;
  result: PaginatedFlatVisitsResult,
  loading: boolean;
  error: string | null;
}

export const initialPaginatedFlatVisitsState: PaginatedFlatVisitsState = {
  //dataSourceData: new Array<VisitFlat>(),
  result: { totalCount: 0, visits: new Array<VisitFlat>() },
  loading: true,
  error: null
};

/**
export function populateFlatVisits(rawVisits: Array<VisitFlat>): Array<VisitFlat> {
  //const data: Array<VisitFlat> = rawVisits.map(rv => new VisitFlat(rv));
  //return data;
  return rawVisits;
}
**/

export const _reducer = createReducer(
  initialPaginatedFlatVisitsState,

  on(loadPaginatedFlatVisits , (state) => {
    return {
      ...state,
      loading: true,
      error: null
    }
  }),

  on(loadPaginatedFlatVisitsSuccess , (state, { data }) => {
    return {
      ...state,
      //dataSourceData: populateFlatVisits(data),
      //result: data,
      result: {
        totalCount: data.totalCount, visits: data.visits.map(v => new VisitFlat(v))
      },
      loading: false,
      error: null
    }
  }),

  on(loadPaginatedFlatVisitsFailure, (state, { response }) => {
    return {
      ...state,
      error: response.error,
      loading: false
    }
  })

);

export function pfvReducer(state, action) {
  return _reducer(state, action)
}
