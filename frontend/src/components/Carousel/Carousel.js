import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';

import { InfoCard } from '../InfoCard/InfoCard';

import styles from './Carousel.module.css';

export function Carousel() {
  return (
    <>
      <Swiper
        className={styles.main_container}
        direction={'vertical'}
        effect={ 'coverflow' }
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={
          {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }
        }
        pagination={{el:'', clickable: true}}
        modules={[Navigation, Pagination, EffectCoverflow]}
      >
        <SwiperSlide>
          <InfoCard />
        </SwiperSlide>
        <SwiperSlide>
          <InfoCard />
        </SwiperSlide>
        <SwiperSlide>
          <InfoCard />
        </SwiperSlide>
        <SwiperSlide>
          <InfoCard />
        </SwiperSlide>
        <SwiperSlide>
          <InfoCard />
        </SwiperSlide>

        {/* <div className="slider-controller">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div> */}

      </Swiper>
    </>
  );
}
