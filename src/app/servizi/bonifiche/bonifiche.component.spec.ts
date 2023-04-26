import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonificheComponent } from './bonifiche.component';

describe('BonificheComponent', () => {
  let component: BonificheComponent;
  let fixture: ComponentFixture<BonificheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BonificheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BonificheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
