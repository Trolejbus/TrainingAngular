import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';
import { Product } from '../ex5/ex5.component';
import { ProductService } from '../ex7/ex7.component';

@Component({
    selector: 'app-ex8',
    templateUrl: './ex8.component.html',
    styleUrls: ['./ex8.component.scss'],
    providers: [
        ProductService,
    ],
})
export class Ex8Component implements OnInit {
    public products$ = of([
            { number: 2, number2: 3 },
            { number: 4, number2: 3 },
            { number: 6, number2: 3 },
            { number: 8, number2: 3 }])
        .pipe(
            delay(1000),
            map(p => p.map(el => ({
                ...el,
                number: el.number + 5,
            }) as Product)),
            tap(p => console.log(p)),
        );

    constructor(private productService: ProductService) { }

    ngOnInit(): void {
    }
}
