 import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { delay } from "rxjs/operators";
import { MOCKED_PRODUCTS } from "../models/mocked-products";
import { ProductModel } from "../models/product.model";

@Injectable()
export class ProductService {
   
    private products = MOCKED_PRODUCTS;

    public getAll(): Observable<ProductModel[]> {
        return of(this.products).pipe(delay(200));
    }

    public update(product: ProductModel): Observable<ProductModel> {
        const array = this.products.slice();
        const index = array.findIndex(p => p.id === product.id);
        array[index] = product;
        this.products = array;
        return of(product).pipe(delay(100));
    }

    public create(product: ProductModel): Observable<ProductModel> {
        const maxIndex = this.products.reduce((a, b) => b.id > a ? b.id : a, 0);
        this.products = [...this.products.slice(), { ...product, id: maxIndex }];
        return of(product).pipe(delay(100));
    }
}