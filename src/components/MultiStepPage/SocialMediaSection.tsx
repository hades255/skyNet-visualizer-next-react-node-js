import React, { ChangeEvent, useState } from 'react';
import DropdownComponent from '../Dropdowns';
import InputField from '../InputField';
import deleteIcon from '../../../src/assets/deleteIcon.svg';
import Image from 'next/image';

export interface Row {
  selectedOption: string;
  socialMediaName: string;
}

interface SocialMediaSectionProps {
  onSave: (data: Row[]) => void;
}

const initialOptions = ['Facebook', 'Instagram', 'Twitter', 'LinkedIn']; // Update this with your options

const SocialMediaSection: React.FC<SocialMediaSectionProps> = ({ onSave }) => {
  const [rows, setRows] = useState<Row[]>([
    { selectedOption: '', socialMediaName: '' },
  ]);

  const handleOptionSelect = (selectedOption: string, index: number) => {
    const newRows = [...rows];
    newRows[index].selectedOption = selectedOption;
    setRows(newRows);
    onSave(newRows);
  };

  const handleSocialMediaNameChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value;
    setRows((prevRows) => {
      if (index < prevRows.length) {
        const newRows = [...prevRows];
        newRows[index].socialMediaName = value;
        onSave(newRows);
        return newRows;
      }
      onSave(prevRows);
      return prevRows;
    });
  };

  const addRow = () => {
    setRows([...rows, { selectedOption: '', socialMediaName: '' }]);
  };

  const deleteRow = (index: number) => {
    const newRows = rows.filter((row, idx) => idx !== index);
    setRows(newRows);
    onSave(newRows);
  };

  return (
    <div className="space-y-10">
      {rows.map((row, index) => {
        // Filter the options based on what's already been selected
        const options = initialOptions.filter(
          (option) => !rows.some((row) => row.selectedOption === option)
        );

        return (
          <div key={index} className="flex flex-row space-x-4">
            <div className="w-1/2">
              <div className="block text-gray-700">Website</div>
              <DropdownComponent
                nativeIcon={false}
                className="border"
                options={options}
                onSelect={(selectedOption) =>
                  handleOptionSelect(selectedOption, index)
                }
                selectedOption={row.selectedOption}
              />
            </div>
            <div className="w-1/2">
              <div className="flex flex-row space-x-2">
                <div className="flex w-5/6">
                  <div className="w-full">
                    <InputField
                      className="h-12 px-4"
                      type="text"
                      id="socialMedia"
                      name="socialMediaName"
                      label="Social link"
                      placeholder="Enter your social media name"
                      value={row.socialMediaName}
                      onChange={(e) => handleSocialMediaNameChange(e, index)}
                      required
                    />
                  </div>
                </div>
                <button
                  className="flex w-1/6 items-center justify-center mt-6"
                  onClick={() => deleteRow(index)}
                >
                  <Image
                    className="mx-2"
                    src={deleteIcon}
                    width={22}
                    height={22}
                    alt="delete"
                  />
                </button>
              </div>
            </div>
          </div>
        );
      })}
      <button
        className="w-[286px] text-white px-4 py-4 bg-secondary border text-gray-700 rounded"
        onClick={addRow}
        disabled={rows.length >= initialOptions.length} // disable the button when all options have been selected
      >
        Add Social
      </button>
    </div>
  );
};

export default SocialMediaSection;
