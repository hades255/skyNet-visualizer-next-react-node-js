import { plans } from '../../src/constants/header';
import InputField from '../../src/components/InputField';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import paypal from '../../src/assets/paypal.svg';
import Image from 'next/image';
import { useRouter } from 'next/router';

interface Plan {
  id: number;
  name: string;
  tag: string;
  price: number;
  description: string;
  cta: string;
  checkoutSummary: string;
}

const PAYMENT_METHOD_CRDR = 0;
const PAYMENT_METHOD_PAYPAL = 1;

const formatPrice = (price: number) => {
  if (!price) {
    return '';
  }
  const pp = price.toString();
  const first = pp.split('.');
  return (
    <>
      <span className="text-6xl">${first[0]}.</span>
      <span className="md:text-3xl text-6xl">{first[1]}</span>{' '}
    </>
  );
};

const Checkout = () => {
  const router = useRouter();
  const { id } = router.query;
  const [firstName, setFirstName] = useState({
    first: '',
    lastName: '',
  });
  const [selectPlan, setSelectedPlan] = useState<Plan | undefined>(undefined);
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<number>(PAYMENT_METHOD_CRDR);
  // const [checkoutInput, setCheckoutInput] = useState({
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   terms: false,
  //   promotion: false,

  // });
  useEffect(() => {
    if (id) {
      const myPlan = plans.find(
        (plan) => plan.id === parseInt(Array.isArray(id) ? id[0] : id, 10)
      );
      setSelectedPlan(myPlan);
    }
  }, [id]);

  const handlePaymentChange = (val = 0) => {
    setSelectedPaymentMethod(val);
  };

  if (!selectPlan) {
    return;
  }

  const handleFirstName = (e: any) => {
    console.log('hello' + e);
    setFirstName({ ...firstName, first: e });
  };

  const SelectedPriceCard = () => {
    return (
      <div className="space-y-6 md:w-1/3 w-full mb-6 md:mb-0">
        <div key={selectPlan.name} className="bg-white">
          <div className="border border-grayLight border px-8 py-2">
            <div className="py-2 text-sm ag-courses-item_date  border-b border-grayLight">
              Your order:
            </div>
            <div className="ag-courses-item_title flex flex-row justify-between">
              <span className="font-bold text-2xl ag-courses-item_date">
                {selectPlan.tag}
              </span>
              <Link className="text-sm underline" href="/pricing">
                change
              </Link>
            </div>
            <div className="text-7xl mt-6 ag-courses-item_date-box">
              <div key={selectPlan.id}>{formatPrice(selectPlan?.price)}</div>
            </div>
            <div className="ag-courses-item_title">
              <p className="text-sm">{selectPlan.description}</p>
            </div>
            <div className="ag-courses_line"></div>
          </div>
        </div>
      </div>
    );
  };

  const CheckoutPaymentSummary = () => {
    return (
      <div className="bg-white space-x-4 w-full p-14 items-start flex flex-row border rounded-sm border-grayLight p-8">
        <div className="space-y-6">
          <div className="text-2xl">Confirm your order</div>
          <div className="flex items-center justify-between">
            <span className="text-lg">Today's Total:</span>
            <span className="text-4xl">${selectPlan.price}</span>
          </div>
          <p className="pb-2 border-b border-grayLight text-black text-opacity-50">
            {selectPlan.checkoutSummary}
          </p>
          <div className="text-black text-opacity-70">Terms and Conditions</div>
          <p className="text-black text-opacity-50">
            By placing your order, you agree to the{' '}
            <Link className="underline" href="/legal">
              Privacy Policy
            </Link>{' '}
            and{' '}
            <Link className="underline" href="/legal">
              Terms of Service
            </Link>{' '}
            . You acknowledge that your subscription will be renewed
            automatically and you will be charged in advance of each billing
            cycle. You can cancel at any time online or by{' '}
            <Link className="underline" href="/legal">
              contacting customer support
            </Link>{' '}
            .
          </p>
          <div className="flex items-center space-x-2">
            <input
              className="h-6 w-6 border border-graylight2"
              type="checkbox"
              id="checkbox_checkout_final"
              name="checkbox_checkout_final"
            />
            <label htmlFor="checkbox_checkout_final">
              Please check this box to indicate that you agree to the above
              terms and conditions.
            </label>
          </div>
          <div className="flex justify-center">
            <button
              disabled={false}
              className="transition duration-300 ease-in-out my-4 w-2/3 h-12 px-4 py-2 font-bold text-white hover:text-black bg-black hover:bg-[#FFC439]"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    );
  };

  const CardInformation = () => {
    return (
      <div className="bg-white md:space-x-4 w-full p-14 items-start flex  flex-col md:flex-row border rounded-sm border-grayLight p-8">
        <div className="flex-none w-2/8">
          <div className="bg-[#261229] text-white rounded-full w-8 h-8 flex items-center justify-center">
            2
          </div>
        </div>
        <div className="flex-grow w-6/8 space-y-6">
          <div className="text-2xl">Select your payment method</div>
          <div className="w-full p-4 items-start flex flex-col border rounded-sm border-grayLight">
            <input
              onChange={() => handlePaymentChange(PAYMENT_METHOD_CRDR)}
              type="radio"
              id="creditDebitcard"
              name="creditDebitcard"
              checked={selectedPaymentMethod === PAYMENT_METHOD_CRDR}
              onClick={() => handlePaymentChange(PAYMENT_METHOD_CRDR)}
            />
            <label htmlFor="creditDebitcard">Credit/Debit Card</label>
          </div>
          <div className="space-y-4 w-full p-4 items-start flex flex-col border rounded-sm border-grayLight">
            <div className="flex flex-row justify-between w-full">
              <div>
                <input
                  onChange={() => handlePaymentChange(PAYMENT_METHOD_PAYPAL)}
                  type="radio"
                  id="paypal"
                  name="paypal"
                  checked={selectedPaymentMethod === PAYMENT_METHOD_PAYPAL}
                  onClick={() => handlePaymentChange(PAYMENT_METHOD_PAYPAL)}
                />
                <label htmlFor="paypal">Paypal</label>
              </div>
              <Image
                src={paypal}
                alt="Hero Image visualizer"
                width={70}
                height={70}
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const PersonalInformation = () => {
    return (
      <div className="bg-white md:space-x-4 w-full p-14 items-start flex  flex-col md:flex-row border rounded-sm border-grayLight p-8">
        <div className="flex-none md:w-2/8">
          <div className="bg-[#261229] text-white rounded-full w-8 h-8 flex items-center justify-center">
            1
          </div>
        </div>
        <div className="flex-grow md:w-6/8 space-y-6">
          <>
            <div className="text-2xl">Enter your information</div>
          </>

          <div className="flex space-x-4">
            <div className="w-1/2">
              <InputField
                className="h-12 px-4 border border-graylight2"
                type="text"
                id="firstName"
                name="firstName"
                label="First Name"
                placeholder="Enter your first name"
                value={firstName.first}
                onChange={(e) => handleFirstName(e)}
                required
              />
            </div>
            <div className="w-1/2">
              <InputField
                className="h-12 px-4 border border-graylight2"
                type="text"
                id="lastName"
                name="lastName"
                label="Last Name"
                placeholder="Enter your last name"
              />
            </div>
          </div>
          <InputField
            className="h-12 px-4 w-full border border-graylight2"
            type="email"
            id="email"
            name="email"
            label="Email Address"
            placeholder="Enter your email address"
          />
          <div className="flex items-center space-x-2">
            <input
              className="h-6 w-6 border border-graylight2"
              type="checkbox"
              id="checkbox_checkout"
              name="checkbox_checkout"
            />
            <label htmlFor="checkbox_checkout">
              by checking this box, you agree to see offers and promotions from
              visualizer
            </label>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="bg-checkoutPage h-12 text-white flex items-center justify-center mb-12">
        Save this is amount with the annual Plan
      </div>
      <div className="">
        <div className="max-w-6xl m-auto">
          <div className="flex sm:flex-row md:space-x-8 flex-col-reverse px-6 md:px-0">
            <div className="space-y-6 md:w-2/3 w-full mb-32">
              <PersonalInformation />
              <CardInformation />
              <CheckoutPaymentSummary />
            </div>
            <SelectedPriceCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
