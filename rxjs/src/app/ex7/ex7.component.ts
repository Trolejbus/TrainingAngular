import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Injectable, OnInit } from '@angular/core';
import { EMPTY, Observable, throwError } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';
import { Product } from '../ex5/ex5.component';


@Injectable()
export class ProductService {
    public productsInvalid$: Observable<Product | any> = new Observable(obs => {
        obs.next({ number: 2 });
        obs.next({ number: 4 });
        obs.next({ number: 6 });
        obs.next({ number: 8 });
        obs.error("Error");
    }).pipe(
        delay(1000),
        catchError(err => {
            let error = `Error text: ${err}`;
            console.error(error);
            return throwError(error);
        }),
    );

    public products$: Observable<any> = new Observable(obs => {
        obs.next({ number: 2 });
        obs.next({ number: 4 });
        obs.next({ number: 6 });
        obs.next({ number: 8 });
        obs.complete();
    }).pipe(
        delay(1000),
        catchError(err => {
            let error = `Error text: ${err}`;
            console.error(error);
            return throwError(error);
        }),
    );
}

@Component({
    selector: 'app-ex7',
    templateUrl: './ex7.component.html',
    styleUrls: ['./ex7.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        ProductService,
    ],
})
export class Ex7Component implements OnInit {

    public errorMessage: string = "no error";
    public products$ = this.productService.productsInvalid$
        .pipe(
            catchError(err => this.handleError(err)),
        )

    constructor(
        private productService: ProductService,
        private changeDetectionRef: ChangeDetectorRef,
    ) { }

    ngOnInit(): void {
    }

    private handleError(handleError: any): Observable<Product[]> {
        this.errorMessage = handleError;
        this.changeDetectionRef.detectChanges();
        return EMPTY;
    }
}
