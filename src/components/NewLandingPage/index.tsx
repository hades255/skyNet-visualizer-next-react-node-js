import Image from 'next/image';
import { NextSeo } from 'next-seo';
import heroImageNew from '../../assets/heroImageNew.svg';
import aiSuggestions from '../../assets/aiSuggestions.svg';
import aiMockUpSuggestion from '../../assets/aiMockUpSuggestion.svg';
import aiMockUpFinalLeft from '../../assets/aiMockUpFinalLeft.svg';
import aiMockUpFinalRight from '../../assets/aiMockUpFinalRight.svg';

import { detailFeatures, faqs, footerLinks } from '../../constants/header';
import subHero from '../../assets/subHero.svg';
import ImageWithTitleSubtitle from '../ImageWithTitleSubtitle';
import Subscribe from '../Subscribe';
import { SEO } from '../../constants/seo';
import FeatureList from './FeatureList';
import { useRouter } from 'next/router';
import MessageSlider from '../MessageSlider';
import MovingImage from '../MovingImage';
import { useEffect, useState } from 'react';

type LandingProps = {
  heading: string;
  subheading: string;
  buttonText: string;
};

const messages = [
  'easy to use builder.',
  'Hassle-free AI driven builder.',
  'time and cost efficient builder.',
];

const NewLandingPage = ({ heading, subheading, buttonText }: LandingProps) => {
  const router = useRouter();
  const [parentHeight, setParentHeight] = useState(0);

  const handleGetStarted = () => {
    navigateToBuilder();
  };

  const navigateToBuilder = () => {
    router.push('/builder');
  };

  useEffect(() => {
    const handleResize = () => {
      const parent = document.getElementById('parent');
      if (parent) {
        const parentWidth = parent.offsetWidth;
        const desiredHeight = parentWidth * 0.5; // Adjust as needed
        setParentHeight(desiredHeight);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <NextSeo {...SEO} />
      <section className="font-dmsans w-full">
        <div className="bg-secondary">
          <div className="py-14 space-y-6 flex flex-col items-center max-w-screen-xl md:px-4 mx-auto md:justify-between px-10">
            <div className="flex flex-col items-center text-center md:text-left md:mt-6">
              <h1 className="text-center break-words text-xl md:text-5xl font-bold leading-tight text-white">
                Transform Your Resume from Ordinary to Extraordinary with
                <span className="text-textSecondary">
                  <MessageSlider messages={messages} />
                </span>
              </h1>
              <p className="text-center break-words flex justify-center  mt-9 text-xs md:text-xl text-white">
                {subheading}
              </p>
              <button
                onClick={handleGetStarted}
                tabIndex={1}
                className="text-xl md:w-64 w-full px-8 md:py-4 py-2 my-8 font-black rounded bg-gradient-to-r from-[#C99A40] to-[#FFA903] hover:bg-blue-700 text-white"
                data-testid="get-started-button"
              >
                {buttonText}
              </button>
            </div>
          </div>
        </div>

        <div
          style={{ height: `${parentHeight}px` }}
          id="parent"
          className="relative"
        >
          <div className="h-1/2 bg-secondary"></div>
          <Image
            src={heroImageNew}
            className="absolute inset-0 w-full h-full floatingImage"
            alt="Your Image"
            width={800}
            height={2000}
            id="image"
          />
        </div>
      </section>
      {/** first */}
      <div className="space-y-6 flex flex-col items-center max-w-screen-xl mx-auto md:justify-between py-14 px-8 md:px-4">
        {/* Left side */}
        <h1 className="text-base font-bold md:font-normal text-center md:text-4xl leading-tight text-black mb-8 md:mt-8">
          {'Create a Resume that is Professional and'}
          <p className="text-landingSubText"> you can be proud of</p>
        </h1>

        <div className="flex flex-col-reverse px-2 md:flex-row items-center md:justify-between md:space-x-8">
          <div className="space-y-6 w-full md:w-2/3 md:text-left">
            <div className="flex  items-left w-full">
              <h3 className="border-b  border-landingSubText text-base md:text-lg text-landingSubText">
                Create
              </h3>
            </div>
            <h2 className="md:text-3xl text-base font-bold text-black">
              Unlock Your Career Potential: Craft a Stellar Resume Today!
            </h2>
            <p className="text-xs md:text-lg">
              Increase your likelihood of securing your next interview with a
              top-notch resume that is meticulously formatted and highly
              adaptable. With the user-friendly builder provided by Visualizer,
              you can effortlessly create a visually appealing and
              professionally endorsed document in a matter of minutes! Take
              advantage of this opportunity and equip yourself with an
              outstanding resume that will captivate potential employers and set
              you apart from the competition.
            </p>
          </div>
          <div className="w-full flex justify-center items-center mt-8 md:w-1/2 md:mt-0">
            <Image
              className="floatingImage justify-center items-center"
              src={aiSuggestions}
              alt="world visualizer"
              width={400}
              height={400}
              data-testid="ai-suggestions-image"
            />
          </div>
        </div>
        {/* Right side */}
      </div>
      {/** second */}
      <div className="space-y-6 flex flex-col items-center max-w-screen-xl mx-auto md:justify-between py-14 px-10 md:px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between md:space-x-8">
          <div className="w-full flex items-center justify-center  md:w-1/2 md:mt-0">
            <Image
              src={aiMockUpSuggestion}
              alt="world visualizer"
              className="floatingImage hidden md:block"
              width={500}
              height={500}
              data-testid="ai-mockup-suggestion-image"
            />
            <Image
              src={aiMockUpSuggestion}
              alt="world visualizer"
              className="floatingImage mb-8"
              width={350}
              height={350}
              data-testid="ai-mockup-suggestion-image-mobile"
            />
          </div>
          <div className="space-y-6 w-full md:w-2/3 md:text-left">
            <div className="flex items-left w-full">
              <h3 className="border-b  border-landingSubText text-base md:text-lg text-landingSubText">
                Connect
              </h3>
            </div>
            <h2 className="md:text-3xl text-base font-bold text-black">
              Create Your Perfect Resume Anytime, Anywhere!
            </h2>
            <p className="text-xs md:text-lg">
              With our cutting-edge technology, you can effortlessly create a
              polished and professional resume on any device, be it your
              computer, tablet, or smartphone. Our user-friendly interface
              ensures a seamless experience, allowing you to customize your
              resume, select from stunning templates, and showcase your skills
              and experience with ease. Whether you're at home, on the go, or
              simply prefer the convenience of your preferred device, our Resume
              Builder is here to help you land your dream job. Start crafting
              your winning resume today and unlock a world of career
              opportunities!
            </p>
          </div>
        </div>
        {/* Right side */}
      </div>
      {/** third */}
      <div className="space-y-6 flex flex-col items-center max-w-screen-xl mx-auto md:justify-between py-14">
        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between md:space-x-12">
          <div className="space-y-6 w-full px-8 md:w-2/3 md:text-left">
            <div className="flex items-left w-full">
              <h3 className="border-b  border-landingSubText text-base md:text-lg text-landingSubText">
                Share
              </h3>
            </div>
            <h2 className="md:text-3xl text-base font-bold text-black">
              "Seamlessly Share Your Success: Create and Share Your Resume on
              Any Device with your Unique Link!"
            </h2>
            <p className="text-xs md:text-lg">
              we are equipped with a remarkable feature that sets it apart from
              the rest. Not only can you effortlessly create and customize your
              resume on any device, but you can also conveniently share it with
              potential employers using your unique link. No more worrying about
              file compatibility or email attachments! Simply generate your
              resume, personalize it to perfection, and share it instantly
              through a secure link. This innovative functionality ensures that
              your resume looks flawless and professional, regardless of the
              device your recipient uses to view it. Seamlessly showcase your
              skills and accomplishments, stand out from the competition, and
              maximize your chances of landing your dream job.
            </p>
          </div>
          <div className="flex px-4 md:px-0 md:justify-start w-full mt-8 md:w-1/2 md:mt-0 relative">
            <Image
              className="floatingImage md:block hidden"
              src={aiMockUpFinalLeft}
              alt="world visualizer"
              width={400}
              height={400}
              data-testid="ai-mockup-final-left-image"
            />
            <Image
              className="absolute left-50p floatingImage hidden md:block"
              src={aiMockUpFinalRight}
              alt="world visualizer"
              width={300}
              height={300}
              data-testid="ai-mockup-final-right-image"
            />

            <Image
              className="floatingImage md:hidden"
              src={aiMockUpFinalLeft}
              alt="world visualizer"
              width={220}
              height={220}
              data-testid="ai-mockup-final-left-image-mobile"
            />
            <Image
              className="absolute left-50p floatingImage md:hidden"
              src={aiMockUpFinalRight}
              alt="world visualizer"
              width={180}
              height={180}
              data-testid="ai-mockup-final-right-image-mobile"
            />
          </div>
        </div>
        {/* Right side */}
      </div>
      {/** fourth */}
      <div className=" relative items-center flex flex-col w-full mx-auto md:justify- py-14 pb-24">
        {/* <div
          className="flex flex-col-reverse md:flex-row md:items-center md:justify-between md:space-x-12"
          style={{ background: "url('/assets/subHero.svg')" }}
        > */}
        <Image
          className="h-full w-full absolute object-cover left-0 top-0 inset-0 z-index-0"
          src={subHero} // Path to your image
          alt="Description of the image"
        />
        <div className="relative w-full px-8 md:w-5/6 md:text-left">
          <div className="w-full md:w-2/3 space-y-6">
            <div className="flex w-full">
              <h3 className="mt-6 text-base md:text-lg text-landingSubText">
                Start making your dreams come true with visualizer
              </h3>
            </div>
            <h2 className=" md:text-3xl text-base font-bold text-white">
              "Transform Your Career Today: Get Our Resume Builder for Instant
              Results and Unparalleled Success!"
            </h2>
            <p className=" text-xs md:text-lg text-white">
              Why should you get it immediately? Because our Resume Builder is
              the ultimate game-changer that will revolutionize your job search.
              With its powerful features and user-friendly interface, you can
              create a compelling resume that will catch the attention of
              employers and land you interviews in no time. Get our Resume
              Builder now and unlock the path to unparalleled success!
            </p>
            <button
              onClick={handleGetStarted}
              tabIndex={1}
              className="md:w-64 w-full text-sm px-8 md:py-4 py-2 my-8 font-bold rounded bg-gradient-to-r from-[#C99A40] to-[#FFA903] hover:bg-blue-700 text-white"
              data-testid="build-resume-button"
            >
              Build my resume
            </button>
          </div>
        </div>
        {/* <div className="w-full px-4 md:px-0 flex items-center justify-center mt-8 md:w-1/2 md:mt-0">
          <Image
            className="floatingImage"
            src={aiSuggestions}
            alt="world visualizer"
            width={500}
            height={500}
          />
        </div> */}
        {/* </div> */}
        {/* Right side */}
      </div>
      {/** new features section */}
      <div className="space-y-6 flex flex-col items-center max-w-screen-xl mx-auto md:justify-between py-14">
        <h2 className=" text-secondary text-xl font-bold px-4 text-center md:text-3xl mb-16 mt-20">
          These are the features we designed to get you that Job
        </h2>
        <FeatureList
          detailFeatures={detailFeatures}
          data-testid="feature-list"
        />
        <div className="flex flex-row space-x-4 md:space-x-8">
          <button
            onClick={handleGetStarted}
            tabIndex={1}
            className="md:w-64  w-full px-8 md:py-4 py-1 my-8 font-bold  bg-gradient-to-r from-[#C99A40] to-[#FFA903] hover:bg-blue-700 text-white"
            data-testid="build-resume-button-2"
          >
            Build my resume
          </button>
          <button
            tabIndex={1}
            className="border border-black md:w-64 w-full px-8 md:py-4 py-1 my-8 font-bold text-black"
            data-testid="learn-more-button"
          >
            Learn more
          </button>
        </div>

        {/* Right side */}
      </div>

      {/** features section */}
      {/* <div className="flex flex-col items-center max-w-screen-xl mx-auto mt-8 md:flex-row md:justify-between py-14">
        <div className="text-center md:text-left">
          <h1 className="text-5xl font-bold leading-tight text-secondary">
            {'These are the features we designed to get you your DREAM JOB'}
          </h1>
          <p className="mt-4 text-lg text-black">
            {
              'Experience the Power of Our AI-Driven Portfolio Builder: Key Features That Set Us Apart'
            }
          </p>
          <div className="flex flex-row flex-wrap mt-8">
            {detailFeatures.map((feature, index) => {
              return (
                <div className="basis-1/2" key={index}>
                  <ImageWithTitleSubtitle
                    title={feature.title}
                    subtitle={feature.subtitle}
                    imageSrc={feature.imageSrc}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div> */}
      {/** frequently asked questions section */}
      {/* <div className="flex flex-col items-center max-w-screen-xl mx-auto mt-8 md:flex-row md:justify-between py-14">
        <div className="text-center md:text-left">
          <h1 className="text-5xl font-bold leading-tight text-center text-secondary">
            {'Frequently asked questions'}
          </h1>
          <p className="mt-4 text-lg text-center text-black">
            {
              'Frequently asked questions ordered by popularity. Given the placement of this FAQ'
            }
          </p>

          <div className="flex flex-col mt-8">
            {faqs.map((question, index) => {
              return (
                <div className="my-4" key={index}>
                  <div className="my-2 text-lg font-bold">{question.title}</div>
                  <p className="text-base">{question.answer}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div> */}
    </>
  );
};

export default NewLandingPage;
