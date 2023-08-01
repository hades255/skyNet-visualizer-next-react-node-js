import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Tile {
  number: string;
  details: string;
  height: number;
}

interface SliderProps {
  tiles: Tile[];
}

const CustomSlider: React.FC<SliderProps> = ({ tiles }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <Slider {...settings}>
      {tiles.map((tile, index) => (
        <div
          key={index}
          className="slider-card p-10 bg-black text-white flex flex-col justify-center items-center p-5 rounded-lg h-[200px]"
        >
          <h3 className="slider-card-title text-center text-yellow-100 text-4xl">
            {tile.number}
          </h3>
          <p className="slider-card-details text-center text-yellow-100">
            {tile.details}
          </p>
        </div>
      ))}
    </Slider>
  );
};

export default CustomSlider;
