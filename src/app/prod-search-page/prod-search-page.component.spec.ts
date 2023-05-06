import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdSearchPageComponent } from './prod-search-page.component';

describe('ProdSearchPageComponent', () => {
  let component: ProdSearchPageComponent;
  let fixture: ComponentFixture<ProdSearchPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdSearchPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdSearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
