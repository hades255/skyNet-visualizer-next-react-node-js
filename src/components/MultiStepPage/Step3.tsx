import { useEffect, useRef, useState } from 'react';
import ActionSection from './ActionSection';
import InputField from '../InputField';
import Image from 'next/image';
import profileIcon from './assets/profileIcon.svg';
import SocialMediaSection, { Row } from './SocialMediaSection';
import { scrollToTop } from '../../utils/generalUtils';

const Step3 = ({ onSaveAndNext, onBack }: any) => {
  const [firstName, setFirstName] = useState('');
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    country: '',
    address: '',
    city: '',
    email: '',
    phone: '',
    state: '',
    pin: '',
    selectedImage: null,
  });

  useEffect(() => {
    scrollToTop();
  }, []);

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSaveAndNext = () => {
    // Perform validation or any other required logic
    console.log('formData', formData);
    onSaveAndNext(formData);
  };

  const handleFirstName = (e: any) => {
    console.log(e.target.value);
    setFirstName(e.target.value);
  };

  const handleSaveSocialMedia = (data: Row[]) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      socialMedia: data,
    }));
  };

  return (
    <div>
      <div className="max-w-6xl mx-auto">
        <div className="flex mt-28">
          <div className="w-2/3 space-y-10">
            <h1 className="text-4xl">Let's connect</h1>
            <h2 className="text-xl opacity-60 mt-2">
              "Tell us about yourself and take the first step towards your dream
              job."
            </h2>
            <div className="my-8 space-y-10">
              <div className="flex flex-row space-x-6">
                <div className="flex-grow">
                  <InputField
                    className="h-12 px-4 "
                    type="text"
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    placeholder="Enter your first name"
                    required
                    value={firstName}
                    onChange={handleFirstName}
                  />
                </div>
                <div className="flex-grow flex flex-row">
                  <div className="flex-row flex flex-grow items-center space-x-3">
                    <div
                      className={`bg-gray border border-black hover:cursor-pointer ${
                        !selectedImage && 'p-3'
                      }`}
                    >
                      <Image
                        alt="profileIcon"
                        src={
                          selectedImage
                            ? URL.createObjectURL(selectedImage)
                            : profileIcon
                        }
                        height={selectedImage ? 70 : 50}
                        width={selectedImage ? 70 : 50}
                      />
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleFileUpload}
                        style={{ display: 'none' }}
                      />
                    </div>

                    <div
                      onClick={handleUploadButtonClick}
                      className="text-lg hover:cursor-pointer"
                    >
                      Upload photo
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row space-x-4">
                <div className="flex-grow">
                  <InputField
                    className="h-12 px-4"
                    type="text"
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    placeholder="Enter your last name"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange(e)}
                    required
                  />
                </div>
                <div className="flex-grow">
                  {' '}
                  <InputField
                    className="h-12 px-4 "
                    type="email"
                    id="email"
                    name="email"
                    label="Email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => handleInputChange(e)}
                    required
                  />
                </div>
              </div>

              <InputField
                className="h-12 px-4 "
                type="text"
                id="address"
                name="address"
                label="Address"
                placeholder="Enter your address"
                value={formData.address}
                onChange={(e) => handleInputChange(e)}
                required
              />
              <div className="flex flex-row space-x-4">
                <div className="flex-grow">
                  <InputField
                    className="h-12 px-4"
                    type="text"
                    id="country"
                    name="country"
                    label="Country"
                    placeholder="Enter your country"
                    value={formData.country}
                    onChange={(e) => handleInputChange(e)}
                    required
                  />
                </div>
                <div className="flex-grow">
                  <InputField
                    className="h-12 px-4 flex-grow"
                    type="text"
                    id="city"
                    name="city"
                    label="City"
                    placeholder="Enter your city"
                    value={formData.city}
                    onChange={(e) => handleInputChange(e)}
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
                    value={formData.phone}
                    onChange={(e) => handleInputChange(e)}
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
                        value={formData.state}
                        onChange={(e) => handleInputChange(e)}
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
                        value={formData.pin}
                        onChange={(e) => handleInputChange(e)}
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <SocialMediaSection onSave={handleSaveSocialMedia} />
          </div>
          <div className="w-1/3">{/* Right section content */}</div>
        </div>
      </div>
      <ActionSection onBack={onBack} onSaveAndNext={handleSaveAndNext} />
    </div>
  );
};
export default Step3;
