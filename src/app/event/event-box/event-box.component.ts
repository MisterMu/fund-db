import { Component, OnInit, Input } from '@angular/core';
import { IEventModel } from '../event.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-box',
  templateUrl: './event-box.component.html',
  styleUrls: ['./event-box.component.scss']
})
export class EventBoxComponent implements OnInit {
  @Input() event: IEventModel;
  @Input() last: boolean;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  book() {
    this.router.navigate(['/booking']);
  }

}
