import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { interval } from 'rxjs';
import { fromEvent } from 'rxjs';

@Component({
    selector: 'app-ex2',
    templateUrl: './ex2.component.html',
    styleUrls: ['./ex2.component.scss'],
})
export class Ex2Component implements OnInit, AfterViewInit {

    @ViewChild('fromEvent')
    public fromEventButton: ElementRef | undefined;

    constructor() { }

    ngAfterViewInit(): void {
        const parStream = fromEvent(this.fromEventButton?.nativeElement, 'click')
            .subscribe(console.log);
    }

    ngOnInit(): void {

    }

    public interval(): void {
        const num = interval(1000).subscribe(console.log);
    }
}
