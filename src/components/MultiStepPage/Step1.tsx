import Image from 'next/image';
import ActionSection from './ActionSection';
import { useState } from 'react';
import Link from 'next/link';
import step1_1 from './assets/step1_1.svg';
import step1_2 from './assets/step1_2.svg';
import step1_3 from './assets/step1_3.svg';
import step1_4 from './assets/step1_4.svg';

const textClass = 'text-black opacity-80';

const Step1 = ({ onSaveAndNext, onBack }: any) => {
  const [formData, setFormData] = useState({
    field1: '',
    field2: '',
    field3: '',
    // Add more fields as needed
  });

  const handleSaveAndNext = () => {
    // Perform validation or any other required logic
    onSaveAndNext(formData);
  };

  return (
    <>
      <div className="max-w-6xl m-auto">
        <div className="my-32">
          <h1 className="text-4xl font-bold mb-4">
            How many years of Experience do you have?
          </h1>
          <h2 className="text-xl opacity-60">
            This helps us to recommend the best templates for you
          </h2>

          <div className="flex flex-wrap justify-center space-x-12 mt-12">
            <Link
              href="#"
              className="flex flex-col items-center justify-center p-8 flex-grow-0 flex-basis-25 bg-white hover:shadow"
              tabIndex={0}
            >
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-2">
                <Image src={step1_1} alt="Icon 1" width={400} height={400} />
              </div>
              <p className={`text-sm ${textClass}`}>No Experience</p>
            </Link>
            <Link
              href="#"
              className="flex flex-col items-center justify-center p-8 flex-grow-0 flex-basis-25 bg-white"
              tabIndex={0}
            >
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-2">
                <Image src={step1_2} alt="Icon 2" width={300} height={300} />
              </div>
              <p className={`text-sm ${textClass}`}>Less than 2 years</p>
            </Link>
            <Link
              href="#"
              className="flex flex-col items-center justify-center p-8 flex-grow-0 flex-basis-25 bg-white"
              tabIndex={0}
            >
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-2">
                <Image src={step1_3} alt="Icon 3" width={400} height={400} />
              </div>
              <p className={`text-sm ${textClass}`}>2 - 4 years</p>
            </Link>
            <Link
              href="#"
              className="flex flex-col items-center justify-center p-8 flex-grow-0 flex-basis-25 bg-white"
              tabIndex={0}
            >
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-2">
                <Image src={step1_4} alt="Icon 4" width={400} height={400} />
              </div>
              <p className={`text-sm ${textClass}`}>More than 4 years</p>
            </Link>
          </div>
        </div>
      </div>
      <ActionSection onBack={onBack} onSaveAndNext={onSaveAndNext} />
    </>
  );
};

export default Step1;
