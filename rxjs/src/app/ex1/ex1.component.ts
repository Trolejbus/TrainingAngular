import { Component, OnInit } from '@angular/core';
import { from, Observable, of } from 'rxjs';

@Component({
    selector: 'app-ex1',
    templateUrl: './ex1.component.html',
    styleUrls: ['./ex1.component.scss'],
})
export class Ex1Component implements OnInit {

    public observableWithError: Observable<string> = new Observable(appleObserver => {
        appleObserver.next("Apple 1");
        appleObserver.next("Apple 2");
        appleObserver.error("test");
        appleObserver.error("test2");
        appleObserver.complete();
    });

    public observableWithoutComplete: Observable<string> = new Observable(appleObserver => {
        appleObserver.next("Apple 1");
        appleObserver.next("Apple 2");
    });

    public observable: Observable<string> = new Observable(appleObserver => {
        appleObserver.next("Apple 1");
        appleObserver.next("Apple 2");
        appleObserver.complete();
    });

    public ofObservable: Observable<string> = of('Apple1', 'Apple2');

    public fromObservable: Observable<string> = from(['Apple1', 'Apple2']);


    constructor() { }

    ngOnInit(): void {

    }

    public obs(observable: Observable<string>): void {
        const observer = {
            next: (apple: string) => console.log(`next: ${apple}`),
            error: (err: string) => console.log(`error: ${err}`),
            complete: () => console.log("No more apples"),
        }

        const sub = observable.subscribe(observer);
        console.log(sub);
    }

}
