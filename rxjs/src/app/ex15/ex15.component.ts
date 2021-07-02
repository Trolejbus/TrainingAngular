import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { concatMap, delay, mergeMap, switchMap } from 'rxjs/operators';

@Component({
    selector: 'app-ex15',
    templateUrl: './ex15.component.html',
    styleUrls: ['./ex15.component.scss'],
})
export class Ex15Component implements OnInit {
    private products$ = of('A1', 'A2');

    constructor() { }

    ngOnInit(): void {
        
    }
    
    public concatMap(): void {
        this.products$
            .pipe(
                concatMap(id => this.getById(id))
            ).subscribe(console.log);
    }

    public mergeMap(): void {
        this.products$
            .pipe(
                mergeMap(id => this.getById(id))
            ).subscribe(console.log);
    }

    public switchMap(): void {
        this.products$
            .pipe(
                switchMap(id => this.getById(id))
            ).subscribe(console.log);
    }

    private getById(id: string): any {
        switch (id) {
            case "A1":
                return of("Foo1").pipe(delay(2000));
            case "A2":
                return of("Foo2").pipe(delay(1000));
            default:
                throw new Error();
        }
    }

}
