import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ProductService } from "../services/product.service";
import { catchError, concatMap, map, mergeMap } from 'rxjs/operators';
import { of } from "rxjs";
import { ProductApiActions, ProductPageActions } from "./actions";

@Injectable()
export class ProductEffects {

    constructor(
        private actions$: Actions,
        private productService: ProductService,
    ) {

    }

    loadProducts$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ProductPageActions.loadProducts),
            mergeMap(() => this.productService.getAll().pipe(
                map(products => ProductApiActions.loadProductsSuccess({ products })),
                catchError(error => of(ProductApiActions.loadProductsFailure({error}))),
        )));
    });

    updateProduct$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ProductPageActions.updateProduct),
            concatMap(action =>
                this.productService.update(action.product).pipe(
                    map(product => ProductApiActions.updateProductSuccess({ product })),
                    catchError(error => of(ProductApiActions.updateProductFailure({ error }))),
        )));
    });

    createProduct$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ProductPageActions.createProduct),
            concatMap(action => 
                this.productService.create(action.product).pipe(
                    map(product => ProductApiActions.createProductSuccess({ product })),
                    catchError(error => of(ProductApiActions.createProductFailure({ error }))),
        )));
    });
}