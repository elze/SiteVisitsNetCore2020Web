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
  //flatVisitsDataSourceData: Array<Visit>;
  flatVisitsDataSourceData: Array<HalfRow>;
  loading: boolean;
  error: string | null;
}

export const initialVisitState: FlatVisitState = {
  //flatVisitsDataSourceData: new Array<Visit>(),
  flatVisitsDataSourceData: new Array<HalfRow>(),
  loading: true,
  error: null
};

//function populateVisits(rawVisits: Array<any>): HalfRow[] {
// The below doesn't work, because type  { [id: number]: any } does not have map function
//function populateVisits(rawVisits: { [id: number]: any }): HalfRow[] {
function populateVisits(rawVisits: Array<any>): Array<[FlatVisitRowEven, FlatVisitRowOdd]> {
  const visits = new Array<Visit>();
  //const rows = new Array<HalfRow>();
  const rows = new Array<[FlatVisitRowEven, FlatVisitRowOdd]>();
  rawVisits.map(rv => {
    const v = new Visit(rv);
    const re = new FlatVisitRowEven({
      id: v.id, visitDatetime: v.visitDatetime,
      numberOfTimes: v.numberOfTimes,
      ipAddress: v.ipAddress,
      pageUrl: v.pageUrl,
      pageUrlVariation: v.pageUrlVariation,
      pageTitle: v.pageTitle,
      pageTitleVariation: v.pageTitleVariation
    });
    //rows.push(re);
    let ro = new FlatVisitRowOdd({
      id: v.id,
      seTerm: v.seTerm,
      extractedTerms: v.extractedTerms,
      visitType: v.visitType,
      ipAddress: v.ipAddress,
      cameFrom: v.cameFrom
    });
    rows.push([re, ro]);
  });
  console.log("populateVisits: visits = ");
  console.log(JSON.stringify(visits));
  //return visits;
  return rows;
}

//export function dataSourceFromAction(rawVisits: Array<any>): Array<HalfRow> {
export function dataSourceFromAction(rawVisits: Array<any>): Array<[FlatVisitRowEven, FlatVisitRowOdd]>{
  const data = populateVisits(rawVisits);
  return data;
}


export const _reducer = createReducer(
  initialVisitState,
  on(loadFlatvisits, (state) => {
    return Object.assign({}, state, {
      loading: true,
      error: null
    })
  }),

  on(loadFlatvisitsSuccess, (state, { data }) => {
    return Object.assign({}, state, {
      flatVisitsDataSourceData: dataSourceFromAction(data),
      loading: false,
      error: null
    })
  }),

  on(loadFlatvisitsFailure, (state, { response }) => {
    return Object.assign({}, state, {
      error: response.error,
      loading: false
    })
  })

);

export function vReducer(state, action) {
  return _reducer(state, action)
}

