import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemolizioniComponent } from './demolizioni.component';

describe('DemolizioniComponent', () => {
  let component: DemolizioniComponent;
  let fixture: ComponentFixture<DemolizioniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemolizioniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemolizioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
