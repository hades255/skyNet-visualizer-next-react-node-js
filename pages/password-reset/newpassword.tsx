import React from 'react';
import { useState } from 'react';
import InputField from '../../src/components/InputField';
import Link from 'next/link';

const Newpassword = () => {
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

  //password
  const [password, setPassword] = useState('');
  const [passerrorMessage, setPasserrorMessage] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [retypePassErrorMessage, setRetypePassErrorMessage] = useState('');

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleRetypePasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRetypePassword(e.target.value);
  };
  const handlePassBlur = () => {
    const error = 'Password doesnt match.';
    if (password !== retypePassword) {
      setRetypePassErrorMessage(error);
    } else {
      setRetypePassErrorMessage('');
    }
  };

  const isPassEmpty = (name: string) => {
    return name.trim() === '';
  };
  const handleNameBlur = () => {
    if (isPassEmpty(password)) {
      setPasserrorMessage('Password cannot be empty');
    } else {
      setPasserrorMessage('');
    }
  };
  console.log(!isPassEmpty(password));

  //new password success
  const [isEmailsent, setIsEmailsent] = useState(false);

  const handleButtonClick = () => {
    setIsEmailsent(true);
  };

  return (
    <div>
      {isEmailsent ? (
        <div className="bg-white">
          <div className="flex justify-center items-center h-screen max-h-screen md:px-0 px-8">
            <div className="w-full text-center md:w-6/12 mx-auto -mt-20">
              <p className="text-2xl md:text-5xl font-bold">
                Password changed!{' '}
              </p>
              <p className="text-base md:text-xl text-[#000000A3] mt-4 md:mt-10">
                please re-login with new details. <br />
                <br />
              </p>

              <Link
                href="/login"
                className="cursor-pointer underline opacity-100 text-[#261229]"
              >
                <button className="transition duration-300 ease-in-out my-4 w-2/4 h-12 px-4 py-2 font-bold text-white bg-black ">
                  back to login
                </button>
              </Link>
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
                  type="password"
                  id="password"
                  name="password"
                  label="Password"
                  placeholder="Enter Password"
                  onChange={handlePasswordChange}
                  onBlur={handleNameBlur}
                  required
                />
                {passerrorMessage && (
                  <p className="error text-sm text-red-600">
                    {passerrorMessage}
                  </p>
                )}
              </div>
              <div className="h-24 mt-4">
                <InputField
                  className="h-12 px-4 border border-graylight2 rounded"
                  type="password"
                  id="password"
                  name="password"
                  label="Retype Password"
                  placeholder="Enter Password"
                  onChange={handleRetypePasswordChange}
                  onBlur={handlePassBlur}
                  required
                />
                {retypePassErrorMessage && (
                  <p className="error text-sm text-red-600">
                    {retypePassErrorMessage}
                  </p>
                )}
              </div>

              <button
                onClick={handleButtonClick}
                disabled={isPassEmpty(password)}
                className={`transition duration-300 ease-in-out my-4 w-full h-12 px-4 py-2 font-bold text-white ${
                  !isPassEmpty(password)
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

export default Newpassword;
