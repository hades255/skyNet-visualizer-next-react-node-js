import Image from 'next/image';
import { NextSeo } from 'next-seo';
import heroImageNew from '../../assets/heroImageNew.svg';
import worldLink from '../../assets/worldLink.svg';
import samplePortfolio from '../../assets/samplePortfolio.svg';
import ImageWithCaptionList from '../ImageWithCaptionList';
import {
  landingPageFeatures,
  detailFeatures,
  faqs,
  footerLinks,
} from '../../constants/header';
import skeleton from '../../assets/features/skeleton.svg';
import ImageWithTitleSubtitle from '../ImageWithTitleSubtitle';
import Subscribe from '../../components/Subscribe';
import { SEO } from '../../constants/seo';
import logo from '../../assets/logo.svg';

type LandingProps = {
  heading: string;
  subheading: string;
  buttonText: string;
};

function LandingPage({ heading, subheading, buttonText }: LandingProps) {
  return (
    <>
      <NextSeo {...SEO} />
      <section className="w-full bg-secondary py-14">
        <div className="flex flex-col items-center max-w-screen-xl px-4 mx-auto md:flex-row md:justify-between">
          {/* Left side */}
          <div className="w-2/3 text-center md:text-left">
            <h1 className="text-5xl font-bold leading-tight text-textSecondary">
              {heading}
            </h1>
            <p className="mt-8 text-2xl text-white">{subheading}</p>
            <button
              tabIndex={1}
              className="px-8 py-4 mt-8 font-bold rounded bg-buttonPrimary hover:bg-blue-700 text-secondary"
            >
              {buttonText}
            </button>
          </div>

          {/* Right side */}
          <div className="w-1/3 mt-8 md:w-1/2 md:mt-0">
            <Image
              src={heroImageNew}
              alt="Hero Image visualizer"
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>
      {/** link section */}
      <div className="flex flex-col items-center max-w-screen-xl mx-auto md:flex-row md:justify-between py-14">
        {/* Left side */}
        <div className="w-2/3 text-center md:text-left">
          <h1 className="text-5xl font-bold leading-tight text-textSecondary">
            {'Share your resume with Visualizer.me’s customizable link'}
          </h1>
          <p className="mt-8 text-2xl text-black">
            {
              'Maximize your career potential with our AI-powered resume builder. Visualize your skills and past experiences with interactive timelines to showcase your strengths.'
            }
          </p>
          <button
            tabIndex={1}
            className="px-8 py-4 mt-8 font-bold text-white rounded bg-secondary hover:bg-blue-700"
          >
            {buttonText}
          </button>
        </div>

        {/* Right side */}
        <div className="w-1/3 mt-8 ml-4 md:w-1/2 md:mt-0">
          <Image
            src={worldLink}
            alt="world visualizer"
            width={500}
            height={500}
          />
        </div>
      </div>
      {/** choose your style section */}
      <div className="flex flex-col items-center max-w-screen-xl px-4 mx-auto mt-8 md:flex-row md:justify-between">
        <div className="w-1/3 text-center md:text-left">
          <h3 className="text-2xl font-bold leading-tight text-textSecondary">
            {'Choose the best look For your resume'}
          </h3>
          <p className="mt-8 text-sm text-black">
            {
              'Maximize your career potential with our AI-powered resume builder. Visualize your skills and past experiences with interactive timelines to showcase your strengths.'
            }
          </p>
        </div>
        <div className="w-1/3 mx-6 mt-8 md:mt-0">
          <Image
            src={samplePortfolio}
            alt="Sample products visualizer"
            width={500}
            height={500}
          />
        </div>
        <div className="w-1/3 mt-8 md:mt-0">
          <h3 className="text-2xl font-bold leading-tight text-textSecondary">
            {'Medium length section heading goes here'}
          </h3>
          <p className="mt-8 text-sm text-black">
            {
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.'
            }
          </p>
          <ImageWithCaptionList className="mt-4" images={landingPageFeatures} />
        </div>
      </div>
      {/** skeleton section */}
      <div className="flex flex-col items-center max-w-screen-xl mx-auto mt-8 md:flex-row md:justify-between py-14">
        {/* Left side */}
        <div className="w-2/3 text-center md:text-left">
          <h1 className="text-5xl font-bold leading-tight text-textSecondary">
            {'No need to find the right words thanks to our powerful AI'}
          </h1>
          <p className="mt-8 text-2xl text-black">
            {
              'Maximize your career potential with our AI-powered resume builder. Visualize your skills and past experiences with interactive timelines to showcase your strengths.'
            }
          </p>
          <button
            tabIndex={1}
            className="px-8 py-4 mt-8 font-bold text-white rounded bg-secondary hover:bg-blue-700"
          >
            {buttonText}
          </button>
        </div>

        {/* Right side */}
        <div className="w-1/3 mt-8 ml-4 md:w-1/2 md:mt-0">
          <Image
            src={skeleton}
            alt="world visualizer"
            width={500}
            height={500}
          />
        </div>
      </div>
      {/** features section */}
      <div className="flex flex-col items-center max-w-screen-xl mx-auto mt-8 md:flex-row md:justify-between py-14">
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
      </div>
      {/** frequently asked questions section */}
      <div className="flex flex-col items-center max-w-screen-xl mx-auto mt-8 md:flex-row md:justify-between py-14">
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
      </div>
      {/** frequently asked questions section */}
      <div className="w-full bg-footerColor py-14">
        <div className="flex flex-col max-w-screen-xl mx-auto text-white md:justify-between">
          <div className="flex flex-row justify-between w-full">
            <div>
              <p className="text-lg">Join our newsletter</p>
              <span className="text-sm">
                Stay updated on job trends & improve your profile.
              </span>
            </div>
            <div>
              <Subscribe
                subheading={
                  'By subscribing you agree to with our Privacy Policy'
                }
              />
            </div>
          </div>
          <hr className="w-full my-12" />
          <div>
            <footer>
              <nav className="flex flex-row justify-between">
                {footerLinks.map((category) => (
                  <div key={category.category}>
                    <h3 className="my-3 text-base">{category.category}</h3>
                    <ul>
                      {category.subcategories.map((sub) => (
                        <li className="my-1" key={sub.link}>
                          <a
                            className="text-sm hover:underline"
                            href={sub.link}
                          >
                            {sub.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </nav>
            </footer>
          </div>
          <hr className="w-full my-12" />
          <div className="flex flex-row justify-between w-full">
            <Image src={logo} alt="13" width={200} height={200} priority />
            <span>2023 Relume. All right reserved.</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
