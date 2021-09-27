import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UaccountComponent } from './uaccount.component';

describe('UaccountComponent', () => {
  let component: UaccountComponent;
  let fixture: ComponentFixture<UaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UaccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
