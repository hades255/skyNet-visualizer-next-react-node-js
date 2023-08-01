import { useEffect, useRef, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import ActionSection from './ActionSection';
import InputField from '../InputField';
import Image from 'next/image';
import profileIcon from './assets/profileIcon.svg';
import DropdownComponent from '../Dropdowns';
import SocialMediaSection from './SocialMediaSection';
import { scrollToTop } from '../../utils/generalUtils';
import DatePickerComp from '../DatePickerComp';
import TextArea from '../TextArea';
import AddReferenceLinks from './AddReferenceLinks';
import EducationAndReference from './EducationAndReference';
import EducationList from './EducationList';
const options1 = ['Facebook', 'Instagram', 'Twitter', 'LinkedIn'];

const Step4 = ({ onSaveAndNext, onBack }: any) => {
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
      <div className="max-w-6xl mx-auto">
        <div className="flex mt-28">
          <EducationList />
          <div className="w-1/3">{/* Right section content */}</div>
        </div>
      </div>
      <ActionSection onBack={onBack} onSaveAndNext={onSaveAndNext} />
    </div>
  );
};
export default Step4;
