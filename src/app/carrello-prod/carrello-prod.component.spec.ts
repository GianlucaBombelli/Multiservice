import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrelloProdComponent } from './carrello-prod.component';

describe('CarrelloProdComponent', () => {
  let component: CarrelloProdComponent;
  let fixture: ComponentFixture<CarrelloProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrelloProdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrelloProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
