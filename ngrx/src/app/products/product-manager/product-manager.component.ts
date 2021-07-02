import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductModel } from '../models/product.model';
import { getCurrentProduct, getError, getProducts, getShowProductCode, State } from '../state';
import { ProductPageActions } from '../state/actions';

@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.scss']
})
export class ProductManagerComponent implements OnInit {

  public selectedProduct$: Observable<ProductModel | null>;
  public products$: Observable<ProductModel[]>;
  public showCode$: Observable<boolean>;
  public error$: Observable<string | undefined>;

  constructor(
    private store: Store<State>,
  ) {
    this.products$ = store.select(getProducts);
    this.selectedProduct$ = this.store.select(getCurrentProduct);
    this.showCode$ = this.store.select(getShowProductCode);
    this.error$ = this.store.select(getError);
  }

  ngOnInit(): void {
    this.store.dispatch(ProductPageActions.loadProducts());
  }

  public showCodeChanged(value: boolean): void {
    this.store.dispatch(ProductPageActions.toggleProductCode());
  }

  public select(product: ProductModel | null): void {
    this.store.dispatch(ProductPageActions.setCurrentProduct({ productId: product?.id ?? null }));
  }

  public add(): void {
    this.store.dispatch(ProductPageActions.initCurrentProduct());
  }

  public onFormSaved(product: ProductModel): void {
    if (product.id === 0) {
      this.store.dispatch(ProductPageActions.createProduct({ product }));
    }
    else {
      this.store.dispatch(ProductPageActions.updateProduct({ product }));
    }
  }

  public onFormCancelled(): void {
    this.store.dispatch(ProductPageActions.clearCurrentProduct());
  }
}
