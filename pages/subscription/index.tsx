import { plans } from '../../src/constants/header';
import Link from 'next/link';
import RadioWithDescription from '../../src/components/RadioWithDescription';

const Subscription = () => {
  return (
    <div className="max-w-screen-xl m-auto">
      <div className="flex flex-row justify-between my-4">
        <h1>logo</h1>
        <h2>Subscription</h2>
        <Link className="hover:cursor-pointer hover:underline" href="/">
          Take me back to Visualizer.me
        </Link>
      </div>
      <RadioWithDescription plans={plans} />
    </div>
  );
};

export default Subscription;
