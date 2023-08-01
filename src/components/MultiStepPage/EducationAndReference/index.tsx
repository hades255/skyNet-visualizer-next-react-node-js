import { useEffect, useRef, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';

import DatePickerComp from '../../DatePickerComp';
import TextArea from '../../TextArea';
import AddReferenceLinks from '.././AddReferenceLinks';
import InputField from '../../InputField';

const EducationAndReference = ({ onSaveAndNext, onBack }: any) => {
  const [schoolName, setschoolName] = useState('');
  const [location, setLastName] = useState('');
  const [referenceName, setReferenceName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [degree, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [state, setState] = useState('');
  const [pin, setPin] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [startDate, setStartDate] = useState(new Date());

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  const handleUploadButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Perform validation and further actions here
  };

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

  const handleSchoolName = (e: any) => {
    console.log(e);
    setschoolName(e);
  };

  const handleLocation = (e: any) => {
    console.log(e);
    setLastName(e);
  };

  const handleDegree = (e: any) => {
    console.log(e);
    setEmail(e);
  };

  const handleAddress = (e: any) => {
    console.log(e);
    setAddress(e);
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <div className="flex">
        <div className="space-y-10">
          <div className="my-8 space-y-10">
            <div className="flex flex-row space-x-6">
              <div className="flex-grow">
                <InputField
                  className="h-12 px-4 "
                  type="text"
                  id="schoolName"
                  name="schoolName"
                  label="School Name"
                  placeholder="Enter your School Name"
                  value={schoolName}
                  onChange={(e) => handleSchoolName(e)}
                  required
                />
              </div>
            </div>
            <InputField
              className="h-12 px-4"
              type="text"
              id="location"
              name="location"
              label="Location"
              placeholder="Enter your last name"
              value={location}
              onChange={(e) => handleLocation(e)}
              required
            />{' '}
            <InputField
              className="h-12 px-4 "
              type="degree"
              id="degree"
              name="degree"
              label="Degree"
              placeholder="Enter your degree"
              value={degree}
              onChange={(e) => handleDegree(e)}
              required
            />
            <div className="flex flex-row space-x-4">
              <DatePickerComp title="Start Date" />
              <DatePickerComp title="End Date" />
            </div>
            <TextArea
              title="References (Optional)"
              ariaLabel="References"
              onTextChange={(newText) => console.log(newText)}
              placeholder=""
              name="references"
              rows={5}
              cols={50}
              maxLength={200}
            />
            <AddReferenceLinks />
            <div className="flex flex-row space-x-4">
              <div className="flex-grow">
                <InputField
                  className="h-12 px-4"
                  type="text"
                  id="referenceName"
                  name="referenceName"
                  label="Name of Referenced"
                  placeholder="Enter your referenceName"
                  value={referenceName}
                  onChange={() => console.log('dd')}
                  required
                />
              </div>
            </div>
            <div className="flex flex-row space-x-4">
              <div className="flex-grow">
                {' '}
                <InputField
                  className="h-12 px-4 "
                  type="tel"
                  id="phone"
                  name="phone"
                  label="Phone Number"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={() => console.log('dd')}
                  required
                />
              </div>
              <div className="flex-grow">
                <div className="flex space-x-4">
                  <div className="w-1/2">
                    <InputField
                      className="h-12 px-4 "
                      type="text"
                      id="state"
                      name="state"
                      label="State"
                      placeholder="Enter your state"
                      value={state}
                      onChange={() => console.log('dd')}
                      required
                    />
                  </div>
                  <div className="w-1/2">
                    <InputField
                      className="h-12 px-4 "
                      type="text"
                      id="pin"
                      name="pin"
                      label="PIN"
                      placeholder="Enter your PIN"
                      value={pin}
                      onChange={() => console.log('dd')}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EducationAndReference;
