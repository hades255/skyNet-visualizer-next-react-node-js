import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import { useSelector } from 'react-redux';

const PortfolioMobile = () => {
  const userDetails = useSelector((state: any) => state.portfolio.userData);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    // variableWidth: true,
    // adaptiveHeight: true,
  };

  return (
    <Slider {...settings}>
      {userDetails.portfolio?.map((item: any, index: number) => (
        <div
          key={index}
          className="w-full  mt-5 flex flex-col mr-[5px] items-center p-5 bg-black/50 rounded-lg"
        >
          <div className="flex w-full items-center justify-center">
            <Image
              className="rounded-lg w-[100px]  h-[100px]"
              src="/Images/Profile.png"
              width={300}
              height={300}
              alt="image"
            />
          </div>
          <h3 className="font-semibold text-center text-[14px] mb-4 text-yellow-100">
            {item.header}
          </h3>
          <div className="text-cente text-white p-5">{item.description}</div>
        </div>
      ))}
    </Slider>
  );
};

export default PortfolioMobile;
