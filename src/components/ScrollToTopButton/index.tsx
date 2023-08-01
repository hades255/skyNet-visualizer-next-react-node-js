import React, { useEffect, useState } from 'react';
import { FaArrowCircleUp, FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton: React.FC = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.pageYOffset >
        (window.innerHeight || document.documentElement.clientHeight)
      ) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className={`scroll-to-top z-50 bg-buttonPrimary rounded-full py-1 px-[10px] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
        showButton ? 'block' : 'hidden'
      }`}
      onClick={scrollToTop}
    >
      <FaArrowUp color="grey" size={20} />
    </button>
  );
};

export default ScrollToTopButton;
