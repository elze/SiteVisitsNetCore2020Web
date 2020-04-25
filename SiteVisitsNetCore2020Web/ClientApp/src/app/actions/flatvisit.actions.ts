import { createAction, props } from '@ngrx/store';

export const loadFlatvisits = createAction(
  '[Flatvisit] Load Flatvisits'
);

export const loadFlatvisitsSuccess = createAction(
  '[Flatvisit] Load Flatvisits Success',
  props<{ data: any }>()
);

export const loadFlatvisitsFailure = createAction(
  '[Flatvisit] Load Flatvisits Failure',
  props<{ error: any }>()
);
