import { useState, useRef } from 'react';

interface Props {
  onSubmit: (verificationCode: string) => void;
}

const EmailVerificationForm: React.FC<Props> = ({ onSubmit }) => {
  const [verificationCode, setVerificationCode] = useState('');
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleInputChange = (e: any, index: number) => {
    const value = e.target.value;
    const prevValue = verificationCode[index] || '';
    if (!isNaN(Number(value))) {
      setVerificationCode((prevCode) => {
        const newCode = prevCode.split('');
        newCode[index] = value;
        return newCode.join('');
      });
      if (value === '' && index > 0) {
        inputRefs.current[index - 1]?.focus();
      } else if (index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    } else if (value === '' && index > 0) {
      setVerificationCode((prevCode) => {
        const newCode = prevCode.split('');
        newCode[index] = '';
        return newCode.join('');
      });
      inputRefs.current[index - 1]?.focus();
    } else if (e.nativeEvent?.inputType === 'deleteContentBackward') {
      setVerificationCode((prevCode) => {
        const newCode = prevCode.split('');
        newCode[index] = '';
        return newCode.join('');
      });
      if (prevValue !== '') {
        e.target.value = '';
      } else if (index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  const handlePaste = (
    e: React.ClipboardEvent<HTMLInputElement>,
    index: number
  ) => {
    const inputLength = 6;
    e.preventDefault();
    const pastedData = e.clipboardData
      .getData('text')
      .substr(0, inputLength - index);
    const pastedChars = pastedData.split('');
    setVerificationCode((prevCode) => {
      const newCode = prevCode.split('');
      pastedChars.forEach((char, i) => {
        newCode[index + i] = char;
      });
      return newCode.join('');
    });
    inputRefs.current[index + pastedChars.length]?.focus();
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    onSubmit(verificationCode);
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-12">
      <div className="flex flex-row items-center justify-center space-x-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <input
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            pattern="[0-9]*"
            inputMode="numeric"
            maxLength={1}
            value={verificationCode[index] || ''}
            onChange={(e) => handleInputChange(e, index)}
            onPaste={(e) => handlePaste(e, index)}
            className="w-20 h-20 px-4 text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        ))}
      </div>
      <button
        onClick={handleSubmit}
        type="submit"
        className="w-48 px-4 py-2 text-white rounded-md h-14 bg-secondary hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
      >
        Verify
      </button>
    </div>
  );
};
export default EmailVerificationForm;
