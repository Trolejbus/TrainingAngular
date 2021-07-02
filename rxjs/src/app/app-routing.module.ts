import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { Ex1Component } from './ex1/ex1.component';
import { Ex10Component } from './ex10/ex10.component';
import { Ex11Component } from './ex11/ex11.component';
import { Ex12Component } from './ex12/ex12.component';
import { Ex13Component } from './ex13/ex13.component';
import { Ex14Component } from './ex14/ex14.component';
import { Ex15Component } from './ex15/ex15.component';
import { Ex2Component } from './ex2/ex2.component';
import { Ex3Component } from './ex3/ex3.component';
import { Ex4Component } from './ex4/ex4.component';
import { Ex5Component } from './ex5/ex5.component';
import { Ex6Component } from './ex6/ex6.component';
import { Ex7Component } from './ex7/ex7.component';
import { Ex8Component } from './ex8/ex8.component';
import { Ex9Component } from './ex9/ex9.component';

const routes: Routes = [
    {
        path: "demo1",
        component: Demo1Component,
    },
    {
        path: "demo2",
        component: Demo2Component,
    },
    {
        path: "ex1",
        component: Ex1Component,
    },
    {
        path: "ex2",
        component: Ex2Component,
    },
    {
        path: "ex3",
        component: Ex3Component,
    },
    {
        path: "ex4",
        component: Ex4Component,
    },
    {
        path: "ex5",
        component: Ex5Component,
    },
    {
        path: "ex6",
        component: Ex6Component,
    },
    {
        path: "ex7",
        component: Ex7Component,
    },
    {
        path: "ex8",
        component: Ex8Component,
    },
    {
        path: "ex9",
        component: Ex9Component,
    },
    {
        path: "ex10",
        component: Ex10Component,
    },
    {
        path: "ex11",
        component: Ex11Component,
    },
    {
        path: "ex12",
        component: Ex12Component,
    },
    {
        path: "ex13",
        component: Ex13Component,
    },
    {
        path: "ex14",
        component: Ex14Component,
    },
    {
        path: "ex15",
        component: Ex15Component,
    },
    {
        path: "**",
        redirectTo: "demo1",
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule { }
