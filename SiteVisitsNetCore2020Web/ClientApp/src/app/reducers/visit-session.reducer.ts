import {
  createReducer,
  MetaReducer,
  on
} from '@ngrx/store';

import { loadSessionvisits, loadSessionvisitsFailure, loadSessionvisitsSuccess } from '../actions/sessionvisit.actions';
import { VisitSessionBlock } from '../viewmodels/VisitSessionBlock';
import { VisitSession } from '../viewmodels/VisitSession';

export interface VisitSessionState {
  //dataSourceData: Array<VisitSessionBlock>;
  dataSourceData: VisitSession,
  loading: boolean;
  error: string | null;
}

export const initialVisitSessionState: VisitSessionState = {
  //dataSourceData: new Array<VisitSessionBlock>(),
  dataSourceData: {
    isp: "", visitSessionBlocks: []
  },
  loading: true,
  error: null
};


/**
//export function populateVisitSessionBlocks(rawVisits: Array<VisitSessionBlock>): Array<VisitSessionBlock> {
function populateVisitSessionBlocks(rawVisitSession: VisitSession): VisitSession {
  const data: Array<VisitSessionBlock> = rawVisits.map(rv => new VisitSessionBlock(rv));
  return data;
}
**/

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
      //dataSourceData: populateVisitSessionBlocks(data),
      //dataSourceData: { isp: data.isp, visitSessionBlocks: data.visitSessionBlocks },
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
