import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

import { Pagination, Mousewheel, Keyboard } from 'swiper/modules';

import { InfoCard } from '../InfoCard/InfoCard';

import styles from './Carousel.module.css';

export function Carousel( { songs } ) {
  return (
    
      <Swiper
        className={styles.main_container}
        direction={'vertical'}
        grabCursor={true}
        mousewheel={true}
        keyboard={{ enabled: true} }
        centeredSlides={true}
        loop={false}
        slidesPerView={1}
        spaceBetween={30}
        coverflowEffect={
          {
            rotate: 0,
            stretch: 70,
          }
        }
        pagination={{ dynamicBullets: true }}
        modules={[Pagination, Mousewheel, Keyboard]}
      >
        {songs.map((song) => (
          <SwiperSlide key={song.id}>
            <InfoCard song={song} />
          </SwiperSlide>
        ))}

        {/* <div className="swiper-pagination-bullet"></div> */}

      </Swiper>
  );
}
