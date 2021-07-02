import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

@Component({
    selector: 'app-ex3',
    templateUrl: './ex3.component.html',
    styleUrls: ['./ex3.component.scss']
})
export class Ex3Component implements OnInit {

    public observable = of(2, 4, 6);

    constructor() { }

    ngOnInit(): void {
    }

    public mapOp(): void {
        this.observable
            .pipe(
                map(item => item * 2),
                map(item =>  item - 3),
            ).subscribe(console.log);
    }

    public tapOp(): void {
        this.observable
            .pipe(
                tap(console.log),
                map(item => item * 2),
                tap(console.log),
                map(item =>  item - 3),
                tap(console.log),
            ).subscribe();
    }

    public takeOp(): void {
        this.observable
            .pipe(
                take(2)
            ).subscribe(console.log);
        this.observable
            .pipe(
                take(4)
            ).subscribe(console.log);
    }

}
