import { createAction, props } from "@ngrx/store";
import { ProductModel } from "../../models/product.model";

export const loadProductsSuccess = createAction(
    '[Product API] Load products success',
    props<{ products: ProductModel[] }>());
export const loadProductsFailure = createAction(
    '[Product API] Load products failure',
    props<{ error: string }>());

export const updateProductSuccess = createAction(
    '[Product API] Update products success',
    props<{ product: ProductModel }>());
export const updateProductFailure = createAction(
    '[Product API] Update products failure',
    props<{ error: string }>());

export const createProductSuccess = createAction(
    '[Product API] Create product success',
    props<{ product: ProductModel }>());
export const createProductFailure = createAction(
    '[Product API] Create product failure',
    props<{ error: string }>());
