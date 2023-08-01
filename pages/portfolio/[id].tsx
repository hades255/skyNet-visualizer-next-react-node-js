import { useEffect, useState } from 'react';
import {
  getPostDetails,
  getPostIdList,
} from '../../src/constants/portfolioIds';
import PortfolioHeroSection from '../../src/components/PortfolioHeroSection';
import {
  profileProps,
  vitals,
  landingPageFeatures,
} from '../../src/constants/header';
import Timeline from '../../src/components/Timeline';
import Quotes from '../../src/components/Quotes';
import quotes from '../../src/assets/quotes.svg';
import backgroundHeroSection from '../../src/assets/backgroundHeroSection.svg';
import Skill from '../../src/components/Skill';
import userDetails from '../../src/constants/userdetails';
import { useDispatch } from 'react-redux';
import { logUserData } from '../../redux/portfolioSlice';
import MasonryLayout from '../../src/components/MasonryLayout';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import ContactInfo from '../../src/components/Footer/ContactInfo';
import PortfolioSlider from '../../src/components/Portfolio';
import ScrollToTopButton from '../../src/components/ScrollToTopButton';
import MasonryMobileLayout from '../../src/components/MasonryMobileLayout';
import PortfolioMobile from '../../src/components/Portfolio/PortfolioMobile';
import { mockUserDetails } from '../../src/mockData/portfolioData';
import Timeline2 from '../../src/components/Timeline2';
import TimelineMobile from '../../src/components/TimelineMobile';
import TexturedBackground from '../../src/components/TexturedBackground';
import ThemeSwitchButton from '../../src/components/ThemeSwitchButton';
import ThemeProvider from '../../src/context/ThemeProvider';

const WorldMap = dynamic(() => import('../../src/components/WorldMap'), {
  ssr: false,
});

const location = {
  name: 'John Doe',
  latitude: 40.7128,
  longitude: -74.006,
};

const style = {
  opacity: 0.56,
  background: 'rgba(255, 221, 154, 0.25)',
  filter: 'blur(150px)',
};

