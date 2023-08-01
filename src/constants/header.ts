import fileFormat from '../assets/features/fileFormat.svg';
import settings from '../assets/features/settings.svg';
import unique from '../assets/features/unique.svg';
import facebook from '../assets/socialMedia/facebook.svg';
import profile_1 from '../assets/profileImages/profile_1.svg';

import facebook_1 from '../assets/socialMedia/theme1/facebook_1.svg';
import instagram_1 from '../assets/socialMedia/theme1/instagram_1.svg';
import linkedIn_1 from '../assets/socialMedia/theme1/linkedIn_1.svg';
import phone_1 from '../assets/socialMedia/theme1/phone_1.svg';
import twitter_1 from '../assets/socialMedia/theme1/twitter_1.svg';

type MenuItem = {
  title: string;
  subMenuItems: string[];
  id: number;
  href?: string;
};

export const menuItems: MenuItem[] = [
  {
    title: 'Resume',
    id: 1,
    href: '/creative-writing',
    subMenuItems: ['Submenu 1.1', 'Submenu 1.2', 'Submenu 1.3'],
  },
  {
    title: 'Career Advice',
    id: 2,
    href: '/creative-writing',
    subMenuItems: ['Submenu 2.1', 'Submenu 2.2', 'Submenu 2.3'],
  },
];

export const landingPage = {
  heading:
    'Transform Your Resume from Ordinary to Extraordinary with Our Easy-to-Use Builder',
  subheading:
    'Not sure what to include on your resume? No problem! Our resume builder includes a comprehensive list of pre-written bullet points and phrases to choose from, so you can showcase your skills and achievements with ease.',
  buttonText: 'Create my profile',
};

export const landingPageFeatures = [
  {
    src: fileFormat,
    alt: 'Export in multiple file formats',
    caption: 'Export in multiple file formats',
  },
  {
    src: settings,
    alt: 'Customize your resume to your liking',
    caption: 'Customize your resume to your liking',
  },
  {
    src: unique,
    alt: 'Create a resume that stands out from the crowd with our exclusive AI',
    caption:
      'Create a resume that stands out from the crowd with our exclusive AI',
  },
];

export const detailFeatures = [
  {
    imageSrc: settings,
    title: 'AI-Powered Portfolio Builder',
    subtitle:
      'Our fast, secure, AI-powered tool creates professional portfolios, automating the process and saving you time.',
  },
  {
    imageSrc: settings,
    title: 'Intelligent Template Recommendation',
    subtitle:
      'Our AI quickly identifies industry-standard templates, ensuring your portfolio alignment with professional benchmarks.',
  },
  {
    imageSrc: settings,
    title: 'One-Click Portfolio Sharing',
    subtitle:
      'Our secure one-click sharing makes disseminating your portfolio easy and quick, maintaining confidentiality.',
  },
  {
    imageSrc: settings,
    title: 'Dynamic Color Customization',
    subtitle:
      'Customize template colors swiftly. Our AI suggests optimal combinations to enhance readability and aesthetics.',
  },
  {
    imageSrc: settings,
    title: 'Automatic Content Update',
    subtitle:
      'Our AI securely and promptly updates your portfolio with your latest achievements, keeping it current and relevant.',
  },
  {
    imageSrc: settings,
    title: 'Skills & Endorsement Highlighter',
    subtitle:
      'AI-driven feature promptly highlights your skills and endorsements, accentuating the most relevant ones.',
  },
  {
    imageSrc: settings,
    title: 'AI Content Review',
    subtitle:
      'Our AI swiftly reviews portfolio content, suggesting grammar, clarity, and impact improvements to bolster your profile.',
  },
  {
    imageSrc: settings,
    title: 'Multimedia Integration',
    subtitle:
      'Easily and swiftly integrate multimedia content to enrich your portfolio and make it more engaging and vibrant.',
  },
  {
    imageSrc: settings,
    title: 'Feedback Analyzer',
    subtitle:
      'Our AI rapidly analyzes received feedback, providing insights for portfolio improvement and enhancing effectiveness.',
  },
  {
    imageSrc: settings,
    title: 'Secure Portfolio Sharing',
    subtitle:
      'Share your portfolio securely with our privacy controls, ensuring only intended recipients access your information.',
  },
];

