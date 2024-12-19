import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-swiper-instance1',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './swiper-instance1.component.html',
  styleUrl: './swiper-instance1.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SwiperInstance1Component {
  slideContent = [
    'assets/swiper1_assets/bild1.jpg',
    'assets/swiper1_assets/bild2.jpg',
    'assets/swiper1_assets/bild3.jpg',
    'assets/swiper1_assets/bild4.jpg',
    'assets/swiper1_assets/bild5.jpg',
    'assets/swiper1_assets/bild6.jpg',
    'assets/swiper1_assets/bild7.jpg',
    'assets/swiper1_assets/bild8.jpg',
    'assets/swiper1_assets/bild9.jpg',
    'assets/swiper1_assets/bild10.jpg',
    'assets/swiper1_assets/bild11.jpeg'
  ]
}
