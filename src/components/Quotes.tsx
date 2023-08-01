import React from 'react';
import Image from 'next/image';
import { FaQuoteRight } from 'react-icons/fa';
import quotes from '../assets/theme2/quotes.svg';

type Props = {
  imageSrc: string;
  quote: string;
  authorName: string;
  layout?: string;
};

const Quotes: React.FC<Props> = ({ imageSrc, quote, authorName, layout }) => {
  const background = layout === '2' ? 'bg-[#082B33]' : 'bg-quotebg';

  return (
    <div
      className={`${background} px-24 flex justify-center items-center self-center w-4/5 sm:w-5/5 font-dmsans rounded-xl  p-5 sm:p-[90px] flex`}
      id="quote"
      data-testid="quotes-component"
    >
      <div className="hidden sm:flex" data-testid="quote-icon">
        {layout !== '2' ? (
          <FaQuoteRight color="#ffdd9a" size={100} />
        ) : (
          <Image
            src={quotes}
            alt="quote icon"
            className="hidden sm:block"
            width={200}
            height={200}
            key="1"
          ></Image>
        )}
      </div>

      <div className="flex sm:hidden" data-testid="quote-icon">
        {layout !== '2' ? (
          <FaQuoteRight color="#ffdd9a" size={30} />
        ) : (
          <Image
            src={quotes}
            alt="quote icon"
            className="hidden sm:block"
            width={200}
            height={200}
            key="1"
          ></Image>
        )}
      </div>
      <div className="w-4/5 flex flex-col justify-center  pl-5 sm:pl-10">
        <p
          className="text-[14px] leading-[20px] sm:text-3xl font-medium text-white leading-8"
          data-testid="quote-text"
        >
          {quote}
        </p>
        <p
          className="text-[10px] sm:text-2xl text-gray-500 mt-4"
          data-testid="quote-author"
        >
          -{authorName}
        </p>
      </div>
    </div>
  );
};

export default Quotes;
