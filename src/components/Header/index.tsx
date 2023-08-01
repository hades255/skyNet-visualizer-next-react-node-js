import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { isHeaderRequired } from '../../utils/generalUtils';
import Image from 'next/image';
import memberIcon from '../../assets/navigation/memberLogin.svg';
import crossIcon from '../../assets/navigation/cross.svg';
import logo from '../../assets/logo.svg';

type MenuItem = {
  title: string;
  subMenuItems: string[];
  id: number;
  href?: string;
};

type HeaderProps = {
  menuItems: MenuItem[];
};

const Header: React.FC<HeaderProps> = ({ menuItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleHamMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [showMenu, setShowMenu] = useState(false);
  const [selectedItem, setSelectedItem] = useState(0);
  const router = useRouter();

  // dont show header if its not required.. as its not required for couple of pages
  if (
    router.pathname.startsWith('/login') ||
    router.pathname.startsWith('/signUp') ||
    router.pathname.includes('/portfolio')
  ) {
    return null;
  }

  const toggleMenu = (id: number) => {
    id === selectedItem ? setSelectedItem(0) : setSelectedItem(id);
    setShowMenu(!showMenu);
  };
  const handleClick = () => {
    router.push(
      {
        pathname: '/login',
        query: { name: 'Someone', val: 'login' },
      },
      '/login'
    );
  };

  const handleSignUpClick = () => {
    router.push(
      {
        pathname: '/signUp',
        query: { name: 'Someone', val: 'login' },
      },
      '/signUp'
    );
  };

  return (
    <header
      className="flex items-center justify-center md:justify-between px-6 py-4 text-black bg-white"
      role="navigation"
    >
      <h1
        onClick={() => router.push('/')}
        tabIndex={1}
        className="text-lg font-bold hidden md:block hover:cursor-pointer"
      >
        <Image src={logo} alt="13" width={200} height={200} priority />
      </h1>

      <div className="flex">
        <nav className="flex items-center">
          <ul className=" items-center justify-center gap-6 hidden md:flex md:flex-row">
            <li className="relative px-3 cursor-pointer" key="builder">
              <a
                aria-label="builder"
                tabIndex={1}
                className="text-base hover:text-gray-400"
                onClick={() => router.push('/builder')}
              >
                Builder
              </a>
            </li>
            <li className="relative px-3 cursor-pointer" key="Pricing">
              <a
                aria-label="Pricing"
                tabIndex={1}
                className="text-base hover:text-gray-400"
                onClick={() => router.push('/pricing')}
              >
                Pricing
              </a>
            </li>
            {/* <li className="relative px-3 cursor-pointer" key="Blog">
              <a
                aria-label="Blog"
                tabIndex={1}
                className="text-base hover:text-gray-400"
                onClick={() => router.push('/pricing')}
              >
                Blog
              </a>
            </li> */}
            {menuItems.map((menuItem) => (
              <li
                className="relative w-max px-3 cursor-pointer"
                key={menuItem.title}
              >
                <a
                  aria-label={menuItem.title}
                  tabIndex={1}
                  className="text-base hover:text-gray-400"
                  onClick={() => toggleMenu(menuItem.id)}
                  href={menuItem?.href}
                >
                  {menuItem.title}
                </a>
                {/** no submenu for now */}
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:flex hidden items-center ">
          <button
            onClick={handleClick}
            tabIndex={1}
            aria-label="log in"
            type="button"
            className="px-5 w-max py-2 ml-8 text-secondary hover:bg-blue-600"
          >
            Log in
          </button>
          <button
            onClick={handleSignUpClick}
            tabIndex={1}
            aria-label="sign up"
            type="button"
            className="px-5 py-2 ml-4 text-white bg-secondary hover:bg-blue-600"
          >
            Signup
          </button>
        </div>

        <div className="w-full">
          <div className="flex md:hidden items-center justify-center w-full">
            <h1 onClick={() => router.push('/')} tabIndex={1}>
              <Image src={logo} alt="13" width={200} height={200} priority />
            </h1>
          </div>
          <button
            className="md:hidden hamburger absolute top-5 right-4 z-50 flex items-center justify-center w-12 h-12 rounded-full  text-white focus:outline-none"
            onClick={toggleHamMenu}
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  d="M6 18L18 6M6 6l12 12"
                  stroke="#000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              ) : (
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="#000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              )}
            </svg>
          </button>

          {isMenuOpen && (
            <div className="md:hidden menu-overlay fixed inset-0 flex items-center justify-center bg-black bg-opacity-20 z-40">
              <div className="menu w-full max-w-xs bg-white">
                <button
                  className=" close-button absolute top-4 right-4 z-50 flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 text-white focus:outline-none"
                  onClick={toggleHamMenu}
                >
                  <svg
                    className="md:hidden w-4 h-4 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 18L18 6M6 6l12 12"
                      stroke="#ffffff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <nav
                  className={
                    'menu fixed top-0 left-0 w-full h-full bg-white z-50 transform  transition-transform duration-300 ease-in-out'
                  }
                >
                  <h1 className="pt-4 pb-3 text-xl font-bold text-center text-[#261229] w-full  shadow-lg ">
                    <Image
                      onClick={() => router.push('/')}
                      src={logo}
                      alt="13"
                      width={200}
                      height={200}
                      priority
                    />
                  </h1>
                  <div>
                    <Link href="/creative-writing" onClick={toggleHamMenu}>
                      <div className="block px-6 text-lg text-black  font-bold cursor-pointer">
                        RESUME
                      </div>
                    </Link>
                    <Link href="/builder" onClick={toggleHamMenu}>
                      <div className="block px-6 text-lg text-black  font-bold cursor-pointer">
                        BUILDER
                      </div>
                    </Link>
                    <Link href="/pricing" onClick={toggleHamMenu}>
                      <div className="block px-6 text-lg text-black  font-bold cursor-pointer">
                        PRICING
                      </div>
                    </Link>
                    <Link href="/blog" onClick={toggleHamMenu}>
                      <div className="block px-6 text-lg text-black  font-bold cursor-pointer">
                        BLOG
                      </div>
                    </Link>
                    <Link href="/creative-writing" onClick={toggleHamMenu}>
                      <div className="block px-6 text-lg text-black  font-bold cursor-pointer">
                        CAREER ADVICE
                      </div>
                    </Link>
                    <div className="flex">
                      <Image
                        className="ml-6"
                        src={memberIcon}
                        width={22}
                        height={22}
                        alt="account"
                      />
                      <Link href="/login" onClick={toggleHamMenu}>
                        <div className="block pl-2 text-lg text-black font-bold cursor-pointer">
                          MEMBER LOGIN
                        </div>
                      </Link>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          )}

          {/* Rest of your component */}
        </div>
      </div>
    </header>
  );
};

export default Header;
