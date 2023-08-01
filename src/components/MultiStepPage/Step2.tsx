import { useState } from 'react';
import ActionSection from './ActionSection';
import Image from 'next/image';
import design1 from '../../assets/design1.svg';
import design2 from '../../assets/design2.svg';

const Step2 = ({ onSaveAndNext, onBack }: any) => {
  const [formData, setFormData] = useState({
    field1: '',
    field2: '',
    field3: '',
    // Add more fields as needed
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSaveAndNext = () => {
    // Perform validation or any other required logic
    onSaveAndNext(formData);
  };

  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center ">
          <h1 className="text-4xl max-w-2xl text-center mt-24">
            "Discover Winning Resume Designs: Explore Our Template Catalogue"
          </h1>
          <h2 className="text-lg max-w-3xl mt-6 text-center">
            "Stand Out from the Competition: Explore Our Extensive Catalogue of
            Professionally Designed Resume Templates. From sleek and modern to
            elegant and timeless, our collection offers a wide range of
            field-tested designs that align with the latest hiring trends."
          </h2>
        </div>
        <div className="flex py-24">
          <div className="flex space-x-10">
            <div className="shaking-effect transition-shadow duration-300 ease-in-out hover:cursor-pointer hover:shadow-xl w-1/2 border rounded-sm">
              <Image
                src={design1}
                alt="prev button"
                className="sm:block w-full"
                height={1000}
                key="1"
              ></Image>
              {/* <img src={imageSrc1} alt="Image 1" className="w-full h-24" /> */}
              <div className="p-4 bg-white">
                <h3 className="text-xl">Starlight</h3>
                <p className="text-[#6C6C6C]">
                  starlight is a resume made to impress, explore the stunning
                  spotlights on your achievements, try this out today
                </p>
              </div>
            </div>
            <div className="shaking-effect transition-shadow duration-300 ease-in-out hover:shadow-xl hover:cursor-pointer w-1/2 rounded-sm">
              <Image
                src={design2}
                alt="prev button"
                className=" sm:block w-full"
                height={1000}
                key="1"
              ></Image>
              {/* <img src={imageSrc2} alt="Image 2" className="w-full h-24" /> */}
              <div className="p-4 bg-white">
                <h3 className="text-xl">Modern Blume</h3>
                <p className="text-[#6C6C6C]">
                  Modern Blume is a resume made to feel professional and
                  consise, show those skills with this template today
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ActionSection onBack={onBack} onSaveAndNext={onSaveAndNext} />
    </div>
  );
};

export default Step2;
