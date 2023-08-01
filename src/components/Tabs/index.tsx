import { useState } from 'react';

type Tab = {
  label: string;
  content: React.ReactNode;
};

type Props = {
  tabs: Tab[];
};

const Tabs: React.FC<Props> = ({ tabs }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="">
      <div className="flex flex-col">
        <div className="max-w-screen-xl mx-auto">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`py-4 px-6 font-medium text-xl focus:outline-none ${
                selectedTab === index
                  ? 'border-b-4 border-textSecondary'
                  : 'bg-gray-200'
              }`}
              onClick={() => setSelectedTab(index)}
            >
              <div className="flex justify-center items-center">
                {tab.label}
              </div>
            </button>
          ))}
        </div>
        {tabs[selectedTab].content}
      </div>
    </div>
  );
};

export default Tabs;
