import React from 'react';

interface PrivacyPolicyItem {
  title: string;
  description: string;
}

interface Props {
  privacyPolicyItems: PrivacyPolicyItem[];
  title: string;
}

const PrivacyPolicy: React.FC<Props> = ({ privacyPolicyItems, title }) => {
  return (
    <div className="">
      <div className="bg-secondary flex justify-center px-20">
        <h1 className="text-5xl text-textSecondary py-20">{title}</h1>
      </div>
      <div className="max-w-screen-xl mx-auto">
        {privacyPolicyItems.map((item, index) => (
          <div className="py-4" key={index}>
            <h3 className="py-2 text-2xl font-semibold">{item.title}</h3>
            <p className="text-sm font-base">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
