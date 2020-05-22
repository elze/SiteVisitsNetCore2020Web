import {
  createReducer,
  MetaReducer,
  on
} from '@ngrx/store';

import { loadFlatvisits, loadFlatvisitsFailure, loadFlatvisitsSuccess } from '../actions/flatvisit.actions';
import { VisitFlat } from '../viewmodels/VisitFlat';

export interface FlatVisitState {
  flatVisitsDataSourceData: Array<VisitFlat>;
  loading: boolean;
  error: string | null;
}

export const initialFlatVisitState: FlatVisitState = {
  flatVisitsDataSourceData: new Array<VisitFlat>(),
  loading: true,
  error: null
};

export function dataSourceFromAction(rawVisits: Array<any>): Array<VisitFlat> {
  const data: Array<VisitFlat> = rawVisits.map(rv => new VisitFlat(rv));
  return data;
}

export const _reducer = createReducer(
  initialFlatVisitState,

/**
  on(loadFlatvisits, (state) => {
    return Object.assign({}, state, {
      loading: true,
      error: null
    })
  }),
   */

  on(loadFlatvisits, (state) => {
    return {
      ...state, 
      loading: true,
      error: null
  }
  }),



  /**
  on(loadFlatvisitsSuccess, (state, { data }) => {
    return Object.assign({}, state, {
      flatVisitsDataSourceData: dataSourceFromAction(data),
      loading: false,
      error: null
    })
  }),
  ***/

  /**
  on(loadFlatvisitsSuccess, (state, { data }) => {
    return Object.assign({}, state, {
      flatVisitsDataSourceData: dataSourceFromAction(data),
      loading: false,
      error: null
    })
  }),
  ***/

  on(loadFlatvisitsSuccess, (state, { data }) => {
    return {
      ...state,
      flatVisitsDataSourceData: dataSourceFromAction(data),
      loading: false,
      error: null
    }
  }),

  /**
  on(loadFlatvisitsFailure, (state, { response }) => {
    return Object.assign({}, state, {
      error: response.error,
      loading: false
    })
  })
  ***/

  on(loadFlatvisitsFailure, (state, { response }) => {
    return {
      ...state,
      error: response.error,
      loading: false
    }
  })


);

export function fvReducer(state, action) {
  return _reducer(state, action)
}

