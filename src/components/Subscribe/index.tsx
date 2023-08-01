import React, { useState } from 'react';

interface SubscribeProps {
  subheading: string;
}

const Subscribe: React.FC<SubscribeProps> = ({ subheading }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // handle form submission logic here
  };

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };

  return (
    <div className="flex flex-col items-end">
      <div className="my-2">
        <input
          className="h-10 px-2 py-4 text-black"
          placeholder="Enter your email"
          type="email"
          value={email}
          onChange={handleEmailChange}
        />
        <button
          onClick={(e) => handleSubmit(e)}
          className="border border-white p-2 mx-4"
          type="submit"
        >
          Subscribe
        </button>
      </div>
      <h2 className="text-sm">{subheading}</h2>
    </div>
  );
};

export default Subscribe;
