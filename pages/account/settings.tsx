import React, { useState } from 'react';
import Account from './';
import LeftTabs from './tabs';

function Settings() {
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = () => {
    setIsDisabled(!isDisabled);
  };

  return (
    <div>
      <LeftTabs />
      <div className="flex bg-white justify-center min-h-screen">
        <div className="flex flex-col md:w-9/12 w-11/12 mt-12">
          <p className="text-3xl md:text-4xl font-bold">Resume Settings</p>
          <p className="text-xl opacity-70 mt-8">Visualizer Unique ID</p>

          <div className="flex flex-col md:flex-row md:items-center mt-4">
            <div className="relative w-full ">
              <input
                type="text"
                id="disabled"
                className="bg-[#e6e6e6] border text-lg border-gray-300 rounded-lg text-black block w-full pl-6 p-2.5"
                placeholder="Stact493"
                disabled
              />
            </div>
            <hr className="w-full md:hidden mt-5 border border-[#E8E5EA]" />
            <button
              type="submit"
              className="inline-flex py-2.5 px-4 w-fit md:mt-0 mt-3 md:w-auto ml-2 text-lg font-medium text-[#3C1A41] bg-white rounded-lg border-2 border-[#0000006E]  focus:outline-none "
            >
              Change
            </button>
          </div>

          <hr className="w-full hidden md:block mt-5 border border-[#E8E5EA]" />
          <div className="flex flex-col md:flex-row md:items-center mb-24 md:mt-0 mt-12">
            <div className="md:w-9/12 w-full flex flex-col">
              <p className="text-xl mt-4 opacity-70">
                Disable all Visualizer Links
              </p>
              <p className="text-lg  mt-2">
                This would disable viewing access to anyone who has a copy of
                the visualizer link
              </p>
            </div>
            <button
              type="submit"
              className={`w-fit md:mt-0 mt-3 md:w-auto inline-flex items-center hover:bg-[#3C1A41] hover:text-white ease-in-out duration-150 py-2.5 px-4 ml-2 text-lg font-medium text-${
                isDisabled ? 'gray' : '#3C1A41'
              } bg-white rounded-lg border-2 border-[#0000006E] focus:outline-none`}
              onClick={handleClick}
            >
              {isDisabled ? 'Disabled' : 'Disable Visualizer Link'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
