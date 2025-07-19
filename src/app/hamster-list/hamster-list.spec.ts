import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HamsterList } from './hamster-list';

describe('HamsterList', () => {
  let component: HamsterList;
  let fixture: ComponentFixture<HamsterList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HamsterList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HamsterList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
