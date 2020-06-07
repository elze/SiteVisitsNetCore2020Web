import { createAction, props } from '@ngrx/store';
import { PaginatedFlatVisitsResult } from '../viewmodels/PaginatedFlatVisitsResult';

export const loadPaginatedFlatVisits = createAction(
  '[PaginatedFlatVisits] Load PaginatedFlatVisits',
  props < { pageNum: number, pageSize: number }>()
);

export const loadPaginatedFlatVisitsSuccess = createAction(
  '[PaginatedFlatVisits] Load PaginatedFlatVisits Success',
  props<{ data: PaginatedFlatVisitsResult }>()
);

export const loadPaginatedFlatVisitsFailure = createAction(
  '[PaginatedFlatVisits] Load PaginatedFlatVisits Failure',
  props<{ response: any }>()
);
