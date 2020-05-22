import { createAction, props } from '@ngrx/store';
import { VisitFlat } from '../models/VisitFlat';

export const loadFlatvisits = createAction(
  '[Flatvisit] Load Flatvisits'
);

export const loadFlatvisitsSuccess = createAction(
  '[Flatvisit] Load Flatvisits Success',
  props<{ data: VisitFlat[] }>()
);

export const loadFlatvisitsFailure = createAction(
  '[Flatvisit] Load Flatvisits Failure',
  props<{ response: any }>()
);
