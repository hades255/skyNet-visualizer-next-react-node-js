import React, { useState } from 'react';
import InputField from '../../src/components/InputField';
import Link from 'next/link';
import ThankYouPage from '../../src/components/ThankYouPage';

const ContactUs: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    // your logic goes here
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return <ThankYouPage />;
  }
  return (
    <div className="min-h-screen bg-white" data-testid="contact-page">
      {/* Hero section */}
      <div className="bg-blue-600 text-white contact-us-hero-texture py-24 bg-no-repeat">
        <div className="max-w-6xl m-auto space-y-10 md:px-0 px-4">
          <h1
            className="text-6xl text-portfolioPrimaryText"
            aria-label="Contact Us"
          >
            Contact Us
          </h1>
          <div className="text-white max-w-4xl">
            Welcome to our Contact Us page!. Please use the contact form below
            to reach out to us with your queries or concerns. Our dedicated team
            will review your message and respond to you as soon as possible. We
            strive to provide timely and personalized assistance to ensure your
            satisfaction.{' '}
          </div>
        </div>
      </div>

      {/* Main section */}
      <div className="max-w-md mx-auto overflow-hidden md:max-w-6xl">
        <div className="py-8 space-y-12 my-12 md:mx-0 mx-6">
          <div>
            <h2
              className="text-4xl font-semibold"
              aria-label="We’re here to help you out"
            >
              We’re here to help you out
            </h2>
            <p className="text-lg mt-4 text-gray-500">
              If you have any questions, just reach out to us and we’ll respond
              as soon as we can. Please provide as much information as possible.
            </p>
          </div>

          {/* Form */}
          <div className="mt-6 space-y-8">
            {/* Email input */}
            <InputField
              className="h-12 px-4 border border-graylight2 rounded-md bg-[#F9F9F9]"
              type="email"
              id="email"
              name="email"
              label="Your email address"
              placeholder="Email address"
              aria-label="Your email address"
              data-testid="email-field"
            />

            {/* Subject input */}
            <InputField
              className="h-12 px-4 border border-graylight2 rounded-md bg-[#F9F9F9]"
              type="text"
              id="subject"
              name="subject"
              label="Subject"
              placeholder="what is the issue you would like to address"
              aria-label="Subject"
              data-testid="subject-field"
            />

            {/* Message textarea */}
            <div className="mt-6">
              <label className="block text-md font-medium text-gray-700">
                Description
              </label>
              <textarea
                name="message"
                rows={7}
                className="resize-none text-sm p-4 border bg-[#F9F9F9] border-graylight2 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full md:text-md border-gray-300 rounded-md"
                placeholder="Share more about your issue"
                aria-label="Share more about your issue"
                data-testid="message-field"
              />
            </div>

            <div className="flex space-x-2">
              <input
                className="h-6 w-6 border border-graylight2"
                type="checkbox"
                id="checkbox_checkout"
                name="checkbox_checkout"
                aria-label="Agreement checkbox"
                data-testid="agreement-checkbox"
              />
              <label className="text-[#212123]" htmlFor="checkbox_checkout">
                By submitting this form, you confirm that you have read and
                agree to Visualizers{' '}
                <Link className="underline" href="/legal">
                  {' '}
                  Terms of Service
                </Link>{' '}
                and
                <Link className="underline" href="/legal">
                  {' '}
                  Privacy Statement
                </Link>
              </label>
            </div>
            {/* Send button */}
            <div className="mt-6">
              <button
                onClick={handleClick}
                type="button"
                className="text-black border border-black hover:bg-[#261229] w-24 flex justify-center py-2 px-4 rounded-sm text-sm font-medium hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                aria-label="Send Button"
                data-testid="send-button"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;
