import React from 'react';
import { useState } from 'react';

import Tabs from '../../src/components/Tabs';
import DropdownComponent from '../../src/components/Dropdowns/';
import Modal from '../../src/components/Modal/';
import Link from 'next/link';
import warningIcon from '../../src/assets/navigation/warning.svg';
import billingIcon from '../../src/assets/navigation/billing.svg';
import contactIcon from '../../src/assets/navigation/contact.svg';
import dashboardIcon from '../../src/assets/navigation/dashboard.svg';
import trashIcon from '../../src/assets/navigation/trash.svg';
import Image from 'next/image';

import LeftTabs from './tabs';

const Account = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const modalData = {
    buttonText1: 'Button 1',
    buttonText2: 'Button 2',
    info: 'Are you sure you want to delete your resume account? This action is irreversible and will permanently delete all your resume information, templates, and settings. ',
  };

  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  const options1 = ['Option 1', 'Option 2', 'Option 3'];
  return (
    <div className="bg-white ">
      <LeftTabs />
      <div className="flex bg-white justify-center min-h-screen">
        <div className="flex flex-col md:w-9/12 w-11/12 mt-12">
          <p className="text-3xl md:text-4xl font-bold">Account Overview</p>
          <div className="flex">
            <div className="w-full md:w-10/12 justify-center flex">
              <p className="px-8 py-6 bg-[#e4e4e4] text-4xl text-[#66415A] w-fit h-fit rounded-full mt-4">
                S
              </p>

              <div className="flex flex-col  w-full ml-8  mt-4">
                <p className="text-lg opacity-80">Name</p>
                <div className="relative flex flex-col md:flex-row items-end md:items-center w-full ">
                  <input
                    type="text"
                    id="disabled"
                    className="bg-[#e6e6e6] border text-lg border-gray-300 rounded-lg text-black block w-full pl-6 p-2.5"
                    placeholder="Stact493"
                    disabled
                  />
                  <button
                    type="submit"
                    className="w-fit md:mt-0 mt-3 md:w-auto inline-flex items-center py-2.5 px-4 ml-2 text-lg font-medium text-[#3C1A41] bg-white rounded-lg border-2 border-[#0000006E]  focus:outline-none "
                  >
                    Change
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full ml-0 md:ml-4 mt-12 md:mt-4">
            <p className="text-lg opacity-80">Email</p>
            <div className="relative flex items-center w-full md:w-5/6 ">
              <input
                type="text"
                id="disabled"
                className="bg-[#e6e6e6] border text-lg border-gray-300 rounded-lg text-black block w-full pl-6 p-2.5"
                placeholder="stacybecker@gmail.com"
                disabled
              />
            </div>
          </div>
          <div className="flex flex-col w-full ml-0 md:ml-4 mt-4 mb-20">
            <p className="text-lg opacity-80">Password</p>
            <div className="relative flex items-center w-full md:w-5/6 ">
              <input
                type="password"
                id="password"
                className="bg-[#e6e6e6] border text-lg border-gray-300 rounded-lg text-black block w-full pl-6 p-2.5"
                placeholder="•••••••••••••"
                disabled
              />
              <button
                type="submit"
                className="hidden md:block inline-flex items-center py-2.5 px-4 ml-2 text-lg font-medium text-[#3C1A41] bg-white rounded-lg border-2 border-[#0000006E]  focus:outline-none "
              >
                Change
              </button>
            </div>
          </div>

          <div className="flex flex-col w-full md:ml-4 ml-0 mt-4">
            <p className="text-3xl mb-8 font-bold">Language</p>
            <div className="relative flex items-center w-full md:w-5/6 ">
              <DropdownComponent
                options={options1}
                onSelect={handleOptionSelect}
                selectedOption={selectedOption}
              />
            </div>
          </div>

          <div className="flex flex-col w-full md:ml-4 ml-0 mt-8">
            <p className="text-3xl mb-3 font-bold">Delete Account</p>
            <div className="relative flex flex-col w-full ">
              <p className="text-lg text-[#FF5B5B] ">
                Note this would delete your account along with all your saved
                resumes.{' '}
              </p>
              <button
                type="submit"
                onClick={openModal}
                className="inline-flex items-center py-3 px-8 mt-4 mb-16 w-fit text-lg font-medium text-white bg-[#FF5B5B] rounded-lg  focus:outline-none "
              >
                Delete Account
              </button>
            </div>
          </div>
          {showModal && (
            <Modal
              imageComponent={
                <Image src={warningIcon} alt="Image" width={150} height={150} />
              }
              buttonText1={modalData.buttonText1}
              buttonText2={modalData.buttonText2}
              info={modalData.info}
              onClose={closeModal}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Account;
