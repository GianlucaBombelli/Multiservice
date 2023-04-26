import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carosello2Component } from './carosello2.component';

describe('Carosello2Component', () => {
  let component: Carosello2Component;
  let fixture: ComponentFixture<Carosello2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Carosello2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Carosello2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
