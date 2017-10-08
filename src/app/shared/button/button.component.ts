import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Output() onAction: EventEmitter<any> = new EventEmitter();

  constructor() { }

  onClick() {
    this.onAction.emit();
  }

}
