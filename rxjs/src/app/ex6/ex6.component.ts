import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { EMPTY, Observable, of, throwError } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';
import { Product } from '../ex5/ex5.component';

@Component({
    selector: 'app-ex6',
    templateUrl: './ex6.component.html',
    styleUrls: ['./ex6.component.scss'],
})
export class Ex6Component implements OnInit {

    public errorProductsReplace$: Observable<any> = new Observable(obs => {
        obs.next({ number: 2 });
        obs.error("Error");
    }).pipe(
        catchError(err => {
            console.error(err);
            return of<Product[]>([
                { number: 12 }
            ]);
        }),
        delay(1000),
    );

    public errorProductsRethrow$: Observable<any> = new Observable(obs => {
        obs.next({ number: 2 });
        obs.error("Error");
    }).pipe(
        catchError(this.handleError),
        delay(1000),
    );

    public errorProductsEmpty$: Observable<any> = new Observable(obs => {
        obs.next({ number: 2 });
        obs.error("Error");
    }).pipe(
        delay(1000),
        catchError(err => {
            let error = `Error text: ${err}`;
            console.error(error);
            return EMPTY;
        }),
    );

    constructor() { }

    ngOnInit(): void {
    }

    private handleError(err: any): Observable<never> {
        const errorMessage = `Error text: ${err}`;
        return throwError(errorMessage);
    }

}
