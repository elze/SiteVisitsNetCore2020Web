import {
  createReducer,
  MetaReducer,
  on
} from '@ngrx/store';

import { loadPaginatedFlatVisits, loadPaginatedFlatVisitsFailure , loadPaginatedFlatVisitsSuccess } from '../actions/paginatedflatvisit.actions';
import { VisitFlat } from '../viewmodels/VisitFlat';
import { PaginatedFlatVisitsResult } from '../viewmodels/PaginatedFlatVisitsResult';

export interface PaginatedFlatVisitsState {
  result: PaginatedFlatVisitsResult,
  loading: boolean;
  error: string | null;
}

export const initialPaginatedFlatVisitsState: PaginatedFlatVisitsState = {
  result: { totalCount: 0, visits: new Array<VisitFlat>() },
  loading: true,
  error: null
};

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
      result: {
        //totalCount: data.totalCount, visits: data.visits.map(v => new VisitFlat(v))
        totalCount: data.totalCount, visits: data.visits
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
