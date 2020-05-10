import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  createReducer,
  MetaReducer,
  on
} from '@ngrx/store';

import { HalfRow } from '../flat-visits/HalfRow';
import { FlatVisitRowEven } from '../flat-visits/FlatVisitRowEven';
import { FlatVisitRowOdd } from '../flat-visits/FlatVisitRowOdd';
import { Visit } from '../models/Visit';

import { loadFlatvisits, loadFlatvisitsFailure, loadFlatvisitsSuccess } from '../actions/flatvisit.actions';

export interface FlatVisitState {
  flatVisitsDataSourceData: Array<Visit>;
  loading: boolean;
  error: string | null;
}

export const initialVisitState: FlatVisitState = {
  flatVisitsDataSourceData: new Array<Visit>(),
  loading: true,
  error: null
};

function populateVisits(rawVisits: Array<any>): Array<Visit> {
// The below doesn't work, because type  { [id: number]: any } does not have map function
//function populateVisits(rawVisits: { [id: number]: any }): HalfRow[] {
  const visits: Array<Visit> = rawVisits.map(rv => new Visit(rv));
  console.log("populateVisits: visits = ");
  console.log(JSON.stringify(visits));
  return visits;
}

export function dataSourceFromAction(rawVisits: Array<any>): Array<Visit> {
//export function dataSourceFromAction(rawVisits: Array<any>): Array<[FlatVisitRowEven, FlatVisitRowOdd]>{
  const data = populateVisits(rawVisits);
  return data;
}

export const _reducer = createReducer(
  initialVisitState,
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

export function vReducer(state, action) {
  return _reducer(state, action)
}

