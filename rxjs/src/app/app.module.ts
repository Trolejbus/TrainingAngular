import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ex1Component } from './ex1/ex1.component';
import { Ex2Component } from './ex2/ex2.component';
import { Ex3Component } from './ex3/ex3.component';
import { Ex4Component } from './ex4/ex4.component';
import { Ex5Component } from './ex5/ex5.component';
import { Ex6Component } from './ex6/ex6.component';
import { Ex7Component } from './ex7/ex7.component';
import { Ex8Component } from './ex8/ex8.component';
import { Ex9Component } from './ex9/ex9.component';
import { Ex10Component } from './ex10/ex10.component';
import { Ex11Component } from './ex11/ex11.component';
import { Ex12Component } from './ex12/ex12.component';
import { Ex13Component } from './ex13/ex13.component';
import { Ex14Component } from './ex14/ex14.component';
import { Ex15Component } from './ex15/ex15.component';
import { Demo1Component } from './demo1/demo1.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Demo2Component } from './demo2/demo2.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Demo1detailsComponent } from './demo1/demo1details/demo1details.component';
import { Demo1formComponent } from './demo1/demo1form/demo1form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        Ex1Component,
        Ex2Component,
        Ex3Component,
        Ex4Component,
        Ex5Component,
        Ex6Component,
        Ex7Component,
        Ex8Component,
        Ex9Component,
        Ex10Component,
        Ex11Component,
        Ex12Component,
        Ex13Component,
        Ex14Component,
        Ex15Component,
        Demo1Component,
        Demo2Component,
        Demo1detailsComponent,
        Demo1formComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FontAwesomeModule,
        NgbModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: [
        AppComponent,
    ],
})
export class AppModule { }
