import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrozzeriaComponent } from './carrozzeria.component';

describe('CarrozzeriaComponent', () => {
  let component: CarrozzeriaComponent;
  let fixture: ComponentFixture<CarrozzeriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrozzeriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrozzeriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
