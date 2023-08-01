import React, { useEffect } from 'react';
import Link from 'next/link';
import facebookWithoutBackgrd from '../../../src/assets/socialMedia/facebookWithoutBackgrd.svg';
import instagramNew from '../../../src/assets/socialMedia/instagramNew.svg';
import linkedinNew from '../../../src/assets/socialMedia/linkedinNew.svg';
import Image from 'next/image';
import { useRouter } from 'next/router';

const ThankYouPage: React.FC = () => {
  const router = useRouter();
  const handleGoToHomePage = () => {
    router.push('/');
  };
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);
  return (
    <div className="bg-white flex flex-col items-center justify-center min-h-screen py-2">
      <div className="flex flex-col items-center justify-center max-w-3xl p-10">
        {/* Thank you section */}
        <div className="md:mt-20 mt-8 flex flex-col items-center space-y-4">
          <h1 className="text-5xl font-bold text-center">
            Thank you for reaching out!
          </h1>
          <span className="text-lg text-center text-[#212123]">
            We've successfully received your message and appreciate you for
            taking the time to write to us.
          </span>
        </div>

        {/* Button section */}
        <div className="md:my-8 my-4">
          <button
            onClick={handleGoToHomePage}
            className="md:w-64 w-full px-8 md:py-4 py-2 my-8 font-bold rounded bg-gradient-to-r from-[#C99A40] to-[#FFA903] hover:bg-blue-700 text-white"
            type="button"
          >
            Go to Home page
          </button>
        </div>
        {/* Social media section */}
        <div className="flex space-x-6">
          <Link href="#">
            <Image
              src={facebookWithoutBackgrd}
              alt="facebook"
              width={25}
              height={25}
            />
          </Link>
          <Link href="#">
            <Image src={instagramNew} alt="instagram" width={25} height={25} />
          </Link>
          <Link href="#">
            <Image src={linkedinNew} alt="linkedinNew" width={25} height={25} />
          </Link>
        </div>
        <p className="mt-8 text-[#212123] text-sm max-w-xl text-center">
          Your message is important to us. Our team is currently reviewing your
          query and we will get back to you as soon as possible. At Visualizer,
          we're committed to providing exceptional service and support. While
          you wait, feel free to explore more about our features and services.
          With Visualizer, you can create a standout portfolio and showcase your
          skills with the power of AI. We encourage you to visit our FAQ page or
          blog for more insights and tips to enhance your Visualizer experience.
        </p>

        {/* <p>
          Thank you for connecting with Visualizer. Your journey to create a
          compelling portfolio and showcase your unique skills with the power of
          AI starts here. While we work to address your query, immerse yourself
          in the world of opportunities with Visualizer. Remember, every great
          story starts with a single step!
        </p> */}
        {/* Links section */}
        <div className="mt-20 flex md:flex-row flex-col md:space-x-8 space-x-0 items-center md:space-y-0 space-y-4">
          <Link className="underline" href="/builder">
            Build my Portfolio
          </Link>
          <Link className="underline" href="signUp">
            Sign up
          </Link>
          <Link className="underline" href="/login">
            Login
          </Link>
          <Link className="underline" href="/legal">
            Terms and Conditions
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
