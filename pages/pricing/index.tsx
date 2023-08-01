import { pricingPage, plans } from '../../src/constants/header';
import { useRouter } from 'next/router';
import { useUserData } from '../../src/hooks/useUserData';
const formatPrice = (price: number) => {
  const pp = price.toString();
  const first = pp.split('.');
  return (
    <>
      <span className="text-5xl">${first[0]}.</span>
      <span className="text-3xl">{first[1]}</span>{' '}
    </>
  );
};

const Pricing = () => {
  const user = useUserData('user');
  const router = useRouter();

  const handleNavigateToSubscription = (id: number) => {
    if (user?.email) {
      router.push(`/checkout?id=${id}`);
    } else {
      router.push(`/checkout?id=${id}`);
      // router.push('/login');
      //after login bring them to subscription page
    }
  };

  return (
    <div className="pricing-background pb-20">
      <div
        className="max-w-screen-xl m-auto"
        role="main"
        aria-labelledby="main-heading"
      >
        <h1 id="main-heading" className="hidden">
          Pricing Page
        </h1>

        <div
          className="flex flex-col items-center justify-center space-y-7"
          role="presentation"
        >
          <h1
            className="w-5/6 lg:w-1/2 mt-12 text-3xl lg:text-5xl font-bold lg:text-center"
            id="pricing-page-title"
            data-testid="pricingPageTitle"
            role="heading"
          >
            {pricingPage.title}
          </h1>
          <p
            className="w-5/6 lg:w-full lg:min-h-[70px] min-h-[150px] text-lg opacity-75 lg:text-center"
            id="pricing-page-subtitle"
            data-testid="pricingPageSubtitle"
            role="document"
          >
            {pricingPage.subTitle}
          </p>

          <div
            className="ag-format-container flex justify-center flex-wrap"
            role="list"
          >
            {plans.map((plan, index) => (
              <div
                tabIndex={0}
                key={plan.name}
                className="ag-courses_item "
                aria-label={`${plan.name} plan details`}
                role="listitem"
                data-testid={`planDetail-${plan.name}`}
              >
                <div className="ag-courses-item_link" role="link">
                  <div className="ag-courses-item_title" role="heading">
                    <p className="text-lg ag-courses-item_date font-bold mt-4">
                      {plan.tag}
                    </p>
                  </div>
                  <div className="ag-courses_topline hidden lg:block"></div>
                  <div
                    className="text-5xl font-bold mt-1 lg:mt-10 ag-courses-item_date-box"
                    role="contentinfo"
                  >
                    <div key={plan.id}>{formatPrice(plan.price)}</div>
                  </div>
                  <div className="ag-courses-item_title" role="document">
                    <p className="text-sm">{plan.description}</p>
                  </div>
                  <div className="ag-courses_line"></div>

                  <div className="ag-courses-item_date-box" role="button">
                    <button
                      onClick={() => handleNavigateToSubscription(plan?.id)}
                      className="ag-courses_button w-full px-12 py-2 mt-4 mb-8 lg:mb-16 text-lg bg-[#261229] text-white"
                      aria-label="Try it now"
                      data-testid={`subscribeButton-${index}`}
                    >
                      Get started
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
