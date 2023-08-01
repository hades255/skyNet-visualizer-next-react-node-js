import React, { FC, TextareaHTMLAttributes, useState } from 'react';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  initialText?: string;
  title?: string;
  ariaLabel?: string;
  onTextChange?: (text: string) => void;
}

const TextArea: FC<TextAreaProps> = ({
  initialText = '',
  title,
  ariaLabel,
  onTextChange,
  placeholder,
  name,
  rows,
  cols,
  disabled,
  maxLength,
}) => {
  const [text, setText] = useState(initialText);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
    if (onTextChange) {
      onTextChange(event.target.value);
    }
  };

  return (
    <div className="flex flex-col">
      {title && (
        <label className="block text-gray-700" htmlFor={name}>
          {title}
        </label>
      )}
      <textarea
        className="resize-none mt-1 p-4"
        id={name}
        value={text}
        onChange={handleChange}
        placeholder={placeholder}
        name={name}
        rows={rows}
        cols={cols}
        disabled={disabled}
        maxLength={maxLength}
        aria-label={ariaLabel}
      />
    </div>
  );
};

export default TextArea;
