import React, { useState } from 'react';
import EducationAndReference from '../EducationAndReference';

interface EducationDetails {
  schoolName: string;
  location: string;
  degree: string;
  startDate: Date;
  endDate: Date;
}

const initialEducationDetails = {
  schoolName: '',
  location: '',
  degree: '',
  startDate: new Date(),
  endDate: new Date(),
};

const EducationList: React.FC = ({ onSaveAndNext, onBack }: any) => {
  const [educationDetails, setEducationDetails] = useState<EducationDetails[]>([
    { ...initialEducationDetails },
  ]);

  const handleEducationDetailsChange = (
    index: number,
    newDetails: EducationDetails
  ) => {
    setEducationDetails((prevDetails) =>
      prevDetails.map((details, idx) => (idx === index ? newDetails : details))
    );
  };

  const handleAddEducation = () => {
    if (educationDetails.length < 5) {
      setEducationDetails((prevDetails) => [
        ...prevDetails,
        { ...initialEducationDetails },
      ]);
    }
  };

  return (
    <div className="space-y-10">
      <h1 className="text-4xl">"Education & Qualifications"</h1>
      <h2 className="text-xl opacity-60 mt-2">
        "Let your employers know about your academic background "
      </h2>
      {educationDetails.map((details, index) => (
        <EducationAndReference
          key={index}
          details={details}
          onDetailsChange={(newDetails: any) =>
            handleEducationDetailsChange(index, newDetails)
          }
        />
      ))}

      <button
        className={`w-[286px] px-6 py-6 bg-secondary text-white rounded ${
          educationDetails.length >= 5 ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        onClick={handleAddEducation}
        disabled={educationDetails.length >= 5}
      >
        Add Education
      </button>
      {/* Rest of your component */}
    </div>
  );
};

export default EducationList;
