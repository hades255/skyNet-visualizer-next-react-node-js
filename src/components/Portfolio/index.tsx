import React, { useState } from 'react';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
type PortfolioSliderProps = {
  layout?: string;
};
const PortfolioSlider: React.FC<PortfolioSliderProps> = ({ layout }) => {
  const userDetails = useSelector((state: any) => state.portfolio.userData);

  const [translateX, setTranslateX] = useState(0);
  const [pressCount, setPressCount] = useState(1);
  const cardsPerView = 3;

  const handlePrev = () => {
    if (pressCount !== 0) {
      setPressCount(pressCount - 1);
    }
    if (translateX < 0) {
      setTranslateX((prevTranslateX) => prevTranslateX + 970 + pressCount * 5);
    }
  };

  const handleNext = () => {
    const maxTranslateX =
      -(userDetails?.portfolio?.length - cardsPerView) * 970;
    setPressCount(pressCount + 1);
    console.log(pressCount);
    if (translateX > maxTranslateX) {
      setTranslateX((prevTranslateX) => prevTranslateX - 970 - pressCount * 5);
    }
  };

  const showPrevButton = translateX < 0;
  const showNextButton =
    translateX > -(userDetails?.portfolio?.length - cardsPerView) * 100;

  return (
    <div className="portfolio-slider-container no-scrollbar">
      {userDetails?.portfolio?.length > 3 && pressCount > 1 && (
        <button
          className="slider-button prev-button"
          onClick={handlePrev}
          disabled={pressCount === 0}
        >
          <FaAngleLeft size={50} />
        </button>
      )}
      <div className="slider-wrapper ">
        <div
          className="slider-track no-scrollbar m-10 items-center"
          style={{
            transform: `translateX(${translateX}px)`,
            scrollBehavior: 'smooth',
            gap: 8,
          }}
        >
          {userDetails?.portfolio?.map((item: any, index: number) => (
            <div key={index} className="slider-cardsss">
              <Image
                src="/Images/Profile.png"
                width={300}
                height={300}
                alt="image"
              />
              <div className="slider-card-header sm:text-xl uppercase text-left">
                TESTIMONIAL FROM <br></br>
                {item.header}
              </div>
              <p className="slider-card-description text-white truncate-multiline">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      {userDetails?.portfolio?.length > 3 &&
        Math.ceil(userDetails?.portfolio?.length / 3) > pressCount && (
          <button
            className="slider-button next-button"
            onClick={handleNext}
            disabled={
              pressCount > Math.floor(userDetails?.portfolio?.length / 3) * 2
            }
          >
            <FaAngleRight size={50} />
          </button>
        )}
    </div>
  );
};

export default PortfolioSlider;
