import showpassword from '../../src/assets/features/showPassword.svg';
import hidePassword from '../../src/assets/features/hidePassword.svg';
import login from '../../src/assets/login.svg';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
import googleLogo from '../../src/assets/socialMedia/googleLogo.svg';
import facebookWithoutBackgrd from '../../src/assets/socialMedia/facebookWithoutBackgrd.svg';
import Loader from '../../src/components/Loader';
import { signUp } from '../../src/services/authService';
// import {
//   validateEmail,
//   validatePassword,
// } from '../../src/utils/authenticationUtil';

import purpleBG from '../../src/assets/socialMedia/Texture 35.svg';
import eye from '../../src/assets/features/eye.svg';
import eyeSlash from '../../src/assets/features/eye-slash.svg';

const Login: React.FC = () => {
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    console.log('val', router.query.val); // Alerts 'Someone'
  }, [router.query]);

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const user = await signUp(email, password);
    if (user) {
      router.push(
        {
          pathname: '/verification',
          query: { userName: email },
        },
        '/verification'
      );
    }
  };

  // const handleUserEmail = () => {
  //   if (!validateEmail(email)) {
  //     setEmailError('Please validate the email for syntax and other things');
  //   } else {
  //     setEmailError('');
  //     //set green signal
  //   }
  // };

  // const handleUserPassword = () => {
  //   if (!validatePassword(password)) {
  //     setPasswordError('Please validate the email for syntax and other things');
  //   } else {
  //     setPasswordError('');
  //     //set green signal
  //   }
  // };

  const handleOnFocus = () => {
    setEmailError('');
  };

  const handleOnFocusPassword = () => {
    setPasswordError('');
  };

  const handleClick = () => {
    router.push(
      {
        pathname: '/',
        query: { name: 'Someone', val: 'login' },
      },
      '/'
    );
  };

  //email verification
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

  // Password validation

  const [password, setPassword] = useState('');
  const [passerrorMessage, setPasserrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-1/2 flex flex-col h-screen hidden md:block relative">
        <Image
          className="h-full w-full absolute object-cover inset-0 z-index-0"
          src={login} // Path to your image
          alt="Description of the image"
        />
        <div className="h-full w-full absolute object-cover inset-0 z-index-0 bg-[#1F0D22D1]"></div>
        <div className="flex flex-col items-center justify-center h-full relative">
          <div className="w-11/12">
            <p className="text-6xl text-white">Welcome to Visualizer</p>
            <p className="text-lg text-white w-9/12 leading-8">
              Welcome to our vibrant online community, where your journey to
              limitless possibilities begins. By signing up, you gain access to
              an array of exclusive benefits that will transform your Career.
            </p>
          </div>
        </div>
        {/* <Image
          className="w-full mx-2"
          src={purpleBG}
          width={18}
          height={18}
          alt="texture"
        /> */}
      </div>

      <div className="w-full md:w-1/2 bg-white h-screen flex flex-col items-center justify-center">
        <div className="absolute bottom-0 w-5/12 float-right">
          {' '}
          <p className="absolute text-base bottom-4">© 2023 Visualizer</p>{' '}
        </div>

        {/* <div onClick={handleClick} className="text-2xl">
          LOGO
        </div> */}

        <div className="w-full p-8 bg-white border-0 md:w-9/12 md:p-12">
          <h1 className="mb-6 text-4xl font-bold text-center">Login</h1>

          <div className="mb-2 h-24">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Email<span className="text-red-600">*</span>{' '}
            </label>
            <div className="flex flex-row">
              <input
                type="email"
                placeholder=""
                value={email}
                onChange={handleEmailChange}
                onBlur={handleEmailBlur}
                className="w-full h-12 p-2 border border-gray-300"
                required
              />
            </div>
            {errorMessage && (
              <p className="error text-sm text-red-600">{errorMessage}</p>
            )}
          </div>
          <div className="mb-4 h-24">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Password<span className="text-red-600">*</span>{' '}
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder=""
                value={password}
                onChange={handlePasswordChange}
                onBlur={handleNameBlur}
                className="w-full h-12 p-2 border border-gray-300"
                required
              />

              <button
                className=""
                style={{
                  position: 'absolute',
                  right: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                }}
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <Image
                    className="mx-2"
                    src={showpassword}
                    width={18}
                    height={18}
                    alt="google"
                  />
                ) : (
                  <Image
                    className="mx-2"
                    src={hidePassword}
                    width={18}
                    height={18}
                    alt="google"
                  />
                )}
              </button>
            </div>

            {passerrorMessage && (
              <p className="error text-sm text-red-600">{passerrorMessage}</p>
            )}
          </div>
          <div className="flex justify-between">
            <div className="flex items-center justify-start mb-4">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-checkbox"
                className="ml-2 text-sm font-medium text-gray-900 "
              >
                Default checkbox
              </label>
            </div>
            <Link
              href="/password-reset"
              className="ml-2 text-sm font-medium text-gray-900"
            >
              Forgot password
            </Link>
          </div>
          <button
            disabled={loading}
            onClick={(e) => handleSubmit(e)}
            className="w-full h-12 px-4 py-2 mb-4 font-bold text-white bg-secondary hover:bg-[#C99A40] ease-out duration-300"
          >
            Login
          </button>
          {/* <hr className="w-full my-5 border border-black" /> */}
          <div className="flex flex-col items-center justify-center">
            <button
              type="button"
              className="flex items-center justify-center flex-1 w-full h-12 px-4 py-2 mb-4 text-base text-black border hover:cursor-pointer"
            >
              <Image
                className="mx-2"
                src={googleLogo}
                width={18}
                height={18}
                alt="google"
              />
              Login with Google
            </button>
          </div>
          <div className="flex items-center justify-center w-full">
            <p>Don’t have an account?</p>
            <Link className="mx-1 underline" href="/signUp">
              Sign Up
            </Link>
          </div>
        </div>

        {loading && (
          <div className="absolute flex flex-col items-center justify-center w-full h-full opacity-40 bg-neutral-300">
            <Loader />
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
