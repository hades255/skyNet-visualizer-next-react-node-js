// components/CustomRadioButton.tsx
import React, { ChangeEvent } from 'react';

interface Props {
  label: string;
  name: string;
  value: string;
  checked: boolean;
  handleRadioChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const CustomRadioButton: React.FC<Props> = ({
  label,
  name,
  value,
  checked,
  handleRadioChange,
}) => {
  return (
    <div className="flex items-center cursor-pointer">
      <label htmlFor="test1">Apple</label>
    </div>
  );
};

export default CustomRadioButton;
