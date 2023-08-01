import React, { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import WorkJourney from './WorkJourney';
import downIcon from '../../src/assets/navigation/downIcon.svg';
import { yearSelection } from '../../redux/portfolioSlice';

const TimelineMobile: React.FC = () => {
  const [display, setDisplay] = useState(false);
  const userDetails = useSelector((state: any) => state.portfolio.userData);
  const dispatch = useDispatch();

  const years = userDetails.experience; // Accessing the experience property of the first UserDetails object

  const yearList = years ? Object.keys(years).map(Number) : [];
  const data = yearList;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [indexValue, setIndexValue] = useState(1);

  const [translateX, setTranslateX] = useState(0);
  const cardsPerView = 3;

  const navButtonCheck = () => {
    if (data.length <= 3) {
      return false;
    } else {
      return true;
    }
  };

  const cardClick = (index: number, year: number) => {
    setIndexValue(index);
    dispatch(yearSelection(+year));
    setDisplay(true);
  };

  const handlePrev = () => {
    setIndexValue(indexValue - 1);

    if (translateX < 0) {
      setTranslateX((prevTranslateX) => prevTranslateX + 20);
    }
    if (indexValue === 1) {
      setTranslateX((prevTranslateX) => prevTranslateX + 20);
    }
    console.log(currentIndex, indexValue);
  };

  const handleNext = () => {
    const maxTranslateX = -(data.length - cardsPerView) * 20;
    setIndexValue(indexValue + 1);

    if (translateX > maxTranslateX) {
      setTranslateX((prevTranslateX) => prevTranslateX - 20);
    }
    if (indexValue === data.length - 2) {
      setTranslateX((prevTranslateX) => prevTranslateX - 20);
    }

    console.log(currentIndex, indexValue);
  };

  return (
    <div className="relative font-dmsans min-h-[300px]  no-scrollbar group font-dmsans flex-col w-full">
      {data.length > 3 && indexValue > 0 && (
        <button
          className={` absolute top-[160px]  left-0 items-center justify-center z-50 sm:w-10 sm:h-10 text-white transition-opacity duration-300 rounded-full p-2 border pr-3 ml-3  border-portfolioPrimaryText bg-black ${
            navButtonCheck() ? 'opacity-100' : ''
          }`}
          onClick={handlePrev}
          disabled={indexValue === 0}
        >
          <Image
            src="/images/previous.png"
            alt="prev button"
            className="block sm:hidden"
            width={10}
            height={10}
          ></Image>
        </button>
      )}

      {data.length > 3 && indexValue < data.length - 1 && (
        <button
          className={` items-center absolute top-[160px]  right-0  z-50   justify-center sm:w-10 sm:h-10 text-white transition-opacity duration-300 rounded-full p-2 pl-3  border sm:pl-3 mr-3  bg-black border-portfolioPrimaryText ${
            navButtonCheck() ? 'opacity-100' : ''
          }`}
          onClick={handleNext}
          disabled={indexValue === data.length - 1}
        >
          <Image
            src="/images/next.png"
            alt="prev button"
            className="block sm:hidden"
            width={10}
            height={10}
          ></Image>
          {/* <FaAngleRight color="#c99a40" size={40} /> */}
        </button>
      )}

      <div className="slider-wrapper portfolio-slider-container">
        <div
          className="slider-track no-scrollbar h-[350px]  items-center flex w-full justify-center"
          style={{ transform: `translateX(${translateX}%)` }}
        >
          {/* small screens */}

          <div className="flex  sm:hidden  overflow-hidden h-[200px] items-center pr-[50px] pl-[50px]">
            {data.map((year, index) => {
              const isSelected = index === indexValue;
              return (
                <div
                  className={` font-dmsans flex text-black 
                          items-center rounded-lg justify-center timeline-card
                          ${isSelected ? 'shadow-sm-c99a40' : ''}  ${
                    isSelected ? 'text-2xl' : ''
                  }
                        
                          
                          `}
                  style={{
                    width: isSelected ? '6rem' : '5em',
                    height: isSelected ? '6rem' : '5rem',

                    background: isSelected ? '#ffdd9a' : 'black',
                    color: !isSelected ? '#ffdd9a' : 'black',
                    marginLeft: index === 0 ? '0' : '5px',
                    marginRight: index === 2 ? '0' : '5px',
                    transition: '1s all ease',
                  }}
                  onClick={() => cardClick(index, year)}
                  key={year}
                >
                  {year}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div
        style={{
          display: display ? 'block' : 'none',
        }}
        className="w-[100%]"
      >
        <div className="w-full text-center text-white text-2xl sm:text-3xl">
          WORK JOURNEY
        </div>
        <WorkJourney />
      </div>
    </div>
  );
};

export default TimelineMobile;
