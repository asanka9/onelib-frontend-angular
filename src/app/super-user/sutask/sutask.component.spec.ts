import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SutaskComponent } from './sutask.component';

describe('SutaskComponent', () => {
  let component: SutaskComponent;
  let fixture: ComponentFixture<SutaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SutaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SutaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
