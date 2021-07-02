import { Component, OnInit } from '@angular/core';
import { combineLatest, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Component({
  selector: 'app-ex10',
  templateUrl: './ex10.component.html',
  styleUrls: ['./ex10.component.scss']
})
export class Ex10Component implements OnInit {

    private products$ = of([{ number: 10 }, { number: 20 }, { number: 30 }])
        .pipe(delay(1000));
    private categories$ = of([{ number: 10, name: "c1" }, { number: 20, name: "c2" }, { number: 30, name: "c3" }])
        .pipe(delay(1000));
    productsWithCategories$: any;

    constructor() { }

    ngOnInit(): void {
        this.productsWithCategories$ = combineLatest([this.products$, this.categories$])
            .pipe(
                map(([products, categories]) => 
                    products.map(product => ({
                        ...product,
                        price: product.number * 1.5,
                        category: categories.find(c => product.number == c.number)?.name,
                }))
            )).subscribe(console.log);
    }

}
