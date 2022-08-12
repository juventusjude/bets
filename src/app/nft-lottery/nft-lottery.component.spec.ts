import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftLotteryComponent } from './nft-lottery.component';

describe('NftLotteryComponent', () => {
  let component: NftLotteryComponent;
  let fixture: ComponentFixture<NftLotteryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NftLotteryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NftLotteryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
