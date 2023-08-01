import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useImperativeHandle,
} from 'react';
import { useSelector } from 'react-redux';

import { FaChevronLeft, FaChevronRight, FaMobile } from 'react-icons/fa';
import Image from 'next/image';

type Contact = {
  contactType: string;
  link: string;
};
const SocialMediaScroll: React.FC = () => {
  const userDetails = useSelector((state: any) => state.portfolio.userData);
  const [visibleIconCount, setVisibleIconCount] = useState(3);
  const data = userDetails.contact;
  const [clickedIndex, setClickedIndex] = useState(
    Math.floor(visibleIconCount / 2)
  );
  const [currentIndex, setCurrentIndex] = useState(
    Math.floor(visibleIconCount / 2)
  );
  const cardRefs = useRef(
    new Array(data?.length)
      .fill(null)
      .map(() => React.createRef<HTMLDivElement>())
  );

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

  const handleCardClick = (
    index: number,
    currentIndex: number,
    third: number
  ) => {
    // setCurrentIndex(currentIndex);
    setClickedIndex(index);
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      if (clickedIndex === visibleIconCount - 1)
        setClickedIndex((prevIndex) => prevIndex - 1);
      else setCurrentIndex((prevIndex) => prevIndex - 1);
    } else if (clickedIndex > 0) setClickedIndex((prevIndex) => prevIndex - 1);
  };

  const handleSwipterClick = (index: number) => {
    let cli = 0;
    if (index === 0) cli = 0;
    else if (index === data.length - 1) cli = 2;
    else cli = 1;
    setClickedIndex(cli);
    setCurrentIndex(index - cli);
  }

  const handleNext = () => {
    if (currentIndex < data.length - visibleIconCount) {
      if (clickedIndex === 0) setClickedIndex((prevIndex) => prevIndex + 1);
      else setCurrentIndex((prevIndex) => prevIndex + 1);
    } else {
      if (clickedIndex < data.length - visibleIconCount)
        setClickedIndex((prevIndex) => prevIndex + 1);
    }
  };

  const iconDisplay = (
    item: any,
    isSelected: any,
    itemColor: any
  ) => {
    let icon: any;
    switch (item) {
      case "Email": icon = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={isSelected ? '30' : '30'}
          height={isSelected ? '30' : '30'}
          viewBox="0 0 16 15"
        >
          <path
            fill={!isSelected ? '#ffdd9a' : itemColor || 'black'}
            d="M.5 2.5A1.5 1.5 0 0 1 2 1h12a1.5 1.5 0 0 1 1.5 1.5v1.208L8 7.926L.5 3.708V2.5Z"
          />
          <path
            fill={!isSelected ? '#ffdd9a' : itemColor || 'black'}
            d="M.5 4.855V12.5A1.5 1.5 0 0 0 2 14h12a1.5 1.5 0 0 0 1.5-1.5V4.855L8 9.074L.5 4.854Z"
          /></svg>
      ); break;
      case "Instagram": icon = (<svg
        xmlns="http://www.w3.org/2000/svg"
        width={isSelected ? '30' : '30'}
        height={isSelected ? '30' : '30'}
        viewBox="0 0 24 24"
      >
        <path
          fill={!isSelected ? '#ffdd9a' : itemColor || 'black'}
          fillRule="evenodd"
          d="M7.465 1.066C8.638 1.012 9.012 1 12 1c2.988 0 3.362.013 4.534.066c1.172.053 1.972.24 2.672.511c.733.277 1.398.71 1.948 1.27c.56.549.992 1.213 1.268 1.947c.272.7.458 1.5.512 2.67C22.988 8.639 23 9.013 23 12c0 2.988-.013 3.362-.066 4.535c-.053 1.17-.24 1.97-.512 2.67a5.396 5.396 0 0 1-1.268 1.949c-.55.56-1.215.992-1.948 1.268c-.7.272-1.5.458-2.67.512c-1.174.054-1.548.066-4.536.066c-2.988 0-3.362-.013-4.535-.066c-1.17-.053-1.97-.24-2.67-.512a5.397 5.397 0 0 1-1.949-1.268a5.392 5.392 0 0 1-1.269-1.948c-.271-.7-.457-1.5-.511-2.67C1.012 15.361 1 14.987 1 12c0-2.988.013-3.362.066-4.534c.053-1.172.24-1.972.511-2.672a5.396 5.396 0 0 1 1.27-1.948a5.392 5.392 0 0 1 1.947-1.269c.7-.271 1.5-.457 2.67-.511Zm8.98 1.98c-1.16-.053-1.508-.064-4.445-.064c-2.937 0-3.285.011-4.445.064c-1.073.049-1.655.228-2.043.379c-.513.2-.88.437-1.265.822a3.412 3.412 0 0 0-.822 1.265c-.151.388-.33.97-.379 2.043c-.053 1.16-.064 1.508-.064 4.445c0 2.937.011 3.285.064 4.445c.049 1.073.228 1.655.379 2.043c.176.477.457.91.822 1.265c.355.365.788.646 1.265.822c.388.151.97.33 2.043.379c1.16.053 1.507.064 4.445.064c2.938 0 3.285-.011 4.445-.064c1.073-.049 1.655-.228 2.043-.379c.513-.2.88-.437 1.265-.822c.365-.355.646-.788.822-1.265c.151-.388.33-.97.379-2.043c.053-1.16.064-1.508.064-4.445c0-2.937-.011-3.285-.064-4.445c-.049-1.073-.228-1.655-.379-2.043c-.2-.513-.437-.88-.822-1.265a3.413 3.413 0 0 0-1.265-.822c-.388-.151-.97-.33-2.043-.379Zm-5.85 12.345a3.669 3.669 0 0 0 4-5.986a3.67 3.67 0 1 0-4 5.986ZM8.002 8.002a5.654 5.654 0 1 1 7.996 7.996a5.654 5.654 0 0 1-7.996-7.996Zm10.906-.814a1.337 1.337 0 1 0-1.89-1.89a1.337 1.337 0 0 0 1.89 1.89Z"
          clipRule="evenodd"
        /></svg>); break;
      case "LinkedIn": icon = (<svg
        xmlns="http://www.w3.org/2000/svg"
        width={isSelected ? '30' : '30'}
        height={isSelected ? '30' : '30'}
        viewBox="0 0 24 24"
      >
        <path
          fill={!isSelected ? '#ffdd9a' : itemColor || 'black'}
          d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"
        /></svg>); break;
      case "Phone": icon = (<svg
        xmlns="http://www.w3.org/2000/svg"
        width={isSelected ? '30' : '30'}
        height={isSelected ? '30' : '30'}
        viewBox="0 0 32 32"
      >
        <path
          fill={!isSelected ? '#ffdd9a' : itemColor || 'black'}
          d="m20.33 21.48l2.24-2.24a2.19 2.19 0 0 1 2.34-.48l2.73 1.09a2.18 2.18 0 0 1 1.36 2v5A2.17 2.17 0 0 1 26.72 29C7.59 27.81 3.73 11.61 3 5.41A2.17 2.17 0 0 1 5.17 3H10a2.16 2.16 0 0 1 2 1.36l1.09 2.73a2.16 2.16 0 0 1-.47 2.34l-2.24 2.24s1.29 8.73 9.95 9.81Z"
        /></svg>); break;
      case "Address": icon = (<svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 30 30"
      >
        <path
          fill={!isSelected ? '#ffdd9a' : itemColor || 'black'}
          d="M14 2.25A9.75 9.75 0 0 1 23.75 12c0 4.12-2.895 8.61-8.61 13.518a1.75 1.75 0 0 1-2.283-.002l-.378-.328C7.017 20.408 4.25 16.028 4.25 12A9.75 9.75 0 0 1 14 2.25Zm0 6a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5Z"
        /></svg>); break;
      default: icon = (<></>); break;
    }
    return icon;
  };

  const iconAnchor = (
    index: number,
    item: any,
    itemLink: any,
    component: any
  ) => {
    let href = "";
    switch (item) {
      case "Email": href = "mailto:"+itemLink; break;
      case "Instagram": href = "http://www.instagram.com/"+itemLink; break;
      case "LinkedIn": href = "http://www.linkedin/in/"+itemLink; break;
      case "Phone": href = "tel:"+itemLink; break;
      case "Address": href = ""; break;
      default: break;
    }
    return (
      <a className="tabable m-1 flex flex-col items-center justify-center" href={href}
        key={index + currentIndex}
        role='listitem' target="_blank" rel="noreferrer" tabIndex={0}>
        {component}
      </a>
    );
  };

  return (
    <div
      className="relative group"
    >
      <div className="flex items-center justify-center">
        <button
          className="tabable flex items-center justify-center w-10 h-10 text-white transition-opacity duration-300 rounded-full sm:opacity-0  group-hover:opacity-100 no-border"
          onClick={handlePrev}
          disabled={clickedIndex === 0 && currentIndex === 0}
          tabIndex={0}
          aria-label="list-previous"
        >
          <FaChevronLeft color="#ffdd9a" />
          <span id="list-previous" className="sr-only">Previous</span>
        </button>
        <div className="flex  overflow-x-scroll timeline-container  no-scrollbar">
          <div className="flex justify-center"
            role="list"
            aria-label='list-heading'>
            <h1 id='list-heading' className='sr-only'>Social Media</h1>
            {data
              ?.slice(
                currentIndex >= data?.length - visibleIconCount
                  ? visibleIconCount - 1
                  : currentIndex,
                currentIndex + visibleIconCount
              )
              ?.map((item: Contact, index: number) => {
                const isSelected = index === clickedIndex;
                return (
                  iconAnchor(
                    index,
                    item.contactType,
                    item.link,
                    (<div
                      ref={cardRefs.current[index + currentIndex]}
                      className={`card p-[7px] btn-primary rounded-full shadow rounded-full transform bg-${!isSelected ? 'black' : '[#ffdd9a]'
                        } transition-all duration-300 cursor-pointer hover:shadow-md hover:bg-[#dadada]`}
                      style={{
                        transition: '1s all ease',
                      }}
                      onClick={() =>
                        handleCardClick(
                          index,
                          currentIndex,
                          index + currentIndex
                        )
                      }
                      role='link'
                    >
                      <div
                        className={`${isSelected ? 'text-2xl' : 'text-2xl'
                          } text-portfolioPrimaryText flex items-center justify-center font-semibold`}
                        style={{
                          width: isSelected ? '3rem' : '3rem',
                          height: isSelected ? '3rem' : '3rem',
                        }}
                        role='button'
                      >
                        {iconDisplay(
                          item.contactType,
                          isSelected,
                          'black'
                        )}
                      </div>
                    </div>))
                );
              })}
          </div>
        </div>
        <button
          className="tabable flex items-center justify-center w-10 h-10 text-white transition-opacity duration-300 rounded-full sm:opacity-0  group-hover:opacity-100"
          onClick={handleNext}
          disabled={
            currentIndex === data?.length - visibleIconCount &&
            clickedIndex === data?.length - visibleIconCount
          }
          tabIndex={0}
          aria-label="list-next"
        >
          <FaChevronRight color="#ffdd9a" />
          <span id="list-next" className="sr-only">Next</span>
        </button>
      </div>
      <div className="sample-slider swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal" style={{ top: "100%" }}>
        {data?.map((item: Contact, key: number) => <button onClick={() => handleSwipterClick(key)} tabIndex={0} className={`tabable swiper-pagination-bullet ${currentIndex + clickedIndex === key && "swiper-pagination-bullet-active"}`} key={key}></button>)}
      </div>
    </div>
  );
};

export default SocialMediaScroll;