import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GommistaComponent } from './gommista.component';

describe('GommistaComponent', () => {
  let component: GommistaComponent;
  let fixture: ComponentFixture<GommistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GommistaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GommistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
