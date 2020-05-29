import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';

import { FlatVisitState, fvReducer } from './flat-visits.reducer';
import { VisitSessionState, vsReducer } from './visit-session.reducer';


export interface AppState {
  visits: FlatVisitState;
  visitSessionBlocks: VisitSessionState;
}


export const reducers: ActionReducerMap<AppState> = {
  visits: fvReducer,
  visitSessionBlocks: vsReducer
};

export const selectVisits = (state: AppState) => state.visits.flatVisitsDataSourceData;
export const selectVisitsError = (state: AppState) => state.visits.error;

export const selectVisitSessionBlocks = (state: AppState) => state.visitSessionBlocks.dataSourceData;
export const selectVisitSessionBlocksLoading = (state: AppState) => state.visitSessionBlocks.loading;
export const selectVisitSessionBlocksError = (state: AppState) => state.visitSessionBlocks.error;

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
