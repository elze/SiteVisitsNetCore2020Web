import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';

import { FlatVisitState, fvReducer } from './flat-visits.reducer';
import { VisitSessionState, vsReducer } from './visit-session.reducer';
import { PaginatedFlatVisitsState, pfvReducer } from './flat-visits-paginated.reducer';


export interface AppState {
  visits: FlatVisitState;
  paginatedVisits: PaginatedFlatVisitsState;
  visitSessionBlocks: VisitSessionState;
}


export const reducers: ActionReducerMap<AppState> = {
  visits: fvReducer,
  paginatedVisits: pfvReducer,
  visitSessionBlocks: vsReducer
};

export const selectVisits = (state: AppState) => state.visits.flatVisitsDataSourceData;
export const selectVisitsError = (state: AppState) => state.visits.error;

export const selectPaginatedVisits = (state: AppState) => state.paginatedVisits.result;
export const selectPaginatedVisitsLoading = (state: AppState) => state.paginatedVisits.loading;
export const selectPaginatedVisitsError = (state: AppState) => state.paginatedVisits.error;

export const selectVisitSessionBlocks = (state: AppState) => state.visitSessionBlocks.dataSourceData;
export const selectVisitSessionBlocksLoading = (state: AppState) => state.visitSessionBlocks.loading;
export const selectVisitSessionBlocksError = (state: AppState) => state.visitSessionBlocks.error;

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
