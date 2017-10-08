import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventCategoryComponent } from './event-category/event-category.component';
import { EventBoxComponent } from './event-box/event-box.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EventCategoryComponent, EventBoxComponent],
  exports: [EventCategoryComponent]
})
export class EventModule { }
