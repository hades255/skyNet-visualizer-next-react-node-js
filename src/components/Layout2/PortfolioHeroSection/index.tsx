import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import SocialMediaScroll from './SocialMediaScroll';
import { FaBars } from 'react-icons/fa';
import SideNav from '../../SideNav';
import heroSectionOverShadow from '../../../assets/theme2/HeroSectionOverShadow.svg';

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

  const { profileImg } = profileData;

  return (
    <div className="flex flex-col text h-fit" id="intro">
      <div className="relative flex items-center w-full rounded-md">
        <button
          className="absolute block sm:hidden left-5 sm:right-0 px-3 mx-2 border rounded-md hover:cursor-pointer md:mx-6 h-9 md:px-4"
          data-testid="back-to-editor-button"
        >
          Back To Editor
        </button>

        <button
          className="absolute right-[15%] sm:right-0  px-3 mx-2 border rounded-md hover:cursor-pointer md:mx-6 h-9 md:px-4"
          data-testid="download-button"
        >
          Download
        </button>

        <button
          className="absolute right-2 block sm:hidden"
          onClick={() => setSidenav(true)}
          data-testid="open-sidenav-button"
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
      <div className="relative flex flex-col flex-col-reverse items-center justify-center w-full md:flex-row">
        <div className="absolute top-0 left-0 w-full h-full"></div>
        <div className="z-1 w-full flex flex-col justify-base space-y-6 md:w-3/5 relative">
          <h1
            className="break-all leading-[8rem] h-32 overflow-hidden top-[-20%] transform translate-y-[-50%] absolute text-[170px] font-normal uppercase  text-[#BABABA3] z-index-1 opacity-19"
            data-testid="profile-name"
          >
            {userDetails.name}
          </h1>
          <div className="max-w-xl mx-auto">
            <div className="z-10 border-l pt-0 sm:pb-[20px] border-white ">
              <h1
                className="text-2xl sm:text-6xl font-extrabold uppercase  text-[#131313]"
                data-testid="user-name"
              >
                {userDetails.name}
              </h1>
              <h2
                className="text-xl sm:text-4xl   text-[#082F38]"
                data-testid="user-role"
              >
                {userDetails.role}
              </h2>
            </div>
            <div
              className="w-full  font-thin text-[#0606069E] text-sm sm:text-[16px]"
              data-testid="user-about"
            >
              {userDetails.about}
            </div>
            <button
              className="mt-8 p-2 rounded hover:cursor-pointer w-52 bg-[#0C151C] hover:bg-[#ffdd9a]/60 transition-all duration-500 ease-linear text-white"
              data-testid="hire-me-button"
            >
              Hire me
            </button>
          </div>
        </div>
        <div className="relative h-screen bg-[#011016] flex flex-col items-center justify-center w-full  text-lg md:w-2/5 z-1">
          <div>
            <div className="absolute top-1/2 left-[-10%] transform translate-y-[-50%]">
              <div className="flex flex-row">
                <div
                  className="bg-gray-300"
                  style={{
                    boxShadow:
                      '-8px 0px 45px 0px rgba(0, 0, 0, 0.44), 12px 12px 37px 0px rgba(0, 0, 0, 0.17), 47px 47px 66px 0px rgba(0, 0, 0, 0.10), 105px 107px 90px 0px rgba(0, 0, 0, 0.05), 186px 190px 106px 0px rgba(0, 0, 0, 0.01), 291px 296px 116px 0px rgba(0, 0, 0, 0.00)',
                  }}
                  data-testid="profile-image-container"
                >
                  <Image
                    className="w-50 sm:w-100  w-50 sm:h-100"
                    src="/Images/Profile.png"
                    width="400"
                    height="400"
                    alt={profileImg.alt}
                    data-testid="profile-image"
                  ></Image>
                </div>
                <div className="flex items-center">
                  <div className="ml-1 w-[100px] ">
                    <SocialMediaScroll />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioHeroSection;
