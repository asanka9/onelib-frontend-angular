import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UlibraryComponent } from './ulibrary.component';

describe('UlibraryComponent', () => {
  let component: UlibraryComponent;
  let fixture: ComponentFixture<UlibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UlibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UlibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
