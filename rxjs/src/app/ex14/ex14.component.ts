import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';

@Component({
    selector: 'app-ex14',
    templateUrl: './ex14.component.html',
    styleUrls: ['./ex14.component.scss'],
})
export class Ex14Component implements OnInit {

    private products$ = of([1,2,3,4])
        .pipe(
            tap(c => console.log('Before cache:', c)),
            shareReplay(1),
            tap(c => console.log('After cache:', c)),
        );

    constructor() { }

    ngOnInit(): void {
    }

    public get(): void {
        this.products$.subscribe(console.log);
    }

}
