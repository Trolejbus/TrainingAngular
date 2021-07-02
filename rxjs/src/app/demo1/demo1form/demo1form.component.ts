import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Demo1CategoryService } from '../demo1-category.service';
import { Demo1Mode, Demo1Product, Demo1ProductService } from '../demo1-product.service';

@Component({
    selector: 'app-demo1form',
    templateUrl: './demo1form.component.html',
    styleUrls: ['./demo1form.component.scss'],
})
export class Demo1formComponent implements OnInit {

    public formGroup: FormGroup;

    constructor(
        public categoryService: Demo1CategoryService,
        private productService: Demo1ProductService,
        private fb: FormBuilder,
    ) {
        this.formGroup = this.fb.group({
            name: [null, Validators.required],
            price: [null, Validators.required],
            categoryId: [null, Validators.required],
        });
    }

    ngOnInit(): void {
    }

    public onSubmitted(): void {
        this.formGroup.markAllAsTouched();
        if (this.formGroup.invalid) {
            return;
        }

        this.productService.addProduct(this.formGroup.value as Demo1Product);
        this.productService.mode$.next(Demo1Mode.Display);
        this.formGroup.reset();
    }

    public cancel(): void {
        this.productService.mode$.next(Demo1Mode.Display);
    }
}
