import { Component, OnInit } from '@angular/core';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { Demo1CategoryService } from './demo1-category.service';
import { Demo1Mode, Demo1Product, Demo1ProductService } from './demo1-product.service';

@Component({
    selector: 'app-demo1',
    templateUrl: './demo1.component.html',
    styleUrls: ['./demo1.component.scss'],
    providers: [
        Demo1ProductService,
        Demo1CategoryService,
    ],
})
export class Demo1Component implements OnInit {

    public faEye = faEye;
    public products$ = this.productService.productsWithCategories$;
    public Demo1Mode = Demo1Mode;

    constructor(
        public productService: Demo1ProductService,
    ) { }

    ngOnInit(): void {
    }
    
    public selectProduct(product: Demo1Product): void {
        this.productService.selectProduct(product.id);
    }

    public add(): void {
        this.productService.mode$.next(Demo1Mode.Add);
    }
}
