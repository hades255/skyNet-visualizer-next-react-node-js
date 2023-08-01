import { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';

const MultiStepPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleSaveAndNext = (data: any) => {
    setFormData((prevData) => ({
      ...prevData,
      [step]: data,
    }));
    console.log('step', step);
    setStep((prevStep) => prevStep + 1);
  };

  const handleBackAndSave = (data: any) => {
    console.log('step', step);

    setStep((prevStep) => (prevStep > 0 ? prevStep - 1 : prevStep));
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Step2 onSaveAndNext={handleSaveAndNext} onBack={handleBackAndSave} />
        );
      case 2:
        return (
          <Step1 onSaveAndNext={handleSaveAndNext} onBack={handleBackAndSave} />
        );
      case 3:
        return (
          <Step3 onSaveAndNext={handleSaveAndNext} onBack={handleBackAndSave} />
        );
      case 4:
        return (
          <Step4 onSaveAndNext={handleSaveAndNext} onBack={handleBackAndSave} />
        );
      case 5:
        return (
          <Step5 onSaveAndNext={handleSaveAndNext} onBack={handleBackAndSave} />
        );
      default:
        return null;
    }
  };

  return <div className="mb-80">{renderStep()}</div>;
};

export default MultiStepPage;
