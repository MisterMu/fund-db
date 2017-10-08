import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from "./core/home/home.component";
import { BuySeatComponent } from "./core/buy-seat/buy-seat.component";

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, {
    path: 'booking',
    component: BuySeatComponent
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
