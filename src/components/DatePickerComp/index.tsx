import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import calendar from '../../assets/calendar.svg';
import Image from 'next/image';

const CustomInput = React.forwardRef(({ value, onClick }: any, ref: any) => (
  <div
    className="custom-input w-48 flex border border-gray-300 p-4 mt-1 bg-white"
    onClick={onClick}
    ref={ref}
  >
    <Image src={calendar} alt="calendar" height={20} width={20} />
    <span className="ml-2">{value ? value : 'select'}</span>
  </div>
));

CustomInput.displayName = 'CustomInput';

const DatePickerComp = ({ title }: any) => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div>
      {title && <label className="block text-gray-700">{title}</label>}
      <DatePicker
        showIcon
        selected={startDate}
        onChange={(date: Date) => setStartDate(date)}
        customInput={<CustomInput value={startDate} />} // Use your custom input here
      />
    </div>
  );
};

export default DatePickerComp;
