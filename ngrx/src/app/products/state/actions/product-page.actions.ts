import { createAction, props } from "@ngrx/store";
import { ProductModel } from "../../models/product.model";

export const toggleProductCode = createAction('[Product Page] Toggle Product Code');
export const setCurrentProduct = createAction(
    '[Product Page] Set Current Product',
    props<{ productId: number | null }>());
export const clearCurrentProduct = createAction('[Product Page] Clear Current Product');
export const initCurrentProduct = createAction('[Product Page] Initialize Current Product');

export const loadProducts = createAction('[Product Page] Load products');

export const updateProduct = createAction(
    '[Product Page] Update product',
    props<{product: ProductModel }>());

export const createProduct = createAction(
    '[Product Page] Create product',
    props<{ product: ProductModel }>());