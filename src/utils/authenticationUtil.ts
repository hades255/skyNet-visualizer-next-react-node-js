//** use this method if another one breaks  **
// /**
//  * Validate the method if its valid email address or not
//  * @param email
//  * @returns
//  */
// export const validateEmail = (email: string) => {
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!emailRegex.test(email)) {
//     console.log('Invalid email address!');
//     return false;
//   } else {
//     console.log('Valid email address.');
//     return true;
//   }
// };

// const [email, setEmail] = useState('');
// const [errorMessage, setErrorMessage] = useState('');

// const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//   setEmail(e.target.value);
// };

// const handleEmailBlur = () => {
//   if (!isValidEmail(email)) {
//     setErrorMessage('Invalid email format');
//   } else {
//     setErrorMessage('');
//   }
// };

// const isValidEmail = (email: string) => {
//   // Basic email validation regex pattern
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return emailRegex.test(email);
// };

/**
 * validate the if its a valid password or not
 * @param password
 * @returns
 */

export const validatePassword = (password: string) => {
  const minLength = 8;
  const regex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()-=+{}[\]|;:'",.<>/])(?!.*(.)\1{2,})[a-zA-Z0-9!@#$%^&*()-=+{}[\]|;:'",.<>/]{8,}$/;
  const commonPasswords = [
    'password',
    '123456',
    'qwerty',
    'letmein',
    // add more common passwords here
  ];

  if (password.length < minLength) {
    return false;
  }

  if (commonPasswords.includes(password.toLowerCase())) {
    return false;
  }

  if (!regex.test(password)) {
    return false;
  }

  return true;
};

export const maskEmail = (email: string): string => {
  const atIndex = email.indexOf('@');
  const maskedPart = email.slice(0, atIndex).replace(/./g, '*');
  const lastPart = email.slice(atIndex - 5, atIndex);
  return `${maskedPart}${lastPart}@${email.slice(atIndex + 1)}`;
};
