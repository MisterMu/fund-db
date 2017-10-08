import { Component, OnInit, Input } from "@angular/core";
import { IEventModel, IEventsCategory } from "../event.interface";

@Component({
  selector: 'app-event-category',
  templateUrl: './event-category.component.html',
  styleUrls: ['./event-category.component.scss']
})
export class EventCategoryComponent implements OnInit {
  @Input() data: IEventsCategory;

  constructor() { }

  ngOnInit() {
  }

}
