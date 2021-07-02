import { Component, OnInit } from '@angular/core';
import { Demo1ProductService } from '../demo1-product.service';

@Component({
    selector: 'app-demo1details',
    templateUrl: './demo1details.component.html',
    styleUrls: ['./demo1details.component.scss'],
})
export class Demo1detailsComponent implements OnInit {

    public selectedProduct$ = this.productService.selectedProduct$;

    constructor(private productService: Demo1ProductService) { }

    ngOnInit(): void {

    }

}
