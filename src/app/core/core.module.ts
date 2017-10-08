import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventModule } from '../event/event.module';
import { HomeComponent } from './home/home.component';
import { BuySeatComponent } from './buy-seat/buy-seat.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    EventModule,
    SharedModule
  ],
  declarations: [HomeComponent, BuySeatComponent],
  exports: [HomeComponent, BuySeatComponent]
})
export class CoreModule { }
