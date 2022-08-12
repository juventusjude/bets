import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetSoccerComponent } from './bet-soccer.component';

describe('BetSoccerComponent', () => {
  let component: BetSoccerComponent;
  let fixture: ComponentFixture<BetSoccerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetSoccerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BetSoccerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
