import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import styles from './Carousel.module.css';

// import required modules
import { EffectCards } from 'swiper/modules';

export function Carousel() {
  return (
    <>
      <Swiper
        effect={'cards'}
        mousewheel={true}
        direction={'vertical'}
        modules={[EffectCards]}
        className={styles.mySwiper}
      >
        <SwiperSlide className={styles.test_card}>Slide 1</SwiperSlide>
        <SwiperSlide className={styles.test_card}>Slide 2</SwiperSlide>
        <SwiperSlide className={styles.test_card}>Slide 3</SwiperSlide>
        <SwiperSlide className={styles.test_card}>Slide 4</SwiperSlide>
        <SwiperSlide className={styles.test_card}>Slide 5</SwiperSlide>
      </Swiper>
    </>
  );
}
