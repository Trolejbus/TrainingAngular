import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-ex4',
  templateUrl: './ex4.component.html',
  styleUrls: ['./ex4.component.scss']
})
export class Ex4Component implements OnInit {

    public observable = of(2, 4, 6);

    constructor() { }

    ngOnInit(): void {

    }

    public custom(): void {
        this.observable.pipe(
            mapCond((a) => a * 2, b => b - 1, c => c > 5),
        ).subscribe(console.log);
    }
}

export function mapCond<TSource, TDest>(fnTrue: (a: TSource) => TDest, fnFalse: (a: TSource) => TDest, fnIf: (a:TSource) => boolean) {
    return (input: Observable<TSource>) => 
        new Observable<TDest>(ob => {
            return input.subscribe({
                next: (v) => {
                    if (fnIf(v)) {
                        ob.next(fnTrue(v));
                    }
                    else {
                        ob.next(fnFalse(v));
                    }
                },
                error: err => ob.error(err),
                complete: () => ob.complete(),
            });
        })
}
