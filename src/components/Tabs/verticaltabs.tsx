import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

type Tab = {
  label: string;
  icon: {
    default: JSX.Element;
    selected: JSX.Element;
  };
  route: string;
  content: string;
};

export type TabGroup = {
  title: string;
  tabs: Tab[];
};

type Props = {
  tabGroups: TabGroup[];
  selectedTab: { groupIndex: number; tabIndex: number };
  handleTabClick: (groupIndex: number, tabIndex: number) => void;
};

const VerticalTabs: React.FC<Props> = ({
  tabGroups,
  selectedTab,
  handleTabClick,
}) => {
  const [currentTab, setCurrentTab] = useState(selectedTab);
  const router = useRouter();

  useEffect(() => {
    const currentRoute = router.pathname;
    let selectedGroupIndex = -1;
    let selectedTabIndex = -1;

    tabGroups.forEach((group, groupIndex) => {
      group.tabs.forEach((tab, tabIndex) => {
        if (tab.route === currentRoute) {
          selectedGroupIndex = groupIndex;
          selectedTabIndex = tabIndex;
        }
      });
    });

    if (selectedGroupIndex !== -1 && selectedTabIndex !== -1) {
      setCurrentTab({
        groupIndex: selectedGroupIndex,
        tabIndex: selectedTabIndex,
      });
    }
  }, [router.pathname, tabGroups]);

  return (
    <div className="">
      <div className="min-h-screen flex flex-col float-left hidden md:block">
        <div className="w-fit mx-auto flex flex-col">
          {tabGroups.map((group, groupIndex) => (
            <div key={groupIndex}>
              <h1 className="text-lg font-bold mt-4 opacity-60 mb-2">
                {group.title}
              </h1>
              {group.tabs.map((tab, tabIndex) => (
                <Link
                  key={tabIndex}
                  href={tab.route}
                  passHref
                  className={`flex py-2 pl-2 pr-6 mb-2 font-medium text-xl focus:outline-none ${
                    currentTab.groupIndex === groupIndex &&
                    currentTab.tabIndex === tabIndex
                      ? 'bg-[#E8E5EA] rounded'
                      : ''
                  }`}
                  onClick={() => handleTabClick(groupIndex, tabIndex)}
                >
                  <div className="flex items-center">
                    <span className="mr-2">
                      {currentTab.groupIndex === groupIndex &&
                      currentTab.tabIndex === tabIndex
                        ? tab.icon.selected
                        : tab.icon.default}
                    </span>
                    {tab.label}
                  </div>
                </Link>
              ))}
            </div>
          ))}
        </div>
        {tabGroups[currentTab.groupIndex]?.tabs[currentTab.tabIndex]?.content}
      </div>
    </div>
  );
};

export default VerticalTabs;
