import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';

import { FlatVisitState, vReducer } from './flat-visits.reducer';


export interface AppState {
  visits: FlatVisitState;
}


export const reducers: ActionReducerMap<AppState> = {
  visits: vReducer
};

export const selectVisits = (state: AppState) => state.visits.flatVisitsDataSourceData;
export const selectVisitsError = (state: AppState) => state.visits.error;

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
