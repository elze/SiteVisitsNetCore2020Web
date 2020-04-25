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

export interface FlatVisitState {
  flatVisitsDataSourceData: Array<Visit>;
}

const initialVisitState: FlatVisitState = {
  flatVisitsDataSourceData: new Array<Visit>()
};

export interface AppState {
  visits: FlatVisitState;
}

function populateVisits(rawVisits: Array<any>): Visit[] {
  let visits = new Array<Visit>();
  rawVisits.map(rv => {
    let v = new Visit(rv);
    visits.push(v);
  });
  console.log("populateVisits: visits = ");
  console.log(JSON.stringify(visits));
  return visits;
}

function dataSourceFromAction(rawVisits: Array<any>): Array<Visit> {
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


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