export const faqs = [
  {
    id: 1,
    title: 'How does your AI-driven portfolio builder work?',
    answer:
      'Our AI-driven portfolio builder uses machine learning algorithms to analyze your resume and suggest the most relevant skills, experiences, and achievements to highlight in your profile.',
  },
  {
    id: 2,
    title: 'Can I customize my profile after it has been created?',
    answer:
      'Yes, you can easily customize your profile after it has been created. Our platform allows you to edit, add, or remove any information as per your preference.',
  },
  {
    id: 3,
    title: 'What kind of professionals can use your portfolio builder?',
    answer:
      'Our platform is designed to cater to all kinds of professionals, from entry-level to experienced professionals across various industries.',
  },
  {
    id: 4,
    title: 'How secure is my personal information on your platform?',
    answer:
      'We take data privacy and security very seriously. Your personal information is securely stored and encrypted to protect it from unauthorized access.',
  },
  {
    id: 5,
    title: 'Can I share my profile with potential employers or recruiters?',
    answer:
      'Yes, you can easily share your profile with potential employers or recruiters through a link or by downloading a PDF version of your profile.',
  },
  {
    id: 6,
    title: 'Is your platform free to use?',
    answer:
      'We offer both free and premium plans. Our free plan allows you to create a basic profile, while our premium plan offers additional features such as custom branding and analytics.',
  },
  {
    id: 7,
    title: 'How long does it take to create a profile using your platform?',
    answer:
      'Creating a profile on our platform takes just a few minutes. All you need to do is add details which are curated to create best version of your resume and our AI will assist in the rest of your journey.',
  },
];
export const footerLinks = [
  {
    category: 'Website',
    subcategories: [
      { name: 'Home', link: '/' },
      { name: 'Pricing', link: '/pricing' },
      { name: 'Blog', link: '/blog' },
      { name: 'Resume', link: '/blog' },
    ],
  },
  {
    category: 'Features',
    subcategories: [
      { name: 'Resume', link: '/builder' },
      { name: 'Blog', link: '/blog' },
    ],
  },
  {
    category: 'Resources',
    subcategories: [
      { name: 'Contact Us', link: '/contact-us' },
      { name: 'Product Updates', link: '/blog' },
    ],
  },
  {
    category: 'Access',
    subcategories: [
      { name: 'Login', link: '/login' },
      { name: 'Sign up', link: '/signUp' },
    ],
  },
  {
    category: 'Legal',
    subcategories: [
      { name: 'Terms', link: '/legal' },
      { name: 'Privacy', link: '/legal' },
    ],
  },
];

//PORTFOLIO PAGE

export const profileProps = {
  profileName: 'John Doe',
  designation: 'Software Engineer',
  profileSummary:
    'Accomplished QA tester with 1+ years of experience. My experience has equipped me with a strong understanding of software testing methodologies and the ability to work collaboratively with cross-functional teams to deliver high-quality software products',
  socialMediaLinks: [
    {
      platform: 'Twitter',
      link: 'https://twitter.com/johndoe',
      userName: 'johndoe',
    },
    {
      platform: 'LinkedIn',
      link: 'https://www.linkedin.com/in/johndoe',
      userName: 'johndoe',
    },
    {
      platform: 'Instagram',
      link: 'https://www.linkedin.com/in/johndoe',
      userName: 'johndoe',
    },
    {
      platform: 'Facebook',
      link: 'https://www.linkedin.com/in/johndoe',
      userName: 'johndoe',
    },
  ],
  profileImg: {
    src: profile_1,
    alt: 'Profile picture of John Doe',
    title: 'John Does profile picture',
  },
};

export const socialMediaLogosNew: string[] = [
  'Twitter',
  'Instagram',
  'Link',
  'Portfolio',
];

type SocialMediaList = {
  title: string;
  imageUrl?: any;
};

export const socialMediaLogos: SocialMediaList[] = [
  {
    title: 'Twitter',
    imageUrl: twitter_1,
  },
  {
    title: 'Instagram',
    imageUrl: instagram_1,
  },
  {
    title: 'Facebook',
    imageUrl: facebook_1,
  },
  {
    title: 'Portfolio',
    imageUrl: facebook,
  },
  {
    title: 'LinkedIn',
    imageUrl: linkedIn_1,
  },
  {
    title: 'PhoneNumber',
    imageUrl: phone_1,
  },
];

//pricing plans

