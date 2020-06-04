import {
  createReducer,
  MetaReducer,
  on
} from '@ngrx/store';

import { loadSessionvisits, loadSessionvisitsFailure, loadSessionvisitsSuccess } from '../actions/sessionvisit.actions';
import { VisitSession } from '../viewmodels/VisitSession';

export interface VisitSessionState {
  dataSourceData: VisitSession,
  loading: boolean;
  error: string | null;
}

export const initialVisitSessionState: VisitSessionState = {
  dataSourceData: {
    isp: "", visitSessionBlocks: []
  },
  loading: true,
  error: null
};

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
      dataSourceData: data,
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
