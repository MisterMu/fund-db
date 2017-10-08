import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventModule } from '../event/event.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    EventModule
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class CoreModule { }
