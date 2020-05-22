import {
  createReducer,
  MetaReducer,
  on
} from '@ngrx/store';

import { loadSessionvisits, loadSessionvisitsFailure, loadSessionvisitsSuccess } from '../actions/sessionvisit.actions';
import { VisitSessionBlock } from '../viewmodels/VisitSessionBlock';

export interface VisitSessionState {
  dataSourceData: Array<VisitSessionBlock>;
  loading: boolean;
  error: string | null;
}

export const initialVisitSessionState: VisitSessionState = {
  dataSourceData: new Array<VisitSessionBlock>(),
  loading: true,
  error: null
};


export function populateVisitSessionBlocks(rawVisits: Array<VisitSessionBlock>): Array<VisitSessionBlock> {
  const data: Array<VisitSessionBlock> = rawVisits.map(rv => new VisitSessionBlock(rv));
  return data;
}

export const _reducer = createReducer(
  initialVisitSessionState,

  on(loadSessionvisits, (state) => {
    return {
      ...state,
      loading: true,
      error: null
    }
  }),  

  on(loadSessionvisitsSuccess, (state, { data }) => {
    return {
      ...state,
      dataSourceData: populateVisitSessionBlocks(data),
      loading: false,
      error: null
    }
  }),

  on(loadSessionvisitsFailure, (state, { response }) => {
    return {
      ...state,
      error: response.error,
      loading: false
    }
  })

);

export function vsReducer(state, action) {
  return _reducer(state, action)
}
