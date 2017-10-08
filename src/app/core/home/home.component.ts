import { Component, OnInit } from '@angular/core';
import { IEventsCategory } from '../../event/event.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public mock_data: IEventsCategory[] = [
    {
      title: 'Plays',
      today: [{
        name: 'Hamlet by Shakespeare',
        time: '13.00 - 16.00',
        hall: 'A3'
      }, {
        name: 'Oedipus Rex by Sophocles',
        time: '14.00 - 18.00',
        hall: 'A2'
      }, {
        name: 'Poetics by Aristotle',
        time: '18.00 - 22.00',
        hall: 'A3'
      }, {
        name: 'Ivanov by Chekhov',
        time: '20.00 - 24.00',
        hall: 'A1'
      }],
      yesterday: [{
        name: 'Hamlet by Shakespeare',
        time: '13.00 - 16.00',
        hall: 'A3'
      }, {
        name: 'Oedipus Rex by Sophocles',
        time: '14.00 - 18.00',
        hall: 'A2'
      }]
    }, {
      title: 'Concerts',
      today: [{
        name: 'Hamlet by Shakespeare',
        time: '13.00 - 16.00',
        hall: 'A3'
      }, {
        name: 'Oedipus Rex by Sophocles',
        time: '14.00 - 18.00',
        hall: 'A2'
      }, {
        name: 'Poetics by Aristotle',
        time: '18.00 - 22.00',
        hall: 'A3'
      }, {
        name: 'Ivanov by Chekhov',
        time: '20.00 - 24.00',
        hall: 'A1'
      }],
      yesterday: [{
        name: 'Hamlet by Shakespeare',
        time: '13.00 - 16.00',
        hall: 'A3'
      }, {
        name: 'Oedipus Rex by Sophocles',
        time: '14.00 - 18.00',
        hall: 'A2'
      }]
    }, {
      title: 'Lectures',
      today: [{
        name: 'Hamlet by Shakespeare',
        time: '13.00 - 16.00',
        hall: 'A3'
      }, {
        name: 'Oedipus Rex by Sophocles',
        time: '14.00 - 18.00',
        hall: 'A2'
      }, {
        name: 'Poetics by Aristotle',
        time: '18.00 - 22.00',
        hall: 'A3'
      }, {
        name: 'Ivanov by Chekhov',
        time: '20.00 - 24.00',
        hall: 'A1'
      }],
      yesterday: [{
        name: 'Hamlet by Shakespeare',
        time: '13.00 - 16.00',
        hall: 'A3'
      }, {
        name: 'Oedipus Rex by Sophocles',
        time: '14.00 - 18.00',
        hall: 'A2'
      }]
    }, {
      title: 'Conferences',
      today: [{
        name: 'Hamlet by Shakespeare',
        time: '13.00 - 16.00',
        hall: 'A3'
      }, {
        name: 'Oedipus Rex by Sophocles',
        time: '14.00 - 18.00',
        hall: 'A2'
      }, {
        name: 'Poetics by Aristotle',
        time: '18.00 - 22.00',
        hall: 'A3'
      }, {
        name: 'Ivanov by Chekhov',
        time: '20.00 - 24.00',
        hall: 'A1'
      }],
      yesterday: [{
        name: 'Hamlet by Shakespeare',
        time: '13.00 - 16.00',
        hall: 'A3'
      }, {
        name: 'Oedipus Rex by Sophocles',
        time: '14.00 - 18.00',
        hall: 'A2'
      }]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
