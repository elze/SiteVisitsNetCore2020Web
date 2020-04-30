import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  createReducer,
  MetaReducer,
  on
} from '@ngrx/store';
import { environment } from '../../environments/environment';

import { loadFlatvisitsSuccess } from '../actions/flatvisit.actions';

import { Visit } from '../models/Visit';
import { HalfRow } from '../flat-visits/HalfRow';
import { FlatVisitRowEven } from '../flat-visits/FlatVisitRowEven';
import { FlatVisitRowOdd } from '../flat-visits/FlatVisitRowOdd';
import { Referrer } from '../models/Referrer';

export interface FlatVisitState {
  //flatVisitsDataSourceData: Array<Visit>;
  flatVisitsDataSourceData: Array<HalfRow>;
  //error: boolean;
  //loading: boolean;
}

const initialVisitState: FlatVisitState = {
  //flatVisitsDataSourceData: new Array<Visit>(),
  flatVisitsDataSourceData: new Array<HalfRow>(),
  //error: false,
  //loading: true
};

export interface AppState {
  visits: FlatVisitState;
}

//function populateVisits(rawVisits: Array<any>): Visit[] {
function populateVisits(rawVisits: Array<any>): HalfRow[] {
  let visits = new Array<Visit>();
  let rows = new Array<HalfRow>();
  rawVisits.map(rv => {
    let v = new Visit(rv);
    let re = new FlatVisitRowEven({
      id: v.id, visitDatetime: v.visitDatetime,
      numberOfTimes: v.numberOfTimes,
      ipAddress: v.ipAddress,
      pageUrl: v.pageUrl,
      pageUrlVariation: v.pageUrlVariation,
      pageTitle: v.pageTitle,
      pageTitleVariation: v.pageTitleVariation
    });
    rows.push(re);
    let ro = new FlatVisitRowOdd({
      id: v.id,
      seTerm: v.seTerm,
      visitType: v.visitType,
      ipAddress: v.ipAddress,
      cameFrom: v.cameFrom
    });
    rows.push(ro);
  });
  console.log("populateVisits: visits = ");
  console.log(JSON.stringify(visits));
  //return visits;
  return rows;
}

//function dataSourceFromAction(rawVisits: Array<any>): Array<Visit> {
function dataSourceFromAction(rawVisits: Array<any>): Array<HalfRow> {
  const data = populateVisits(rawVisits);
  return data;
}


export const _reducer = createReducer(
  initialVisitState,
  on(loadFlatvisitsSuccess, (state, { data }) => ({
    flatVisitsDataSourceData: dataSourceFromAction(data)
  }))
);

export function vReducer(state, action) {
  return _reducer(state, action)
}

export const reducers: ActionReducerMap<AppState> = {
  visits: vReducer
};

export const selectVisits = (state: AppState) => state.visits.flatVisitsDataSourceData;

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
