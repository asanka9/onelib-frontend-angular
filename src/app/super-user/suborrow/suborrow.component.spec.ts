import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuborrowComponent } from './suborrow.component';

describe('SuborrowComponent', () => {
  let component: SuborrowComponent;
  let fixture: ComponentFixture<SuborrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuborrowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuborrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
