import { createAction, props } from '@ngrx/store';
import { VisitSession } from '../viewmodels/VisitSession';

export const loadSessionvisits = createAction(
  '[Sessionvisit] Load Sessionvisits',
  props<{ id: string }>()
);

export const loadSessionvisitsSuccess = createAction(
  '[Sessionvisits] Load Sessionvisits Success',
  props<{ data: VisitSession }>()
);

export const loadSessionvisitsFailure = createAction(
  '[Sessionvisits] Load Sessionvisits Failure',
  props<{ response: any }>()
);
