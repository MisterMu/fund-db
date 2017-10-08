import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuySeatComponent } from './buy-seat.component';

describe('BuySeatComponent', () => {
  let component: BuySeatComponent;
  let fixture: ComponentFixture<BuySeatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuySeatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuySeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
