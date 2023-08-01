import React from 'react';
import { useState } from 'react';

import Tabs from '../../src/components/Tabs';
import VerticalTabs from '../../src/components/Tabs/verticaltabs';
import Link from 'next/link';
import accountIcon from '../../src/assets/navigation/account.svg';
import selectedAccountIcon from '../../src/assets/navigation/accountblack.svg';
import selectedSettingsIcon from '../../src/assets/navigation/settingsblack.svg';
import selectedDashboardIcon from '../../src/assets/navigation/dashboardblack.svg';
import selectedContactIcon from '../../src/assets/navigation/contactblack.svg';
import selectedTrashIcon from '../../src/assets/navigation/trashblack.svg';
import selectedBillIcon from '../../src/assets/navigation/billblack.svg';
import billingIcon from '../../src/assets/navigation/billing.svg';
import contactIcon from '../../src/assets/navigation/contact.svg';
import settingsIcon from '../../src/assets/navigation/settings.svg';
import dashboardIcon from '../../src/assets/navigation/dashboard.svg';
import trashIcon from '../../src/assets/navigation/trash.svg';
import Image from 'next/image';

import type { TabGroup } from '../../src/components/Tabs/verticaltabs';
const tabGroups: TabGroup[] = [
  {
    title: '',
    tabs: [
      {
        label: 'Account Overview',
        icon: {
          default: (
            <Image
              className="mx-2"
              src={accountIcon}
              width={22}
              height={22}
              alt="account"
            />
          ),
          selected: (
            <Image
              className="mx-2"
              src={selectedAccountIcon}
              width={22}
              height={22}
              alt="selected account"
            />
          ),
        },
        route: '/account',
        content: '',
      },
      {
        label: 'Settings',
        icon: {
          default: (
            <Image
              className="mx-2"
              src={settingsIcon}
              width={22}
              height={22}
              alt="account"
            />
          ),
          selected: (
            <Image
              className="mx-2"
              src={selectedSettingsIcon}
              width={22}
              height={22}
              alt="selected account"
            />
          ),
        },
        route: '/account/settings',
        content: '',
      },
      {
        label: 'Billings',
        icon: {
          default: (
            <Image
              className="mx-2"
              src={billingIcon}
              width={22}
              height={22}
              alt="account"
            />
          ),
          selected: (
            <Image
              className="mx-2"
              src={selectedBillIcon}
              width={22}
              height={22}
              alt="selected account"
            />
          ),
        },
        route: '/account/billings',
        content: '',
      },
      {
        label: 'Contact Us',
        icon: {
          default: (
            <Image
              className="mx-2"
              src={contactIcon}
              width={22}
              height={22}
              alt="account"
            />
          ),
          selected: (
            <Image
              className="mx-2"
              src={selectedContactIcon}
              width={22}
              height={22}
              alt="selected account"
            />
          ),
        },
        route: '/account/contact-us',
        content: '',
      },
    ],
  },
  {
    title: 'PROJECT',
    tabs: [
      {
        label: 'Dashboard',
        icon: {
          default: (
            <Image
              className="mx-2"
              src={dashboardIcon}
              width={22}
              height={22}
              alt="account"
            />
          ),
          selected: (
            <Image
              className="mx-2"
              src={selectedDashboardIcon}
              width={22}
              height={22}
              alt="selected account"
            />
          ),
        },
        route: '/account/dashboard',
        content: '',
      },
      {
        label: 'Trash',
        icon: {
          default: (
            <Image
              className="mx-2"
              src={trashIcon}
              width={22}
              height={22}
              alt="account"
            />
          ),
          selected: (
            <Image
              className="mx-2"
              src={selectedTrashIcon}
              width={22}
              height={22}
              alt="selected account"
            />
          ),
        },
        route: '/trash',
        content: '',
      },
    ],
  },
];
function LeftTabs() {
  const [selectedTab, setSelectedTab] = useState({
    groupIndex: 0,
    tabIndex: 0,
  });

  const handleTabClick = (groupIndex: number, tabIndex: number) => {
    setSelectedTab({ groupIndex, tabIndex });
  };
  return (
    <div className="bg-white">
      <div className="flex  justify-center">
        <div className="w-10/12 py-4">
          <p className="text-4xl font-bold">Account Information</p>
        </div>
      </div>
      <hr className="w-full mt-5 border border-[#E8E5EA]" />
      <div className="flex bg-[#fafafa] w-fit border-r-[#E8E5EA] items-center px-4 float-left min-h-screen hidden md:block">
        {' '}
        <div className="">
          <VerticalTabs
            tabGroups={tabGroups}
            selectedTab={selectedTab}
            handleTabClick={handleTabClick}
          />
        </div>{' '}
      </div>
    </div>
  );
}

export default LeftTabs;
