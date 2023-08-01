import React, { useState, useRef, useEffect, useCallback } from 'react';
import { FaLink } from 'react-icons/fa';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { workCardSelection } from '../../../redux/portfolioSlice';
import Roles from '../Roles';
import Achievements from '../Achievements';

type AdditionalLink = {
  url: string;
};

const WorkJourney2: React.FC = () => {
  const dispatch = useDispatch();
  const [display, setDisplay] = useState(false);
  const [translateX, setTranslateX] = useState(0);
  const cardsPerView = 3;
  const userDetails = useSelector((state: any) => state.portfolio.userData);
  const year = useSelector((state: any) => state.portfolio.yearSelected);
  const data = userDetails?.experience?.[year] || [];
  const [currentIndex, setCurrentIndex] = useState(1);
  const [indexValue, setIndexValue] = useState(1);
  const [details, setDetails] = useState(data);

  const linearGrad =
    "linear-gradient(to right,rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('/Images/bg.jpg')";
  const cardRefs = useRef(
    new Array(data?.length)
      .fill(null)
      .map(() => React.createRef<HTMLDivElement>())
  );

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
  };

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
    <div className="relative h-fit-content group font-dmsans mt-5">
      {data.length > 3 && indexValue > 0 && (
        <button
          className={`flex items-center ml-2 bg-gray-500 absolute top-6 top-60  left-0  justify-center z-50 w-10 h-10  transition-opacity duration-300 rounded-full opacity-0 border-portfolioPrimaryText no-border ${
            navButtonCheck() ? 'opacity-100' : ''
          }`}
          onClick={handlePrev}
          disabled={indexValue < 0}
          style={{ border: 'none' }}
        >
          <svg
            className="m-2"
            xmlns="http://www.w3.org/2000/svg"
            width="1024"
            height="1024"
            viewBox="0 0 1024 1024"
          >
            <path
              fill="#031318"
              d="M685.248 104.704a64 64 0 0 1 0 90.496L368.448 512l316.8 316.8a64 64 0 0 1-90.496 90.496L232.704 557.248a64 64 0 0 1 0-90.496l362.048-362.048a64 64 0 0 1 90.496 0z"
            />
          </svg>
        </button>
      )}

      {data.length > 3 && indexValue < data.length - 1 && (
        <button
          className={`flex bg-gray-500 mr-2 absolute top-60   right-0 z-50 items-center justify-center w-10 h-10 text-white transition-opacity duration-300 rounded-full opacity-0 border-portfolioPrimaryText no-border ${
            navButtonCheck() ? 'opacity-100' : ''
          }`}
          onClick={handleNext}
          disabled={indexValue === data.length - 1}
          style={{ border: 'none' }}
        >
          <svg
            className="m-2"
            xmlns="http://www.w3.org/2000/svg"
            width="1024"
            height="1024"
            viewBox="0 0 1024 1024"
          >
            <path
              fill="#031318"
              d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8l-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z"
            />
          </svg>
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
                  className="flex flex-col items-center justify-center h-[477px] w-[365px] sm:h-[28rem] mb-[40px]"
                  key={index}
                  tabIndex={8}
                >
                  <div
                    ref={cardRefs.current[index]}
                    className={`card hidden sm:block p-6 py-[50px] px-[30px]
                     shadow  mx-2 transform transition-all duration-300 cursor-pointer ${
                       isSelected ? 'scale-95 text-7xl' : 'scale-95'
                     } ${isSelected ? '' : 'shadow-grey '} ${
                      isSelected ? '' : 'bg-white'
                    }`}
                    style={{
                      width: 'inherit',
                      height: 'inherit',
                      marginLeft: index === 0 ? '0' : '10px',
                      marginRight: index === data.length - 1 ? '0' : '10px',
                      transition: '2s all ease-in',
                      backgroundImage: isSelected ? linearGrad : 'none',
                      animation: isSelected ? 'backgroundFade 1s ease' : '',
                    }}
                    onClick={() => handleCardClick(currentIndex, index, item)}
                  >
                    <div
                      className={` flex flex-col justify-between  ${
                        isSelected ? 'text-2xl' : 'text-xl'
                      } flex  h-full `}
                    >
                      <div
                        className={`${
                          isSelected ? 'text-white' : 'text-black'
                        }`}
                      >
                        <div className="text-[#8c8c8c] text-xl">
                          Work Experience
                        </div>
                        <div className="text-4xl min-h-[150px] max-h-[150px]  flex items-center overflow-hidden  my-5 font-bold leading-snug truncate-multiline">
                          {item.type}
                        </div>
                        <div
                          className={`${
                            isSelected ? 'bg-white' : 'bg-black'
                          } w-full h-2 rounded-full`}
                        ></div>
                        <div className="mt-4">{item.role}</div>
                      </div>
                      <div
                        className={`${
                          isSelected ? 'text-white' : 'text-black'
                        } text-[#8c8c8c] text-[18px]`}
                      >
                        {item.date}
                      </div>
                    </div>
                  </div>

                  {/* small screen */}

                  <div
                    ref={cardRefs.current[index]}
                    className={`card block sm:hidden py-[25px] px-[15px] shadow rounded-lg mx-2 transform transition-all duration-300 cursor-pointer ${
                      isSelected ? 'scale-95 text-7xl' : 'scale-95'
                    } ${isSelected ? '' : 'shadow-grey'} ${
                      isSelected ? '' : 'bg-white'
                    }`}
                    style={{
                      width: '100px',
                      height: '100px',
                      background: 'black',
                      marginLeft: index === 0 ? '0' : '5px',
                      marginRight: index === data.length - 1 ? '0' : '5px',
                      transition: '1s all ease',
                      backgroundImage: isSelected ? linearGrad : '',
                    }}
                    onClick={() => handleCardClick(index, index, item)}
                  >
                    <div
                      className={`p-2 flex flex-col justify-between ${
                        isSelected ? 'text-[14px]' : 'text-[12px]'
                      }  ${isSelected ? 'text-white' : 'text-black'} `}
                    >
                      <div
                        className={`${
                          isSelected ? 'text-white' : 'text-black'
                        }`}
                      >
                        <div className="text-[#8c8c8c] text-[18px]">
                          Work Experience
                        </div>

                        <div className="text-4xl min-h-[150px] max-h-[150px]  flex items-center overflow-hidden  my-5 font-bold leading-snug truncate-multiline">
                          {item.type}
                        </div>

                        <div
                          className={`${
                            isSelected ? 'bg-white' : 'bg-black'
                          } w-full h-2 rounded-full`}
                        ></div>

                        <div className="text-center mt-[10px]">{item.role}</div>
                      </div>

                      <div
                        className={`${
                          isSelected ? 'text-white' : 'text-black'
                        } text-[#8c8c8c] text-[18px]`}
                      >
                        {item.date}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* work decription section */}

      <div
        style={{
          display: display ? 'block' : 'none',
        }}
        className="details text-white bg-[#D6D8DA] bg-red flex flex-col p-5 w-full items-center"
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
          <span className="text-6xl">{details?.role}</span>
        </div>

        {/* small screen display of the logo and role */}
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
          <div className="my-5 hidden pl-[10%] sm:block text-left">
            {details?.date}
          </div>

          <div id="role">
            <Roles items={details?.responsibility} />
          </div>

          <div className="mt-[100px] mb-[100px]">
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
            {' '}
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

export default WorkJourney2;
