import React from 'react';
import Image from 'next/image';

type ModalProps = {
  imageComponent: JSX.Element;
  buttonText1: string;
  buttonText2: string;
  info: string;
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({
  imageComponent,
  buttonText1,
  buttonText2,
  info,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-20"></div>
      <div className="relative bg-white px-8 py-12 rounded-lg max-w-xl">
        <div className="flex mb-4 justify-center">{imageComponent}</div>
        <p className="mb-4 text-center">{info}</p>
        <div className="flex justify-center">
          <button
            className="bg-[#fff] border-2 border-[#0000006E]  px-12 py-1 rounded mr-2"
            onClick={onClose}
          >
            {buttonText1}
          </button>
          <button
            className="bg-[#FF5B5B] text-white px-12 py-1 rounded"
            onClick={onClose}
          >
            {buttonText2}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
