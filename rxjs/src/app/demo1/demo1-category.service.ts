import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { delay, shareReplay, tap } from "rxjs/operators";

@Injectable()
export class Demo1CategoryService {
    public categories$ = of(MOCKED_CATEGORIES)
        .pipe(
            delay(3000),
            tap(c => console.log("Loading categories")),
            shareReplay(1),
        );
}

export class Demo1Category {
    public id!: number;
    public name!: string;
}

export const MOCKED_CATEGORIES: Demo1Category[] = [
    {
        id: 1,
        name: "Tools",
    },
    {
        id: 2,
        name: "Office",
    },
    {
        id: 3,
        name: "IT",
    },
];
