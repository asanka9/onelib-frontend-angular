import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuaccountComponent } from './suaccount.component';

describe('SuaccountComponent', () => {
  let component: SuaccountComponent;
  let fixture: ComponentFixture<SuaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuaccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
