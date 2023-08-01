import React, { useState } from 'react';

import { Navigation, Pagination, Autoplay, Scrollbar, A11y } from 'swiper';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Achievements: React.FC<{ items: string[] }> = ({ items }) => {
  return (
    <div className="w-full">
      <div className="text-center text-3xl text-[#ffdd9a] underline mb-5">
        Achievement
      </div>

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
            <div className="bg-black/70 w-[100%] sm:w-[80%] sm:mx-auto  min-h-[300px] p-5 rounded-[40px] relative flex justify-center items-center">
              {item}

              <Image
                src="/Images/achievementtop.png"
                alt="background element"
                height={200}
                width={200}
                className="hidden sm:block absolute top-0 right-0 object-cover rounded-[40px] opacity-60"
              ></Image>

              <Image
                src="/Images/achievementbottom.png"
                alt="background element"
                height={200}
                width={200}
                className="hidden sm:block absolute bottom-0 left-0  opacity-70"
              ></Image>

              {/* mobile */}

              <Image
                src="/Images/achievementtop.png"
                alt="background element"
                height={100}
                width={100}
                className="block sm:hidden absolute top-0 right-0 object-cover rounded-[40px] opacity-60"
              ></Image>

              <Image
                src="/Images/achievementbottom.png"
                alt="background element"
                height={100}
                width={100}
                className="block sm:hidden absolute bottom-0 left-0  opacity-70"
              ></Image>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Achievements;
