import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DireticaNgforComponent } from './diretica-ngfor.component';

describe('DireticaNgforComponent', () => {
  let component: DireticaNgforComponent;
  let fixture: ComponentFixture<DireticaNgforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DireticaNgforComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DireticaNgforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
