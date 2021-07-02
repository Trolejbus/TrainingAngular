import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductModel } from '../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent implements OnInit {

  @Input()
  public selectedProduct!: ProductModel | null;
  @Input()
  public products!: ProductModel[];
  @Input()
  public showCode!: boolean;
  @Input()
  public error?: string | null;
  @Output()
  public showCodeChanged = new EventEmitter<boolean>();
  @Output()
  public initializeNewProduct = new EventEmitter<void>();
  @Output()
  public productSelected = new EventEmitter<ProductModel | null>();

  ngOnInit(): void {
  }

  public getTags(product: ProductModel): string {
    return product.tags?.join(", ") ?? '';
  }


}
