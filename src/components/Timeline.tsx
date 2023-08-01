import React, { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import WorkJourney from './WorkJourney';
import downIcon from '../../src/assets/navigation/downIcon.svg';
import { yearSelection } from '../../redux/portfolioSlice';

const Timeline: React.FC = () => {
  const [display, setDisplay] = useState(false);

  const userDetails = useSelector((state: any) => state.portfolio.userData);
  const dispatch = useDispatch();

  const years = userDetails.experience; // Accessing the experience property of the first UserDetails object

  const yearList = years ? Object.keys(years).map(Number) : [];
  const data = yearList;
  const [indexValue, setIndexValue] = useState(2);

  const navButtonCheck = () => {
    if (data.length <= 3) {
      return false;
    } else {
      return true;
    }
  };

  const [currentIndex, setCurrentIndex] = useState(1);

  const cardRefs = useRef<Array<React.RefObject<HTMLDivElement>>>(
    new Array(data.length)
      .fill(null)
      .map(() => React.createRef<HTMLDivElement>())
  );
  const viewportRef = useRef<HTMLDivElement>(null);

  const scrollToMiddleCard = useCallback(() => {
    if (
      cardRefs.current[currentIndex] &&
      cardRefs.current[currentIndex].current
    ) {
      const options: ScrollToOptions = {
        top: 0,
        left:
          (cardRefs?.current[currentIndex]?.current?.offsetLeft || 0) -
          window.innerWidth / 2 +
          (cardRefs?.current[currentIndex]?.current?.clientWidth || 2) / 2,
        behavior: 'smooth',
      };
      document.querySelector('.timeline-container')?.scrollTo(options);
    }
  }, [currentIndex]);

  useEffect(() => {
    scrollToMiddleCard();
  }, [currentIndex, scrollToMiddleCard]);

  const handleCardClick = (index: number, year: number, indexV: number) => {
    setIndexValue(indexV);
    setCurrentIndex(index);
    console.log(indexValue);
    dispatch(yearSelection(+year));
    setDisplay(true);
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
      setIndexValue(1);
    }
    if (currentIndex === 0) {
      setIndexValue(0);
    }
    if (viewportRef.current) {
      viewportRef.current.scrollLeft -= viewportRef.current.offsetWidth;
    }
    console.log(currentIndex, indexValue);
  };

  const handleNext = () => {
    if (currentIndex < data.length - 2) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setIndexValue(1);
    }
    if (viewportRef.current) {
      viewportRef.current.scrollLeft += viewportRef.current.offsetWidth;
    }
    console.log(currentIndex, indexValue);
  };

  return (
    <div className="relative h-fit-content group font-dmsans block sm:hidden">
      {data.length > 3 && currentIndex > -1 && indexValue !== 0 && (
        <button
          className={`flex absolute top-[100px] sm:top-[200px] left-0 items-center justify-center z-50 w-10 h-10 text-white transition-opacity duration-300 rounded-full p-2 border pr-3 ml-3  border-portfolioPrimaryText bg-black ${
            navButtonCheck() ? 'opacity-100' : ''
          }`}
          onClick={handlePrev}
          disabled={currentIndex < 0}
        >
          {/* <FaAngleLeft color="#c99a40" size={50} /> */}

          <Image
            src="/images/previous.png"
            alt="prev button"
            width={50}
            height={50}
          ></Image>
        </button>
      )}

      {data.length > 3 && currentIndex < data.length - 2 && (
        <button
          className={`flex items-center absolute top-[100px] sm:top-[200px] right-0  z-50   justify-center w-10 h-10 text-white transition-opacity duration-300 rounded-full p-2 border pl-3 mr-3  bg-black border-portfolioPrimaryText ${
            navButtonCheck() ? 'opacity-100' : ''
          }`}
          onClick={handleNext}
          disabled={currentIndex === data.length}
        >
          <Image
            src="/images/next.png"
            alt="prev button"
            width={50}
            height={50}
          ></Image>
          {/* <FaAngleRight color="#c99a40" size={40} /> */}
        </button>
      )}
      <div className="flex items-center  justify-center h-full " id="timeline">
        <div
          className={
            'flex w-full overflow-x-scroll timeline-container no-scrollbar '
          }
          ref={viewportRef}
        >
          <div className="flex items-center justify-center w-fit-content flex-grow space-x-2">
            {data.slice(currentIndex, currentIndex + 5).map((year, index) => {
              const isSelected = index === indexValue; // Always select the middle card
              return (
                <div
                  className="flex flex-col items-center rounded-lg justify-center h-[250px] sm:h-[28rem]"
                  key={year}
                  tabIndex={1}
                >
                  {/* <div
                    ref={cardRefs.current[index + currentIndex]}
                    className={`card hidden sm:block p-6 bg-${
                      isSelected ? 'portfolioPrimaryText' : 'black'
                    } shadow rounded-lg mx-1 transform transition-all duration-300 cursor-pointer ${
                      isSelected ? 'scale-100 text-7xl' : ''
                    } ${isSelected ? 'shadow-c99a40' : ''}`}
                    style={{
                      width: isSelected ? '15rem' : '14rem',
                      height: isSelected ? '15rem' : '14rem',
                      // minWidth: isSelected ? '9rem' : '7rem',
                      // minHeight: isSelected ? '9rem' : '7rem',
                      background: isSelected ? '#c99a40' : 'black',
                      marginLeft: index === 0 ? '0' : '2rem',
                      marginRight: index === 2 ? '0' : '1rem',
                      transition: '1s all ease',
                    }}
                    onClick={() => handleCardClick(currentIndex, year, index)}
                  >
                    <div
                      className={`${isSelected ? 'text-7xl' : 'text-4xl'} ${
                        isSelected ? 'black' : 'text-portfolioPrimaryText'
                      } flex items-center justify-center h-full font-semibold`}
                    >
                      {year}
                    </div>
                  </div> */}

                  {/* small screens */}
                  <div
                    ref={cardRefs.current[index + currentIndex]}
                    className={`card block sm:hidden p-6 bg-${
                      isSelected ? 'portfolioPrimaryText' : 'black'
                    } shadow rounded-lg mx-2 transform transition-all duration-300 cursor-pointer ${
                      isSelected ? 'scale-110 text-7xl' : 'scale-90'
                    } ${isSelected ? 'shadow-sm-c99a40' : ''}`}
                    style={{
                      // width: isSelected ? '18rem' : '14rem',
                      // height: isSelected ? '18rem' : '14rem',
                      minWidth: isSelected ? '2rem' : '2rem',
                      minHeight: isSelected ? '2rem' : '2rem',
                      background: isSelected ? '#c99a40' : 'black',
                      marginLeft: index === 0 ? '0' : '5px',
                      marginRight: index === 2 ? '0' : '5px',
                      transition: '1s all ease',
                    }}
                    onClick={() =>
                      handleCardClick(index + currentIndex, year, index)
                    }
                  >
                    <div
                      className={`${isSelected ? 'text-2xl' : 'text-xl'} ${
                        isSelected ? 'black' : 'text-portfolioPrimaryText'
                      } flex items-center justify-center h-full font-semibold`}
                    >
                      {year}
                    </div>
                  </div>
                  {isSelected && display && (
                    <div
                      className={`my-12 mt-[20px] sm:mt-[100px] ${
                        indexValue === 0 && 'ml-[-10%]'
                      }  ${indexValue === 2 && 'ml-[10%]'}`}
                    >
                      <Image
                        tabIndex={1}
                        src={downIcon}
                        alt="move down"
                        className="hidden sm:block"
                        height="60"
                        width="60"
                      />

                      <Image
                        tabIndex={1}
                        className="block sm:hidden"
                        src={downIcon}
                        alt="move down"
                        height="30"
                        width="30"
                      />
                    </div>
                  )}
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
      >
        <div className="w-full text-center text-white text-2xl sm:text-3xl">
          WORK JOURNEY
        </div>
        <WorkJourney />
      </div>
    </div>
  );
};

export default Timeline;
