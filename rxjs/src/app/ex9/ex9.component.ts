import { Component, OnInit } from '@angular/core';
import { combineLatest, forkJoin, Observable } from 'rxjs';
import { withLatestFrom } from 'rxjs/operators';

@Component({
    selector: 'app-ex9',
    templateUrl: './ex9.component.html',
    styleUrls: ['./ex9.component.scss'],
})
export class Ex9Component implements OnInit {

    private obs1: Observable<number> = new Observable<number>(obs => {
        obs.next(1);
        setTimeout(() => {
            obs.next(2);
        }, 1000);
        setTimeout(() => {
            obs.next(3);
            obs.complete();
        }, 2000);
    });

    private obs2: Observable<number> = new Observable<number>(obs => {
        obs.next(10);
        setTimeout(() => {
            obs.next(20);
        }, 500);
        setTimeout(() => {
            obs.next(30);
            obs.complete();
        }, 900);
    });

    private obs3: Observable<number> = new Observable<number>(obs => {
        setTimeout(() => {
            obs.next(200);
        }, 100);
        setTimeout(() => {
            obs.next(300);
            obs.complete();
        }, 1500);
    });


    constructor() { }

    ngOnInit(): void {

    }
    
    public combineLatest(): void {
        combineLatest([this.obs1, this.obs2, this.obs3])
            .subscribe(f => console.log("combineLatest:", f));
    }

    public forkJoin(): void {
        forkJoin([this.obs1, this.obs2, this.obs3])
        .subscribe(f => console.log("forkJoin:", f));
    }

    public withLatestFrom(): void {
        this.obs2.pipe(
            withLatestFrom(this.obs1, this.obs3)
        ).subscribe(f => console.log("withLatestFrom", f));
    }
}
