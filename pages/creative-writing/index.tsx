import React from 'react';
import SuccessfulTaskCompleted from '../../src/assets/SuccessfulTaskCompleted.svg';
import Image from 'next/image';

interface Section {
  title: string;
  image: string;
  subtitle: string;
}

const sections: Section[] = [
  {
    title: 'Section 1 Title',
    image: '/path/to/image1.jpg',
    subtitle: 'Section 1 Subtitle',
  },
  {
    title: 'Section 2 Title',
    image: '/path/to/image2.jpg',
    subtitle: 'Section 2 Subtitle',
  },
  {
    title: 'Section 3 Title',
    image: '/path/to/image3.jpg',
    subtitle: 'Section 3 Subtitle',
  },
  {
    title: 'Section 2 Title',
    image: '/path/to/image2.jpg',
    subtitle: 'Section 2 Subtitle',
  },
  {
    title: 'Section 3 Title',
    image: '/path/to/image3.jpg',
    subtitle: 'Section 3 Subtitle',
  },
  {
    title: 'Section 3 Title',
    image: '/path/to/image3.jpg',
    subtitle: 'Section 3 Subtitle',
  },
  // Add more sections here as needed
];

const renderSections = (sections: Section[]) => {
  return sections.map((section, index) => (
    <div key={index} className="bg-white p-6 rounded-md shadow-md">
      <h3 className="text-xl font-bold mb-2">{section.title}</h3>
      <img
        src={section.image}
        alt={`Section ${index + 1} Image`}
        className="w-full mb-4 rounded-md"
      />
      <p className="text-gray-600">{section.subtitle}</p>
    </div>
  ));
};

const PortfolioWriting: React.FC = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <h1 className="text-3xl font-bold text-center mb-8">
          Build Your Professional Online Profile with Ease
        </h1>
        <p className="text-lg text-center text-gray-600 mb-8">
          Say goodbye to time-consuming portfolio creation. With our innovative
          SAAS, you can quickly build a stunning online profile based on your
          timeline years, saving valuable time for what truly matters.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {renderSections(sections)}
        </div>
        <div className="flex flex-col sm:flex-row justify-center mb-8 px-12">
          <a
            href="#create-profile"
            className="text-2xl bg-buttonPrimary hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full mb-4 sm:mb-0 sm:mr-4 text-center"
          >
            Create My Profile Today
          </a>
          <a
            href="#try-saas"
            className="text-2xl  bg-transparent border border-blue-500 hover:bg-blue-500 text-blue-500 hover:text-white font-bold py-3 px-6 rounded-full text-center"
          >
            Try Our SAAS Today
          </a>
        </div>

        <div className="flex align-center justify-center">
          <Image
            src={SuccessfulTaskCompleted}
            width={500}
            height={500}
            alt="image"
          />
        </div>
        <div className="bg-white rounded-sm  px-8 py-6 mb-8">
          <h2 className="text-2xl font-bold text-center mb-4">
            Save Time, Invest in Learning and Skill Development
          </h2>
          <p className="text-lg text-center text-gray-600">
            Our portfolio builder streamlines the process, so you can create a
            captivating profile in minutes. Save hours of manual formatting and
            design work, and instead focus on expanding your knowledge, gaining
            new skills, and advancing your career.
          </p>
        </div>
        <div className="bg-white rounded-sm  px-8 py-6 mb-8">
          <h2 className="text-2xl font-bold text-center mb-4">
            Showcase Your Achievements with an Elegant Timeline Layout
          </h2>
          <p className="text-lg text-center text-gray-600">
            Our portfolio builder's unique timeline-based approach allows you to
            showcase your professional journey in a visually appealing way.
            Capture attention with a sleek and organized layout that highlights
            your accomplishments, experiences, and growth over the years.
          </p>
        </div>
        <div className="bg-white rounded-sm  px-8 py-6 mb-8">
          <h2 className="text-2xl font-bold text-center mb-4">
            Highlight Your Impact on Company Success
          </h2>
          <p className="text-lg text-center text-gray-600">
            Recruiters are interested in knowing the impact you brought to the
            company with your technical expertise. Our SAAS helps you
            effectively communicate the results and achievements you
            accomplished using various technologies. Demonstrate how you
            improved processes, optimized systems, or contributed to the
            company's growth, making your profile stand out to potential
            employers.
          </p>
        </div>
        <div className="bg-white rounded-sm  px-8 py-6 mb-8">
          <h2 className="text-2xl font-bold text-center mb-4">
            Stand Out from the Crowd and Boost Your Career Opportunities
          </h2>
          <p className="text-lg text-center text-gray-600">
            A well-crafted online portfolio sets you apart from other candidates
            and increases your chances of landing your dream job or securing
            exciting freelance opportunities. Our SAAS equips you with the tools
            you need to create a powerful online presence that captivates
            employers and clients.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioWriting;
