import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductModel } from '../models/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailsComponent implements OnInit, OnChanges {

  public formGroup: FormGroup;
  @Input()
  public product: ProductModel | null = null;
  @Output()
  public onSaved = new EventEmitter<ProductModel>();
  @Output()
  public onCancel = new EventEmitter<void>();

  constructor(
    fb: FormBuilder,
  ) {
    this.formGroup = fb.group({
      id: [null],
      name: [null, Validators.required],
      tags: [null],
      price: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.setFormValue(this.product);
  }

  public getTags(product: ProductModel): string {
    return product.tags?.join(", ") ?? '';
  }

  public onSubmit(): void {
    this.formGroup.markAllAsTouched();
    if (this.formGroup.invalid) {
      return;
    }

    const value = this.getFormValue();
    this.onSaved.next(value);
  }

  public cancel(): void {
    this.onCancel.next();
  }

  private setFormValue(product: ProductModel | null) {
    if (product == null) {
      this.formGroup.reset();
      return;
    }

    const value = {
      ...product,
      tags: product.tags?.join(',') ?? '',
    }
    this.formGroup.setValue(value);
  }

  private getFormValue(): ProductModel {
    const value = this.formGroup.value;
    return {
      ...value,
      price: Number(value.price),
      tags: value.tags.split(","),
    }
  }
}
