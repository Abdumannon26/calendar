import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {CalendarModule} from "./calendar/calendar.component";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {AngularSvgIconModule} from "angular-svg-icon";
const APP_ROUTES: Routes = [
  {
    path: '',
    loadChildren: (): Promise<any> => import('./calendar/calendar.component').then(m => m.CalendarModule)
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    CalendarModule,
    FormsModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
