import React from 'react';
import Subscribe from '../Subscribe';
import { useRouter } from 'next/router';
import logo from '../../assets/logo.svg';
import Image from 'next/image';

type Subcategory = {
  link: string;
  name: string;
};

type FooterLink = {
  category: string;
  subcategories: Subcategory[];
};

type FooterProps = {
  footerLinks: FooterLink[];
};

const Footer: React.FC<FooterProps> = ({ footerLinks }) => {
  const router = useRouter();

  // dont show header if its login page
  if (
    router.pathname.startsWith('/login') ||
    router.pathname.startsWith('/signUp') ||
    router.pathname.includes('/builder')
  ) {
    return null;
  }

  return (
    <div className="w-full bg-footerColor py-14">
      <div className="flex flex-col max-w-screen-xl mx-auto text-white md:justify-between">
        {/* <div className="flex flex-row justify-between w-full">
        <div>
          <p className="text-lg">Join our newsletter</p>
          <span className="text-sm">
            Stay updated on job trends & improve your profile.
          </span>
        </div>
        <div>
          <Subscribe
            subheading={'By subscribing you agree to with our Privacy Policy'}
          />
        </div>
      </div> */}
        {/* <hr className="w-full my-12" /> */}

        <div className="flex flex-col md:flex-row md:space-x-12">
          <div className="md:px-0 px-8 w-full md:w-1/3">
            <h1 className="text-4xl">Visualizer</h1>
            <p>
              Your Gateway to Success - Create, Customize, and Share Your
              Professional Resume with Confidence!"
            </p>
          </div>
          <footer className="px-8 w-full md:w-2/3">
            <nav className="flex flex-col md:flex-row justify-start md:justify-between">
              {footerLinks.map((category) => (
                <div key={category.category}>
                  <h3 className="uppercase my-3 text-base">
                    {category.category}
                  </h3>
                  <ul>
                    {category.subcategories.map((sub) => (
                      <li className="my-1" key={sub.link}>
                        <a className="text-sm hover:underline" href={sub.link}>
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
        <div className="flex flex-row justify-center space-x-4 w-full">
          <Image src={logo} alt="13" width={200} height={200} priority />
          <span>2023 Relume. All right reserved.</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
