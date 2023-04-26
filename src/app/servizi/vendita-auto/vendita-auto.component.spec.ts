import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenditaAutoComponent } from './vendita-auto.component';

describe('VenditaAutoComponent', () => {
  let component: VenditaAutoComponent;
  let fixture: ComponentFixture<VenditaAutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenditaAutoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VenditaAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
