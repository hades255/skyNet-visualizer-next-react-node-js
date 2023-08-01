import React, { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import WorkJourney from './WorkJourney';
import downIcon from '../../src/assets/navigation/downIcon.svg';
import downIconTimeline from '../assets/theme2/downIconTimeline.svg';
import { yearSelection } from '../../redux/portfolioSlice';
import WorkJourney2 from './WorkJourney2';

interface Timeline2Props {
  layout?: string | undefined;
}

const Timeline2: React.FC<Timeline2Props> = ({ layout }) => {
  const [display, setDisplay] = useState(false);
  const workSectionRef = useRef<HTMLDivElement>(null);
  const userDetails = useSelector((state: any) => state.portfolio.userData);
  const dispatch = useDispatch();
  const years = userDetails.experience;
  const yearList = years ? Object.keys(years).map(Number) : [];
  const data = yearList;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [indexValue, setIndexValue] = useState(1);
  const [translateX, setTranslateX] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const cardsPerView = 3;

  const timelineItemSelected =
    layout === '2'
      ? 'bg-[#43586887]'
      : 'shadow-c99a40 bg-portfolioPrimaryText text-black';

  const timelineItemUnSelected =
    layout === '2'
      ? 'bg-white'
      : 'text---color-skill-color-theme bg-black text-portfolioPrimaryText';

  const navButtonCheck = () => {
    if (data.length <= 3) {
      return false;
    } else {
      return true;
    }
  };

  const cardClick = (index: number, year: number) => {
    setIndexValue(index);
    console.log(indexValue);
    dispatch(yearSelection(data[indexValue]));
    setDisplay(true);
    cardRef.current?.scrollTo({ left: 60, behavior: 'smooth' });
    console.log('Valled');
    // Scroll to the component and bring it into focus
    workSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePrev = () => {
    setIndexValue((prevIndex) => prevIndex - 1);
    dispatch(yearSelection(data[indexValue]));

    if (translateX < 0) {
      setTranslateX((prevTranslateX) => prevTranslateX + 20);
    }
    if (indexValue === 1) {
      setTranslateX((prevTranslateX) => prevTranslateX + 20);
    }
  };

  const handleNext = () => {
    const maxTranslateX = -(data.length - cardsPerView) * 20;
    setIndexValue((prevIndex) => prevIndex + 1);

    if (indexValue % 3 === 0) {
      if (translateX > maxTranslateX) {
        setTranslateX((prevTranslateX) => prevTranslateX - 20);
      }
    }
    dispatch(yearSelection(data[indexValue]));
  };

  useEffect(() => {
    if (workSectionRef.current && display) {
      workSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [display]);

  return (
    <div
      className="relative font-dmsans min-h-[300px] portfolio-slider-container no-scrollbar group font-dmsans flex-col w-full"
      data-testid="timeline2-component"
    >
      <div className={`${layout === '2' ? 'bg-[#76808CB5] w-full' : ''}`}>
        <div className={`${layout === '2' ? 'max-w-7xl mx-auto' : ''}`}>
          {data.length > 4 && indexValue > -1 && indexValue !== 0 && (
            <button
              className={` absolute top-[220px]  left-0 items-center justify-center z-50  text-white transition-opacity duration-300 rounded-full p-2 pr-3 border  ml-3  border-portfolioPrimaryText bg-black ${
                navButtonCheck() ? 'opacity-100' : ''
              }`}
              onClick={handlePrev}
              disabled={indexValue < 0}
              key="1"
              data-testid="prev-button"
            >
              {/* <FaAngleLeft color="#c99a40" size={50} /> */}
              <Image
                src="/images/previous.png"
                alt="prev button"
                className="hidden sm:block"
                width={20}
                height={20}
                key="1"
              ></Image>
            </button>
          )}

          {data.length > 4 && indexValue < data.length - 1 && (
            <button
              className={` items-center absolute top-[220px] right-0  z-50   justify-center  text-white transition-opacity duration-300 rounded-full p-2 border pl-3 mr-3  bg-black border-portfolioPrimaryText ${
                navButtonCheck() ? 'opacity-100' : ''
              }`}
              onClick={handleNext}
              disabled={indexValue === data.length - 1}
              data-testid="next-button"
            >
              <Image
                src="/images/next.png"
                alt="next button"
                className="hidden sm:block"
                width={20}
                height={20}
              ></Image>
            </button>
          )}

          <div className="slider-wrapper">
            <div
              ref={cardRef}
              className="slider-track  no-scrollbar h-[400px] m-10 mt-0 flex w-full justify-center pr-[50px] pt-[70px] "
              style={{ transform: `translateX(${translateX}%)` }}
            >
              {/* big screens */}
              {data.map((year, index) => {
                const isSelected = index === indexValue;
                return (
                  <div
                    key={index}
                    style={{ cursor: 'pointer' }}
                    data-testid={`timeline-card-${index}`}
                  >
                    <div
                      ref={cardRef}
                      className={`transition-all duration-1000 ease-linear hidden sm:flex font-dmsans flex-col text-black 
                          items-center rounded-lg justify-center timeline-card
                          ${
                            isSelected
                              ? `scale-110 text-7xl ${timelineItemSelected}`
                              : `scale-90 text-3xl ${timelineItemUnSelected}`
                          }  ${index === 0 ? 'ml-0' : 'ml-2'} ${
                        index === 0 ? 'mr-0' : 'mr-2'
                      }
                          `}
                      style={{
                        width: isSelected ? '15rem' : '14rem',
                        height: isSelected ? '15rem' : '14rem',
                        // minWidth: isSelected ? '9rem' : '7rem',
                        // minHeight: isSelected ? '9rem' : '7rem',
                      }}
                      onClick={() => cardClick(index, year)}
                    >
                      {year}
                    </div>

                    {isSelected && display && (
                      <div
                        className={
                          'flex items-center justify-center'
                        }
                      >
                        <svg
                          className="hidden sm:block"
                          xmlns="http://www.w3.org/2000/svg"
                          width="50"
                          height="60"
                          viewBox="0 0 1024 1024"
                        >
                          <path
                            fill="grey"
                            d="M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8l316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496z"
                          />
                        </svg>

                        <svg
                          className="block sm:hidden"
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          viewBox="0 0 1024 1024"
                        >
                          <path
                            fill="grey"
                            d="M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8l316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496z"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: display ? 'block' : 'none',
        }}
        className={`w-[100%] ${layout === '2' ? 'bg-white' : ''}`}
        data-testid="work-journey-section"
      >
        <div
          ref={workSectionRef}
          className="w-full text-center text-white text-2xl sm:text-3xl"
        >
          WORK JOURNEY
        </div>

        {layout === '2' ? <WorkJourney2 /> : <WorkJourney />}
      </div>
    </div>
  );
};

export default Timeline2;
