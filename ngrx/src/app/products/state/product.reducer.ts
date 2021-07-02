import { createReducer, on } from "@ngrx/store";
import { ProductModel } from "../models/product.model";
import { ProductApiActions, ProductPageActions } from "./actions";

export interface ProductState {
    showProductCode: boolean;
    currentProductId: number | null;
    products: ProductModel[];
    error?: string,
}

const initialState: ProductState = {
    showProductCode: true,
    currentProductId: null,
    products: [],
}

export const productReducer = createReducer<ProductState>(
    initialState,
    on(ProductPageActions.toggleProductCode, (state) : ProductState => ({
        ...state,
        showProductCode: !state.showProductCode,
    })),
    on(ProductPageActions.setCurrentProduct, (state, action) : ProductState => ({
        ...state,
        currentProductId: action.productId,
    })),
    on(ProductPageActions.clearCurrentProduct, (state): ProductState => ({
        ...state,
        currentProductId: null,
    })),
    on(ProductPageActions.initCurrentProduct, (state): ProductState => ({
        ...state,
        currentProductId: 0,
    })),
    on(ProductApiActions.loadProductsSuccess, (state, action): ProductState => ({
        ...state,
        products: action.products,
    })),
    on(ProductApiActions.loadProductsFailure, (state, action): ProductState => ({
        ...state,
        error: action.error,
    })),
    on(ProductApiActions.updateProductSuccess, (state, action) => {
        const updateProducts = state.products.map(
            item => action.product.id === item.id ? action.product : item);
        return {
            ...state,
            products: updateProducts,
            currentProductId: action.product.id,
            error: '',
        };
    }),
    on(ProductApiActions.updateProductFailure, (state, action) => ({
        ...state,
        error: action.error,
    })),
    on(ProductApiActions.createProductSuccess, (state, action) => {
        const createdProducts = state.products.slice();
        createdProducts.push(action.product);
        return {
            ...state,
            products: createdProducts,
            currentProductId: action.product.id,
            error: '',
        };
    }),
    on(ProductApiActions.createProductFailure, (state, action) => ({
        ...state,
        error: action.error,
    })),
);
