import React, { useState, useRef, useEffect, useCallback } from 'react';
import { FaAngleLeft, FaAngleRight, FaLink, FaMicrosoft } from 'react-icons/fa';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { workCardSelection } from '../../../redux/portfolioSlice';
import Roles from '../Roles';
import Achievements from '../Achievements';

type AdditionalLink = {
  url: string;
};

type WorkJourneyProps = {
  layout?: string;
};

const WorkJourney: React.FC<WorkJourneyProps> = ({ layout }) => {
  const dispatch = useDispatch();
  const workDetailSectionRef = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(false);
  const [translateX, setTranslateX] = useState(0);
  const cardsPerView = 3;
  const userDetails = useSelector((state: any) => state.portfolio.userData);
  const year = useSelector((state: any) => state.portfolio.yearSelected);
  const data = userDetails?.experience?.[year] || [];
  const [currentIndex, setCurrentIndex] = useState(1);
  const [indexValue, setIndexValue] = useState(1);
  const [details, setDetails] = useState(data);

  const background = layout === '2' ? 'bg-[#D6D8DA]' : '';
  const textLayout2 = layout === '2' ? 'text-[#6C6C6C]' : '';
  const cardRefs = useRef(
    new Array(data?.length)
      .fill(null)
      .map(() => React.createRef<HTMLDivElement>())
  );

  const viewportRef = useRef<HTMLDivElement>(null);

  const navButtonCheck = () => {
    if (data.length <= 3) {
      return false;
    } else {
      return true;
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Change here
      if (e.keyCode === 37 || e.keyCode === 39) {
        e.preventDefault();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []); // Don't forget to add dependency array if necessary

  const handleCardClick = (indexV: number, index: number, item: any) => {
    setIndexValue(index);

    setCurrentIndex(indexV);

    setDetails(item);

    dispatch(workCardSelection(item));
    setDisplay(true);
    workDetailSectionRef?.current?.scrollIntoView({ behavior: 'smooth' });
  };
  useEffect(() => {
    if (workDetailSectionRef.current && display) {
      workDetailSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [display]);

  const handlePrev = () => {
    setIndexValue((prevIndex) => prevIndex - 1);

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
    setIndexValue((prevIndex) => prevIndex + 1);

    if (indexValue % 2 === 0) {
      if (translateX > maxTranslateX) {
        setTranslateX((prevTranslateX) => prevTranslateX - 20);
      }
    }

    console.log(currentIndex, indexValue);
  };

  return (
    <div
      className="relative h-fit-content group font-dmsans mt-5"
      data-testid="work-journey-component"
    >
      {data.length > 3 && indexValue > 0 && (
        <button
          className={`flex items-center absolute top-[80px] sm:top-[220px]  left-0  justify-center z-50 w-10 h-10 text-white transition-opacity duration-300 rounded-full opacity-0 border-portfolioPrimaryText no-border ${
            navButtonCheck() ? 'opacity-100' : ''
          }`}
          onClick={handlePrev}
          disabled={indexValue < 0}
          style={{ border: 'none' }}
          data-testid="prev-button"
        >
          <Image
            src="/images/previous.png"
            alt="prev button"
            width={20}
            height={20}
            key="1"
          ></Image>
        </button>
      )}

      {data.length > 3 && indexValue < data.length - 1 && (
        <button
          className={`flex absolute top-[80px] sm:top-[220px]  right-0 z-50 items-center justify-center w-10 h-10 text-white transition-opacity duration-300 rounded-full opacity-0 border-portfolioPrimaryText no-border ${
            navButtonCheck() ? 'opacity-100' : ''
          }`}
          onClick={handleNext}
          disabled={indexValue === data.length - 1}
          style={{ border: 'none' }}
          data-testid="next-button"
        >
          <Image
            src="/images/next.png"
            alt="next button"
            width={20}
            height={20}
          ></Image>
        </button>
      )}

      <div className="flex items-center justify-center h-full ">
        <div className="flex  w-full overflow-x-scroll timeline-container no-scrollbar">
          <div
            className="flex slider-track items-center justify-center flex-grow space-x-1"
            style={{ transform: `translateX(${translateX}%)` }}
          >
            {data.map((item: any, index: number) => {
              const isSelected = index === indexValue;
              return (
                <div
                  className="flex flex-col items-center justify-center h-[200px] sm:h-[28rem]"
                  key={index}
                  tabIndex={8}
                  data-testid={`work-card-${index}`}
                >
                  <div
                    ref={cardRefs.current[index]}
                    className={`card hidden sm:block p-6 bg-${
                      isSelected ? 'portfolioPrimaryText' : 'black'
                    } shadow rounded-lg mx-2 transform transition-all duration-300 cursor-pointer ${
                      isSelected ? 'scale-100 text-7xl' : 'scale-90'
                    } ${isSelected ? 'shadow-c99a40 shadow-xl' : ''} `}
                    style={{
                      width: '15rem',
                      height: '15rem',
                      background: 'black',
                      marginLeft: index === 0 ? '0' : '10px',
                      marginRight: index === data.length - 1 ? '0' : '10px',
                      transition: '1s all ease',
                    }}
                    onClick={() => handleCardClick(currentIndex, index, item)}
                  >
                    <div
                      className={` flex flex-col text-center ${
                        isSelected ? 'text-2xl' : 'text-xl'
                      }  text-portfolioPrimaryText flex items-center justify-center h-full font-semibold`}
                      data-testid={`work-card-role-${index}`}
                    >
                      <Image
                        src={item.image}
                        alt="image"
                        height={100}
                        width={100}
                      ></Image>
                      {item.role}
                    </div>
                  </div>

                  <div
                    ref={cardRefs.current[index]}
                    className={`card block sm:hidden p-6 bg-${
                      isSelected ? 'portfolioPrimaryText' : 'black'
                    } shadow rounded-lg mx-2 transform transition-all duration-300 cursor-pointer ${
                      isSelected ? 'scale-100 text-7xl' : 'scale-90'
                    } ${isSelected ? 'shadow-sm-c99a40 shadow-xl' : ''} `}
                    style={{
                      width: '100px',
                      height: '100px',
                      background: 'black',
                      marginLeft: index === 0 ? '0' : '5px',
                      marginRight: index === data.length - 1 ? '0' : '5px',
                      transition: '1s all ease',
                    }}
                    onClick={() => handleCardClick(index, index, item)}
                    data-testid={`work-card-role-small-${index}`}
                  >
                    <div
                      className={`p-2 flex flex-col text-center ${
                        isSelected ? 'text-[14px]' : 'text-[12px]'
                      }  text-portfolioPrimaryText flex items-center justify-center h-full font-semibold`}
                    >
                      <Image
                        src={item.image}
                        alt="image"
                        height={50}
                        width={50}
                        className="mb-1"
                      ></Image>
                      {item.role}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div
        ref={workDetailSectionRef}
        style={{ display: display ? 'block' : 'none' }}
        className={` ${background} details text-white bg-red flex flex-col p-5 w-full items-center`}
        data-testid="work-details-section"
      >
        <div className="hidden sm:flex pl-[10%]  ml-10 items-center text-left w-[80%] ">
          <span className="mr-5">
            <Image
              src={details?.image}
              alt="logo"
              height={100}
              width={100}
            ></Image>
          </span>
          <span className={`${textLayout2} text-6xl`}>{details?.role}</span>
        </div>

        <div className="flex sm:hidden  justify-start ml-10 items-center text-left w-full">
          <span className="mr-5">
            <Image
              src={details?.image}
              alt="logo"
              height={60}
              width={60}
            ></Image>
          </span>
          <span className="text-xl sm:text-3xl">{details?.role}</span>
        </div>

        <div></div>

        <div className="pl-0 sm:pl-10 w-full s flex flex-col  justify-center">
          <div
            className="my-5 hidden pl-[10%] sm:block text-left"
            data-testid="work-details-date"
          >
            {details?.date}
          </div>

          <div id="role">
            <Roles items={details?.responsibility} />
          </div>

          <div
            className="mt-[100px] mb-[100px]"
            data-testid="work-achievements"
          >
            {details?.achievement?.length > 0 && (
              <Achievements items={details?.achievement} />
            )}
          </div>

          <div className="w-full flex  justify-center">
            <div className="bg-black/50  w-full sm:w-4/5 mt-10 p-[20px] sm:p-[100px] rounded-lg flex items-center">
              <span className="mr-5 hidden sm:block">
                <Image
                  src={details?.image}
                  alt="Logo"
                  height={240}
                  width={240}
                ></Image>
              </span>

              <span className="mr-5 block sm:hidden">
                <Image
                  src={details?.image}
                  alt="Logo"
                  height={60}
                  width={60}
                ></Image>
              </span>

              <div>
                <div className="bold sm:text-4xl">{details?.role}</div>

                <div>Date of collection: {details?.date}</div>
              </div>
            </div>
          </div>

          <div className="text-portfolioPrimaryText text-center mt-10 underline">
            Additional Link
          </div>

          <div className="flex w-full flex-wrap  items-center justify-center">
            {details?.additionalLinks?.map(
              (item: AdditionalLink, index: number) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="bg-black p-5 mt-3 mr-5 rounded-lg">
                    <a
                      className="bg-black rounded-lg no-underline"
                      href={item.url}
                    >
                      <FaLink color="#ffdd9a" size={80} />
                    </a>
                  </div>

                  <div className="text-center">
                    <a className=" rounded-lg no-underline" href={item.url}>
                      {item.url.replace(/^(.{0,15}).*/, '$1...')}
                    </a>
                  </div>
                </div>
              )
            )}
          </div>

          <div className="hidden sm:block w-full text-right cursor-pointer mr-[90px] mb-[40px] text-portfolioPrimaryText underline">
            <a href="#role">Go Up A Level</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkJourney;