export default function Portfolio(props: any) {
  const dispatch = useDispatch();

  console.log('Dynamic Data', props.currentData);
  const { currentData } = props;
  // const years = userDetails[0].experience; // Accessing the experience property of the first UserDetails object

  useEffect(() => {
    dispatch(logUserData(currentData));
    console.log(currentData);
  }, []);

  return (
    <ThemeProvider>
      <div className=" bg-[#100E0B] relative font-dmsans">
        <div>
          <ThemeSwitchButton />

          <div className="portfolioHero">
            {/* <TexturedBackground> */}
            <div className="h-fit  text-gray-100 max-w-7xl  mx-auto">
              {props.data && <PortfolioHeroSection profileData={props.data} />}
            </div>
            {/* </TexturedBackground> */}
          </div>

          <div className="portfolioTimeline">
            <div className="sm:py-20 max-w-7xl mx-auto">
              {/* <Timeline /> */}

              <div className="hidden sm:block">
                <div>
                  <TexturedBackground>
                    <Timeline2 />
                  </TexturedBackground>
                </div>
              </div>
              <div className="block sm:hidden">
                <TimelineMobile />
              </div>
            </div>
          </div>

          {/* <div className="bg-black/95">
          <div className=" w-full sm:max-w-7xl mx-auto flex flex-col items-center justify-center p-5 sm:p-20 bg-gradient-to-br from-landingSubText/0 via-landingSubText/5 via-landingSubText/0 to-transparent">
            <Quotes
              quote="The greatest danger for most of us is not that our aim is too high and we miss it, but that it is too low and we reach it."
              imageSrc={quotes}
              authorName="Michelelo"
            />
          </div>
        </div> */}
          <div className="portfolioQuotes flex justify-center items-center py-36">
            <Quotes
              quote="The greatest danger for most of us is not that our aim is too high and we miss it, but that it is too low and we reach it."
              imageSrc={quotes}
              authorName="Michelelo"
            />
          </div>
          <div className="portfolioStats">
            <div className="m-0 sm:p-20 sm:pb-5 max-w-7xl mx-auto">
              <div className="flex justify-center items-center">
                <h2 className="underline text-portfolioPrimaryText text-2xl sm:text-5xl">
                  Key Skills
                </h2>
              </div>

              <div className="mx-auto w-3/3 my-2 sm:my-14 flex flex-col justify-center sm:flex-row items-center mb-0 sm:flex-wrap">
                {currentData.keyskills.map((skill: any) => {
                  return (
                    <Skill
                      key={skill.skilltype}
                      title={skill.skilltype}
                      percentage={skill.percentage}
                    />
                  );
                })}

                <div className="hidden sm:block w-full text-right cursor-pointer mr-[90px] mb-[0px] text-portfolioPrimaryText underline">
                  <a href="#quote">Go Up A Level</a>
                </div>
              </div>
            </div>
          </div>
          <div className="portfolioStats">
            <div
              className="p-3 sm:p-20 sm:pt-5  max-w-7xl  mx-auto"
              id="vskills"
            >
              <h1 className=" text-xl mt-[50px] sm:mt-[10px] sm:text-4xl text-portfolioPrimaryText font-bold  mb-3 sm:mb-6 underline text-center">
                Vital Stats
              </h1>
              <div className="hidden mt-[50px] sm:block">
                <MasonryLayout tiles={currentData.achievements} />
              </div>

              <div className="block mt-[40px] sm:hidden">
                <MasonryMobileLayout tiles={currentData.achievements} />
              </div>
            </div>
          </div>

          <div className="portfolioPortfolios" id="portfolio">
            <div className=" flex flex-col sm:flex-row  text-white p-3 sm:p-5  max-w-7xl mx-auto">
              <div className="flex w-full sm:w-1/5 mt-10 flex-col">
                <h3 className="font-bold text-xl text-portfolioPrimaryText text-center sm:text-start">
                  Portfolio
                </h3>
                <div className="text-center sm:text-start">
                  My Portfolio project contains my testimonials from previous
                  companies that i represented in the past
                </div>
              </div>

              <div className="hidden sm:flex w-4/5">
                <PortfolioSlider />
              </div>

              <div className="block sm:hidden pb-10">
                <PortfolioMobile />
              </div>
            </div>
          </div>

          <div className="portfolioContact">
            <div
              id="contact"
              className="p-3 sm:p-20 sm:pt-6 flex-col max-w-7xl mx-auto flex"
            >
              <h1 className="text-xl sm:text-5xl mb-20 text-portfolioPrimaryText font-bold mb-6  text-center">
                Contact Me
              </h1>
              <div className="flex flex-col sm:flex-row">
                <div className="w-full sm:w-[30%] h-[400px] mb-3 sm:mb-0">
                  <ContactInfo
                    title="Let's Get In Touch"
                    listItems={currentData.contact}
                  />
                </div>
                <div className="w-full sm:w-[70%] sm:ml-4">
                  {/* <h1 className="text-3xl font-bold mb-6">Person's Location</h1> */}
                  <div className="w-full h-[400px] p-1 sm:p-0 bg-black rounded-[20px]">
                    <WorldMap location={currentData.location} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="absolute z-50 bottom-2 right-5 block sm:hidden"
          style={{ zIndex: 9999 }}
        >
          <ScrollToTopButton />
        </div>
      </div>
    </ThemeProvider>
  );
}

export async function getStaticPaths() {
  const paths = await getPostIdList();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const id = params.id;

  //this pick the dynamic data for the portfolio and store it in currentData.
  // Use currentData to be store in the redux store and eliminate the userDetails already used.

  const item = mockUserDetails[parseInt(id, 10) - 1];
  return {
    props: {
      val: 'hello',
      data: profileProps,
      newData: mockUserDetails,
      currentData: item,
    },
  };
}
