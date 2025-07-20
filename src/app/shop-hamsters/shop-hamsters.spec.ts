import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopHamsters } from './shop-hamsters';

describe('ShopHamsters', () => {
  let component: ShopHamsters;
  let fixture: ComponentFixture<ShopHamsters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShopHamsters]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopHamsters);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
