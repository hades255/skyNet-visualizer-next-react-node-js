import React, { useState } from 'react';
import up from '../../../src/assets/dropdown/up.svg';
import down from '../../../src/assets/dropdown/down.svg';
import Image from 'next/image';

interface DropdownProps {
  options: string[];
  onSelect: (option: string) => void;
  selectedOption: string;
  className?: string;
  nativeIcon?: boolean;
}

const DropdownComponent: React.FC<DropdownProps> = ({
  options,
  onSelect,
  selectedOption,
  className,
  nativeIcon = true,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option: string) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full mt-1">
      <button
        type="button"
        className={`w-full py-2 px-4 text-lg font-medium bg-white border-gray-300 flex justify-between items-center focus:outline-none ${
          className ? className : 'rounded-lg border-2'
        }`}
        onClick={handleDropdownToggle}
      >
        <span>{selectedOption || 'Select an option'}</span>
        {nativeIcon && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 transition-transform ${
              isOpen ? 'transform rotate-180' : ''
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        )}
        {!nativeIcon &&
          (isOpen ? (
            <Image
              className="mx-2"
              src={up}
              width={30}
              height={30}
              alt="delete"
            />
          ) : (
            <Image
              className="mx-2"
              src={down}
              width={30}
              height={30}
              alt="delete"
            />
          ))}
      </button>
      {isOpen && (
        <ul className="z-1 absolute left-0 right-0 py-1 bg-white rounded-md shadow-lg">
          {options.map((option) => (
            <li
              key={option}
              className="px-4 py-2 cursor-pointer hover:bg-gray-200"
              onClick={() => handleOptionSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownComponent;
