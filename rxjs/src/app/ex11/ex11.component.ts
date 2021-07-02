import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable, of, Subject } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-ex11',
  templateUrl: './ex11.component.html',
  styleUrls: ['./ex11.component.scss']
})
export class Ex11Component implements OnInit {

    private products$ = of([1,2,3,4,5,6,7,8])
        .pipe(delay(2000));
    private actionSubject = new Subject();
    private action$ = this.actionSubject.asObservable();
    public filteredProducts$: Observable<number[]> | null = null;

    constructor() { }

    ngOnInit(): void {
        this.filteredProducts$ = combineLatest([
            this.products$,
            this.action$,
        ]).pipe(
            tap(t => console.log(t)),
            map(([products, category]) =>
                products.filter(product => product % 2 == 0)
            ),
        );
    }

    public action(): void {
        this.actionSubject.next();
    }
}
