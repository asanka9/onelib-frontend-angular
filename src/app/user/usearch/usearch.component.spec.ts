import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsearchComponent } from './usearch.component';

describe('UsearchComponent', () => {
  let component: UsearchComponent;
  let fixture: ComponentFixture<UsearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