export const plans = [
  {
    id: 1,
    name: 'Monthly',
    tag: 'Pay as you go',
    price: 9.99,
    description: 'Billed monthly',
    cta: 'Subscribe Now',
    checkoutSummary:
      'You will be charged $9.99 monthly for the Pay as you go plan, billed each month. Taxes are included if applicable',
  },
  {
    id: 2,
    name: 'Quarterly',
    tag: 'Steady Savings',
    price: 27.99,
    description: 'Billed quarterly (Save 7%)',
    cta: 'Save Now',
    checkoutSummary:
      'You will be charged $27.99 quarterly for the Steady Savings plan, offering you a 7% savings. This will be billed every 3 months. Taxes are included if applicable.',
  },
  {
    id: 3,
    name: 'Bi-Yearly',
    tag: 'Big Discounts',
    price: 49.99,
    description: 'Billed every 6 months (Save 17%)',
    cta: 'Sign Up and Save',
    checkoutSummary:
      'You will be charged $49.99 every 6 months for the Big Discounts plan, offering you a 17% savings. This will be billed bi-yearly. Taxes are included if applicable.',
  },
  {
    id: 4,
    name: 'Yearly',
    price: 89.99,
    tag: 'Enterprise plan',
    description: 'Billed yearly (Save 25%)',
    cta: 'Join Now and Save',
    checkoutSummary:
      'You will be charged $89.99 annually for the Mega Savings plan, offering you a 25% savings. This will be billed yearly. Taxes are included if applicable.',
  },
];

export const pricingPage = {
  title: 'Choose your plan',
  subTitle:
    'Connect with Confidence: Showcase Your Best Work with Our Portfolio Builder',
};

/**
 * privacy policy
 */

export const privacyPolicy = [
  {
    title: 'Information Collection and Use',
    description:
      'We may collect personal information such as your name, email address, and phone number when you sign up for our services or contact us for support. We use this information to provide and improve our services, communicate with you, and respond to your inquiries and requests.',
  },
  {
    title: 'Data Security',
    description:
      'We take reasonable measures to protect your personal information from unauthorized access, disclosure, and misuse. However, no data transmission over the internet or electronic storage system can be guaranteed to be completely secure, so we cannot guarantee absolute security of your information.',
  },
  {
    title: 'Information Sharing',
    description:
      'We do not share your personal information with third parties unless required by law or to fulfill our services to you. We may share non-personal information for analytical or marketing purposes.',
  },
  {
    title: 'Third-Party Links',
    description:
      'Our services may contain links to third-party websites or services. We are not responsible for the privacy practices or content of these websites or services, so we recommend that you review their privacy policies before using them.',
  },
  {
    title: 'Changes to This Policy',
    description:
      'We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on our website. We encourage you to review this policy periodically for any changes.',
  },
  {
    title: 'Contact Us',
    description:
      'If you have any questions or concerns about this privacy policy, please contact us at [insert contact information].',
  },
];

export const skillsDummyData = [
  {
    percentage: 25,
    size: 36,
    color: 'portfolioPrimary',
    bgColor: 'portfolioSecondary',
    title: 'Adaptabilty',
  },
  {
    percentage: 50,
    size: 36,
    color: 'portfolioPrimary',
    bgColor: 'portfolioSecondary',
    title: 'adadadadasdsa',
  },
  {
    percentage: 55,
    size: 36,
    color: 'portfolioPrimary',
    bgColor: 'portfolioSecondary',
    title: 'adddadds',
  },
  {
    percentage: 95,
    size: 36,
    color: 'portfolioPrimary',
    bgColor: 'portfolioSecondary',
    title: 'asddas',
  },
  {
    percentage: 85,
    size: 36,
    color: 'portfolioPrimary',
    bgColor: 'portfolioSecondary',
    title: 'punctuality',
  },
  {
    percentage: 75,
    size: 36,
    color: 'portfolioPrimary',
    bgColor: 'portfolioSecondary',
    title: 'curious',
  },
];

export const vitals = [
  {
    title: 'Tile 1',
    description: 'This is the description of Tile 1.',
    height: '1',
  },
  {
    title: 'Tile 2',
    description: 'This is the description of Tile 2.',
    height: '2',
  },
  {
    title: 'Tile 3',
    description: 'This is the description of Tile 3.',
    height: '1',
  },
  {
    title: 'Tile 9',
    description: 'This is the description of Tile 3.',
    height: '1',
  },
  {
    title: 'Tile 4',
    description: 'This is the description of Tile 3.',
    height: '2',
  },
  {
    title: 'Tile 5',
    description: 'This is the description of Tile 3.',
    height: '1',
  },
  {
    title: 'Tile 7',
    description: 'This is the description of Tile 3.',
    height: '1',
  },
  // Add more tiles as needed
];
