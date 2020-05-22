import { createAction, props } from '@ngrx/store';
import { VisitSessionBlock } from '../viewmodels/VisitSessionBlock';

export const loadSessionvisits = createAction(
  '[Sessionvisit] Load Sessionvisits',
  props<{ id: string }>()
);

export const loadSessionvisitsSuccess = createAction(
  '[Sessionvisits] Load Sessionvisits Success',
  props<{ data: Array<VisitSessionBlock> }>()
);

export const loadSessionvisitsFailure = createAction(
  '[Sessionvisits] Load Sessionvisits Failure',
  props<{ response: any }>()
);
