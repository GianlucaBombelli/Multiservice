import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficinaComponent } from './officina.component';

describe('OfficinaComponent', () => {
  let component: OfficinaComponent;
  let fixture: ComponentFixture<OfficinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficinaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
