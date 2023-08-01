// components/InputField.tsx
import * as React from 'react';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  onFocus?: () => void;
  onBlur?: () => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  errorMessage?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  onFocus,
  onBlur,
  onKeyDown,
  errorMessage,
  ...props
}) => {
  const { className } = props;

  const handleFocus = () => {
    if (onFocus) {
      onFocus();
    }
  };

  const handleBlur = () => {
    if (onBlur) {
      onBlur();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (onKeyDown) {
      onKeyDown(event);
    }
  };

  return (
    <div className="">
      {label && (
        <label htmlFor={props.id || props.name} className="block text-gray-700">
          {label}
        </label>
      )}
      <input
        {...props}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        className={`${className} mt-1 block w-full shadow-sm ${
          errorMessage ? 'border-red-500' : 'border-gray-300'
        }`}
      />
      {errorMessage && (
        <p className="mt-2 text-sm text-red-600">{errorMessage}</p>
      )}
    </div>
  );
};

export default InputField;
