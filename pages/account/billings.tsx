import React from 'react';
import LeftTabs from './tabs';
import { faker } from '@faker-js/faker';
import Image from 'next/image';

import visaIcon from '../../src/assets/navigation/visa.svg';

// Render saved card information

// Sample user data from the JSON
// const user = {
//   name: 'John Doe',
//   email: 'johndoe@example.com',
//   planCharges: '$89.99',
//   currentPlan: 'Annual',
//   savedCards: [
//     {
//       cardNumber: '1234 5678 9012 3456',
//       expiryDate: {
//         day: 15,
//         month: 'March',
//         year: 2024,
//       },
//     },
//     {
//       cardNumber: '9876 5432 1098 7654',
//       expiryDate: {
//         day: 10,
//         month: 'June',
//         year: 2023,
//       },
//     },
//   ],
//   billingHistory: [
//     {
//       date: '23 May 2023',
//       totalTax: 50.0,
//     },
//     {
//       date: '15 June 2023',
//       totalTax: 50.0,
//     },
//   ],
// };

const generateFakeUser = () => {
  const user = {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    planCharges: faker.commerce.price(),
    currentPlan: faker.helpers.arrayElement(['Monthly', 'Annual']),
    savedCards: [
      {
        cardNumber: faker.finance.creditCardNumber(),
        expiryDate: {
          day: faker.date.future().getDate(),
          month: faker.date.month(),
          year: faker.date.future().getFullYear(),
        },
      },
      {
        cardNumber: faker.finance.creditCardNumber(),
        expiryDate: {
          day: faker.date.future().getDate(),
          month: faker.date.month(),
          year: faker.date.future().getFullYear(),
        },
      },
    ],
    billingHistory: [
      {
        date: faker.date.recent().toLocaleDateString('en-US'),
        totalTax: faker.finance.amount(),
      },
      {
        date: faker.date.recent().toLocaleDateString('en-US'),
        totalTax: faker.finance.amount(),
      },
      {
        date: faker.date.recent().toLocaleDateString('en-US'),
        totalTax: faker.finance.amount(),
      },
      {
        date: faker.date.recent().toLocaleDateString('en-US'),
        totalTax: faker.finance.amount(),
      },
    ],
  };

  return user;
};

const user = generateFakeUser();

const showLastFourDigits = (cardNumber: string) => {
  const lastFourDigits = cardNumber.slice(-4);
  return '...' + lastFourDigits;
};
// Render user data
const renderBilling = () => {
  return (
    <div className="bg-white">
      <LeftTabs />
      <div className="flex bg-white justify-center min-h-screen">
        <div className="flex flex-col md:w-9/12 w-11/12 mt-12">
          <p className="text-3xl md:text-4xl font-bold">Account Overview</p>
          <p className="text-xl font-bold mt-6">Plan Overview</p>

          {/* Current Plan */}
          <div className="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center w-5/6 bg-[#FAFAFA] border-[#0000003D] border-2 mt-4 rounded p-4">
            <div className="flex flex-col md:flex-row md:items-center">
              <p className="text-lg text-[#0000008C]">Current Plan</p>
              <div className="flex flex-col ml-0 md:ml-10">
                <p className="text-lg">
                  {user.currentPlan ? user.currentPlan : 'No current plan.'}
                </p>
                <p className="text-lg text-[#0000008C]">{user.planCharges}</p>
              </div>
            </div>
            <button className="w-fit md:mt-0 mt-3 md:w-auto text-lg md:text-xl rounded text-white bg-[#261229] px-4 py-2">
              Subscribed
            </button>
          </div>

          {/* Saved Cards */}
          <p className="text-2xl md:text-xl font-bold mt-8">Saved Cards</p>
          {user.savedCards.length > 0 ? (
            <div className="flex w-full md:flex-col overflow-x-auto scrollbar-hide">
              {user.savedCards.map((card, index) => (
                <div
                  key={index}
                  id="card"
                  className="scrollbar-hide md:ml-0 ml-2 flex-shrink-0 flex justify-between items-center w-5/6 bg-[#FAFAFA] border-[#0000003D] border-2 mt-4 rounded p-4"
                >
                  <div className="flex items-center">
                    <p className="hidden md:block text-lg text-[#0000008C]">
                      Payment Methods
                    </p>
                    <div className="ml-0 md:ml-10 flex items-center">
                      <Image
                        className="mx-2"
                        src={visaIcon}
                        width={22}
                        height={22}
                        alt="account"
                      />
                      <ul>
                        <li>
                          {showLastFourDigits(card.cardNumber)}
                          {card.expiryDate.day} {card.expiryDate.month}{' '}
                          {card.expiryDate.year}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <button className="hidden md:block text-lg md:text-xl rounded text-white bg-[#261229] px-4 py-2">
                    Subscribed
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p>No cards added.</p>
          )}
          <button className="w-fit mt-4 text-xl rounded text-white bg-[#261229] px-4 py-2">
            Add Card
          </button>

          {/* Billing History */}
          <div className="mb-16">
            <p className="text-xl font-bold mt-8">Billing History</p>
            <p className="text-lg mt-2 text-[#000000B2]">
              In this section you can view and download all your invoices here
            </p>
            <div className="">
              {user.billingHistory.length > 0 ? (
                <div className="flex flex-row md:flex-col w-full overflow-x-auto scrollbar-hide">
                  {user.billingHistory.map((entry, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 mr-2 md:mr-0 flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center w-5/6 bg-[#FAFAFA] border-[#0000003D] border-2 mt-4 rounded p-4"
                    >
                      <div className="flex flex-col md:flex-row items-start md:items-center">
                        <p className="text-[#0000008C] text-xl md:text-md">
                          Date: {entry.date}
                        </p>
                        <p className="ml-0 md:ml-10 text-[#0000008C] mt-2 md:mt-0">
                          Total Tax:{' '}
                          <span className="text-black">${entry.totalTax}</span>
                        </p>
                      </div>
                      <button className="text-lg md:text-xl rounded text-white bg-[#261229] px-4 py-2 mt-4 md:mt-0">
                        View Invoice
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <p>No billing history.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return <div>{renderBilling()}</div>;
};

export default App;
