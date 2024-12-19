import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperInstance1Component } from './swiper-instance1.component';

describe('SwiperInstance1Component', () => {
  let component: SwiperInstance1Component;
  let fixture: ComponentFixture<SwiperInstance1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwiperInstance1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SwiperInstance1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
