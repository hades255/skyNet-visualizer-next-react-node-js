import { useEffect } from 'react';
import { getPostIdList } from '../../src/constants/portfolioIds';

import { profileProps } from '../../src/constants/header';
import Quotes from '../../src/components/Quotes';
import quotes from '../../src/assets/quotes.svg';
import Skill from '../../src/components/Skill';
import { useDispatch } from 'react-redux';
import { logUserData } from '../../redux/portfolioSlice';
import MasonryLayout from '../../src/components/MasonryLayout';

import dynamic from 'next/dynamic';
import ContactInfo from '../../src/components/Footer/ContactInfo';
import PortfolioSlider from '../../src/components/Portfolio';
import ScrollToTopButton from '../../src/components/ScrollToTopButton';
import MasonryMobileLayout from '../../src/components/MasonryMobileLayout';
import PortfolioMobile from '../../src/components/Portfolio/PortfolioMobile';
import { mockUserDetails } from '../../src/mockData/portfolioData';
import Timeline2 from '../../src/components/Timeline2';
import TimelineMobile from '../../src/components/TimelineMobile';
import ThemeSwitchButton from '../../src/components/ThemeSwitchButton';
import ThemeProvider from '../../src/context/ThemeProvider';
import PortfolioHeroSection from '../../src/components/Layout2/PortfolioHeroSection';
import SkillTheme2 from '../../src/components/SkillTheme2';

const WorldMap = dynamic(() => import('../../src/components/WorldMap'), {
  ssr: false,
});

export default function Portfolio(props: any) {
  const dispatch = useDispatch();
  const portfolioContainer: React.CSSProperties = {
    background:
      'linear-gradient(180deg, #051F28 0%, rgba(5, 31, 40, 0.53) 100%)',
    // Add other styles as needed
  };

  console.log('Dynamic Data', props.currentData);
  const { currentData } = props;
  // const years = userDetails[0].experience; // Accessing the experience property of the first UserDetails object

  useEffect(() => {
    dispatch(logUserData(currentData));
    console.log(currentData);
  }, []);

  return (
    <ThemeProvider>
      <div className=" bg-[#fff] relative font-outfit">
        <div>
          <ThemeSwitchButton />
          <div className="portfolioHero">
            {/* <TexturedBackground> */}
            <div className="h-fit text-gray-100">
              {props.data && <PortfolioHeroSection profileData={props.data} />}
            </div>
            {/* </TexturedBackground> */}
          </div>

          {/* <div className="bg-[#76808CB5]"> */}
          <div>
            <div className="mx-auto">
              <div className="hidden sm:block">
                <div>
                  <Timeline2 layout="2" />
                </div>
              </div>
              <div className="block sm:hidden">
                <TimelineMobile />
              </div>
            </div>
          </div>

          <div className="bg-[#031318] flex justify-center items-center py-36">
            <Quotes
              quote="The greatest danger for most of us is not that our aim is too high and we miss it, but that it is too low and we reach it."
              imageSrc={quotes}
              authorName="Michelelo"
              layout="2"
            />
          </div>

          <div className="bg-[#D6D8DA] pb-[40px]">
            <div className=" sm:p-20 sm:pb-5 max-w-7xl mx-auto ">
              <div className="bg-[#031318] px-10 py-14">
                <h2 className="underline text-[#A2E2F1] text-2xl sm:text-5xl">
                  Skills
                </h2>
                <div className="mt-[30px]">
                  {currentData.keyskills.map((skill: any) => {
                    return (
                      <SkillTheme2
                        key={skill.skilltype}
                        title={skill.skilltype}
                        percentage={skill.percentage}
                      />
                    );
                  })}
                </div>
              </div>

              {/* <div className="mx-auto w-3/3 my-2 sm:my-14 flex flex-col justify-center sm:flex-row items-center mb-0 sm:flex-wrap">
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
              </div> */}
            </div>
          </div>
          <div className="bg-[#D6D8DA]">
            <div
              className="p-3 sm:p-20 sm:pt-5  max-w-7xl  mx-auto"
              id="vskills"
            >
              <h1 className=" text-xl mt-[50px] sm:mt-[10px] sm:text-4xl text-[#010809] font-bold  mb-3 sm:mb-6 underline text-center">
                Vital Stats
              </h1>
              <div className="hidden mt-[50px] sm:block">
                <MasonryLayout layout="2" tiles={currentData.achievements} />
              </div>

              <div className="block mt-[40px] sm:hidden">
                <MasonryMobileLayout tiles={currentData.achievements} />
              </div>
            </div>
          </div>

          <div style={portfolioContainer} id="portfolio">
            <div className=" flex flex-col sm:flex-row  text-white p-3 sm:p-5  max-w-7xl mx-auto">
              <div className="flex w-full sm:w-1/5 mt-10 flex-col">
                <h3 className="mb-4 font-bold text-5xl text-[#76B6C5] text-center sm:text-start">
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

          <div className="" style={portfolioContainer}>
            <div
              id="contact"
              className="p-3 sm:p-20 sm:pt-6 flex-col max-w-7xl mx-auto flex"
            >
              <h1 className="text-xl sm:text-5xl mb-20 text-[#67A7B6] font-bold mb-6  text-center">
                Contact Me
              </h1>
              <div className="flex flex-col sm:flex-row">
                <div className="w-full sm:w-[30%] h-[400px] mb-3 sm:mb-0">
                  <ContactInfo
                    layout="2"
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
