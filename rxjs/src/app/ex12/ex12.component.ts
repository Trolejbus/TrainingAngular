import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'app-ex12',
  templateUrl: './ex12.component.html',
  styleUrls: ['./ex12.component.scss']
})
export class Ex12Component implements OnInit {

    private actionSubject = new Subject<number>();
    private behaviourActionSubject = new BehaviorSubject<number>(10);
    private action$ = this.actionSubject.asObservable();

    constructor() { }

    ngOnInit(): void {
        this.action$.pipe(
            startWith(5),
        ).subscribe(console.log);
        this.behaviourActionSubject.subscribe(console.log);
    }

}
