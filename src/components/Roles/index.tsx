import React, { useState } from 'react';

import { Navigation, Pagination, Autoplay, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Roles: React.FC<{ items: string[] }> = ({ items }) => {
  return (
    <div className="w-full mt-5">
      <Swiper
        spaceBetween={20}
        className="swiper sample-slider"
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {items?.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-black/70 w-[100%] sm:w-[82%] mx-auto min-h-[300px] p-5 rounded-[40px] relative">
              <div className="mb-5  text-xl sm:text-3xl text-[#ffdd9a] underline bold">
                Roles and Responsibilities
              </div>

              <Image
                src="/Images/role.svg"
                alt="background element"
                height={200}
                width={200}
                className="hidden sm:block absolute  bottom-0 right-0 rounded-[40px]"
              ></Image>

              {/* mobile */}

              <Image
                src="/Images/role.svg"
                alt="background element"
                height={100}
                width={100}
                className="block sm:hidden absolute  bottom-0 right-0 rounded-[40px]"
              ></Image>
              <div className="z-100">{item}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Roles;
