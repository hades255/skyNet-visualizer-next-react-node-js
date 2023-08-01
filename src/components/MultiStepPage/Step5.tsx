import { useState } from 'react';
import ActionSection from './ActionSection';

const Step5 = ({ onSaveAndNext, onBack }: any) => {
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
    <div>
      <h1 className="text-4xl font-bold">Step 5</h1>

      <div>
        <label htmlFor="field1">Field 1:</label>
        <input
          type="text"
          id="field1"
          name="field1"
          value={formData.field1}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label htmlFor="field2">Field 2:</label>
        <input
          type="text"
          id="field2"
          name="field2"
          value={formData.field2}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label htmlFor="field3">Field 3:</label>
        <input
          type="text"
          id="field3"
          name="field3"
          value={formData.field3}
          onChange={handleInputChange}
        />
      </div>

      {/* Add more input fields as needed */}

      {/* <button onClick={handleSaveAndNext}>Save & Next</button> */}
      <ActionSection onBack={onBack} onSaveAndNext={onSaveAndNext} />
    </div>
  );
};

export default Step5;
