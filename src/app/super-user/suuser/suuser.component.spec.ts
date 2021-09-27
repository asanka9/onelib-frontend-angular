import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuuserComponent } from './suuser.component';

describe('SuuserComponent', () => {
  let component: SuuserComponent;
  let fixture: ComponentFixture<SuuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
