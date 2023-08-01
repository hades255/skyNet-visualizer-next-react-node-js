import React from 'react';
import { FaPalette, FaPallet, FaRocket, FaTimes } from 'react-icons/fa';

const SideNav: React.FC<{ sideNavSetter: any }> = ({ sideNavSetter }) => {
  const cancelClick = () => {
    sideNavSetter(false);
  };
  return (
    <div className=" py-10 text-white bg-[#1e1e1e] w-[280px] h-[100vh] flex flex-col justify-between">
      <div className="flex flex-col">
        <div className="flex px-10 items-center justify-between">
          <p>
            <a href="">Quick Nav</a>
          </p>
          <div onClick={cancelClick}>
            <FaTimes color="white" size={30} />
          </div>
        </div>

        <div className="w-4/5 h-[2px] rounded-lg mt-2 bg-white mx-auto"></div>

        <div className="pointer px-10 hover:bg-portfolioPrimaryText py-3">
          <a onClick={cancelClick} href="#intro">
            Intro Section
          </a>
        </div>

        <div className="pointer px-10 hover:bg-portfolioPrimaryText py-3">
          <a onClick={cancelClick} href="#timeline">
            Timeline Section
          </a>
        </div>

        <div className="pointer px-10 hover:bg-portfolioPrimaryText py-3">
          <a onClick={cancelClick} href="#quote">
            Quote Section
          </a>
        </div>

        <div className="pointer px-10 hover:bg-portfolioPrimaryText py-3">
          <a onClick={cancelClick} href="#kskills">
            Key Skills Section
          </a>
        </div>

        <div className="pointer px-10 hover:bg-portfolioPrimaryText py-3">
          <a onClick={cancelClick} href="#vskills">
            Vital Skills Section
          </a>
        </div>

        <div className="pointer px-10 hover:bg-portfolioPrimaryText py-3">
          <a onClick={cancelClick} href="#portfolio">
            Portfolio Section
          </a>
        </div>

        <div className="pointer px-10 hover:bg-portfolioPrimaryText py-3">
          <a onClick={cancelClick} href="#contact">
            Contact Us Section
          </a>
        </div>
      </div>

      <div className="flex flex-col">
        <h2 className="text-portfolioPrimaryText px-10 text-xl mb-5">
          DOCUMENTATION
        </h2>

        <div className="flex px-10 ml-5 cursor-pointer mb-5">
          <FaRocket color="white" size={20} />
          <div className="ml-3">FAQs</div>
        </div>

        <div className="flex px-10 ml-5 cursor-pointer">
          <FaPalette color="white" size={20} />
          <div className="ml-3">Terms Of Service</div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
