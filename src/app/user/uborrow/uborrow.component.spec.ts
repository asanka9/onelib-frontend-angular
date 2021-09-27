import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UborrowComponent } from './uborrow.component';

describe('UborrowComponent', () => {
  let component: UborrowComponent;
  let fixture: ComponentFixture<UborrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UborrowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UborrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
