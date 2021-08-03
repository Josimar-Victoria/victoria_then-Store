import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsEditsComponent } from './products-edits.component';

describe('ProductsEditsComponent', () => {
  let component: ProductsEditsComponent;
  let fixture: ComponentFixture<ProductsEditsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsEditsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsEditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
