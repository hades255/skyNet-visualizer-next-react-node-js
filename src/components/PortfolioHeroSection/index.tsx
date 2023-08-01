import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
// import SocialMediaSection from './SocialMediaSection';
// import userDetails from '../../constants/userdetails';
import { useSelector } from 'react-redux';

import SocialMediaScroll from './SocialMediaScroll';
import { FaBars } from 'react-icons/fa';
import SideNav from '../SideNav';

type SocialMedia = {
  platform: string;
  link: string;
  userName?: string;
};

type ProfilePicture = {
  src: string;
  alt: string;
  title?: string;
};

type ProfileData = {
  profileName: string;
  designation: string;
  profileSummary: string;
  socialMediaLinks: SocialMedia[];
  profileImg: ProfilePicture;
};

type Props = {
  profileData: ProfileData;
};

const PortfolioHeroSection: React.FC<Props> = ({ profileData }) => {
  const router = useRouter();
  const [sidenav, setSidenav] = useState(false);
  const userDetails = useSelector((state: any) => state.portfolio.userData);

  const sideNavSetter = (item: boolean) => {
    setSidenav(item);
  };
  useEffect(() => {
    console.log('val', router.query.val); // Alerts 'Someone'
  }, [router.query]);

  if (!profileData) {
    return null;
  }

  const {
    profileName = '',
    designation,
    profileSummary,
    profileImg,
  } = profileData;

  return (
    <div className="flex flex-col font-dmsans text h-fit pb-1 " id="intro">
      <div className="relative flex items-center  w-full py-8 rounded-md md:py-8 md:px-6">
        <button className="absolute block sm:hidden left-5 sm:right-0 px-3 mx-2 border rounded-md hover:cursor-pointer md:mx-6 h-9 md:px-4">
          Back To Editor
        </button>

        <button className="absolute right-[15%] sm:right-0  px-3 mx-2 border rounded-md hover:cursor-pointer md:mx-6 h-9 md:px-4">
          Download
        </button>

        <button
          className="absolute right-2 block sm:hidden"
          onClick={() => setSidenav(true)}
        >
          <FaBars color="white" size={30} />
        </button>

        <div
          className={`absolute top-0 right-0 z-50 ${
            sidenav ? 'block' : 'hidden'
          }`}
        >
          <SideNav sideNavSetter={sideNavSetter} />
        </div>
      </div>
      <div className="relative flex flex-col flex-col-reverse items-center justify-center w-full p-5   md:px-25 md:py-20 md:flex-row">
        <div className="absolute top-0 left-0 w-full h-full"></div>
        <div className="z-10 w-full flex flex-col justify-base space-y-6 md:w-2/3 mt-5 md:mt-[140px] md:px-20">
          <div className="z-10 border-l pl-6 pt-0 sm:pb-[20px] border-white">
            <h1 className=" text-2xl sm:text-6xl font-extrabold uppercase  text-porfolioTitleText">
              {userDetails.name}
            </h1>
            <h2 className=" text-xl sm:text-4xl   text-[#ffdd9a]">
              {userDetails.role}
            </h2>
          </div>
          <div className="w-full  font-thin text-porfolioTitleText text-sm sm:text-[16px] pl-6">
            {userDetails.about}
          </div>
          <button className="p-2 ml-6 rounded hover:cursor-pointer w-52 bg-[#ffdd9a] hover:bg-[#ffdd9a]/60 transition-all duration-500 ease-linear text-secondary">
            Hire me
          </button>
        </div>
        <div className="flex flex-col items-center justify-center w-full  text-lg md:w-1/3">
          <div>
            <Image
              className="rounded-full w-50 sm:w-100  w-50 sm:h-100"
              src="/Images/Profile.png"
              width="400"
              height="400"
              alt={profileImg.alt}
            ></Image>
          </div>
          <div className="mt-0 w-[300px] ">
            <SocialMediaScroll />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioHeroSection;
