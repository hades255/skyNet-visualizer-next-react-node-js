import React from 'react';

interface StepButtonsProps {
  onBack?: () => void;
  onSaveAndNext?: () => void;
  isSaveNextDisabled?: boolean;
}

const ActionSection: React.FC<StepButtonsProps> = ({
  onBack,
  onSaveAndNext,
  isSaveNextDisabled,
}) => {
  return (
    <div className="fixed bottom-0 w-full bg-white">
      <div className=" max-w-6xl flex justify-end mt-4 space-x-6 p-10 mx-auto">
        <button
          className="w-[286px] px-6 py-6 border text-gray-700 rounded"
          onClick={onBack}
        >
          Back
        </button>
        <button
          className={`w-[286px] px-6 py-6 bg-secondary text-white rounded ${
            isSaveNextDisabled ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          onClick={onSaveAndNext}
          disabled={isSaveNextDisabled}
        >
          Save & Next
        </button>
      </div>
    </div>
  );
};

export default ActionSection;
