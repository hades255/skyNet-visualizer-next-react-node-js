import React, { useState } from 'react';
import InputField from '../InputField';
import deleteIcon from '../../../src/assets/deleteIcon.svg';
import Image from 'next/image';

interface Row {
  input1: string;
  input2: string;
}

const MAX_LINKS = 5;

const AddReferenceLinks: React.FC = () => {
  const [rows, setRows] = useState<Row[]>([{ input1: '', input2: '' }]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    field: 'input1' | 'input2'
  ) => {
    const value = e.target.value;
    setRows((prevRows) => {
      if (index < prevRows.length) {
        const newRows = [...prevRows];
        newRows[index][field] = value;
        return newRows;
      }
      return prevRows;
    });
  };

  const addRow = () => {
    setRows([...rows, { input1: '', input2: '' }]);
  };

  const deleteRow = (index: number) => {
    const newRows = rows.filter((row, idx) => idx !== index);
    setRows(newRows);
  };

  return (
    <div className="space-y-10">
      <div className="block text-gray-700">Links</div>
      {rows.map((row, index) => (
        <div key={index} className="flex flex-row space-x-4">
          <div className="w-1/2">
            <InputField
              className="h-12 px-4"
              type="text"
              id="input1"
              name="input1"
              label="Input 1"
              placeholder="Enter your input 1"
              value={row.input1}
              onChange={(e) => handleInputChange(e, index, 'input1')}
              required
            />
          </div>
          <div className="w-1/2">
            <div className="flex flex-row space-x-2">
              <div className="flex w-5/6">
                <div className="w-full">
                  <InputField
                    className="h-12 px-4"
                    type="text"
                    id="input2"
                    name="input2"
                    label="Input 2"
                    placeholder="Enter your input 2"
                    value={row.input2}
                    onChange={(e) => handleInputChange(e, index, 'input2')}
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
      ))}
      <button
        className="w-[286px] text-white px-4 py-4 bg-secondary border text-gray-700 rounded"
        onClick={addRow}
        disabled={rows.length >= MAX_LINKS} // Disable the button when the maximum number of links is reached
      >
        Add Link
      </button>
    </div>
  );
};

export default AddReferenceLinks;
