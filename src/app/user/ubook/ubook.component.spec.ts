import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UbookComponent } from './ubook.component';

describe('UbookComponent', () => {
  let component: UbookComponent;
  let fixture: ComponentFixture<UbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UbookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
