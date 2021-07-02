import { Component, OnInit } from '@angular/core';
import { merge, Observable, of, Subject } from 'rxjs';
import { scan } from 'rxjs/operators';

@Component({
    selector: 'app-ex13',
    templateUrl: './ex13.component.html',
    styleUrls: ['./ex13.component.scss']
})
export class Ex13Component implements OnInit {

    private products$: Observable<number[]> = of([1,2,3]);
    private addItemSubject = new Subject<number>();
    private addItem$: Observable<number> = this.addItemSubject.asObservable();

    productsWithAdd$ = merge(
        this.products$,
        this.addItem$ as Observable<any>,
    )
    .pipe(
        scan((acc: number[], curr: number) => [...acc, curr])
    );

    constructor() { }

    ngOnInit(): void {
    }

    public action(): void {
        this.addItemSubject.next(4);
    }

}
