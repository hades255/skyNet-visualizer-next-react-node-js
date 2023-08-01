import React from 'react';
import { useState } from 'react';
import InputField from '../../src/components/InputField';

const PasswordReset = () => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleEmailBlur = () => {
    if (!isValidEmail(email)) {
      setErrorMessage('Invalid email format');
    } else {
      setErrorMessage('');
    }
  };

  const isValidEmail = (email: string) => {
    // Basic email validation regex pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  //check page state
  const [isEmailsent, setIsEmailsent] = useState(false);

  const handleButtonClick = () => {
    setIsEmailsent(true);
  };

  return (
    <div>
      {isEmailsent ? (
        <div className="bg-white">
          <div className="flex justify-center items-center h-screen max-h-screen md:px-0 px-8">
            <div className="w-full md:w-6/12 mx-auto -mt-20">
              <p className="text-2xl md:text-5xl font-bold">Check your Email</p>
              <p className="text-base md:text-xl text-[#000000A3] mt-4 md:mt-10">
                please check your inbox for an email from us. This email will
                contain a unique link that will allow you to reset your password
                securely. <br />
                <br />
                Didsn&nbsp;t get the email ? check your junk or spam folders or
                request another link{' '}
                <a className="cursor-pointer underline opacity-100 text-[#261229]">
                  here
                </a>{' '}
                <br />
                <br />
                Please note that this link will expire after a certain period
                for security reasons.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white">
          <div className="flex justify-center items-center h-screen max-h-screen md:px-0 px-8">
            <div className="w-full md:w-6/12 mx-auto ">
              <p className="text-2xl md:text-5xl font-bold">
                Reset your Password
              </p>
              <p className="text-base md:text-xl text-[#000000A3] mt-4 md:mt-10">
                To begin the password recovery process, please enter the email
                address associated with your resume account in the field below.
                <br /> <br /> We'll send you an email with instructions on how
                to reset your password.
              </p>
              <div className="h-24 mt-4 md:mt-10">
                <InputField
                  className="h-12 px-4 border border-graylight2 rounded"
                  type="text"
                  id="email"
                  name="email"
                  label="Your email address"
                  placeholder="Email address"
                  onChange={handleEmailChange}
                  onBlur={handleEmailBlur}
                  required
                />
                {errorMessage && (
                  <p className="error text-sm text-red-600">{errorMessage}</p>
                )}
              </div>
              <button
                disabled={!isValidEmail(email)}
                onClick={handleButtonClick}
                className={`transition duration-300 ease-in-out my-4 w-full h-12 px-4 py-2 font-bold text-white ${
                  isValidEmail(email)
                    ? 'bg-black'
                    : 'bg-[#A1A09F] cursor-not-allowed'
                }`}
              >
                RESET PASSWORD
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PasswordReset;
