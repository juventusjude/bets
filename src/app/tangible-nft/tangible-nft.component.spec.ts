import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TangibleNftComponent } from './tangible-nft.component';

describe('TangibleNftComponent', () => {
  let component: TangibleNftComponent;
  let fixture: ComponentFixture<TangibleNftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TangibleNftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TangibleNftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
