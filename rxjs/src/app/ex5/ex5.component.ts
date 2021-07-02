import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';

@Component({
    selector: 'app-ex5',
    templateUrl: './ex5.component.html',
    styleUrls: ['./ex5.component.scss'],
})
export class Ex5Component implements OnInit {

    public products$: Observable<Product[]> = of([{ number: 2 }, { number: 4 }, { number: 6 }]).pipe(delay(3000));

    constructor() { }

    ngOnInit(): void {
    }

}

export class Product {
    public number: number = 0;
    public number2?: number;
}
