import PrivacyPolicy from '../../src/components/PrivacyPolicy';
import Tabs from '../../src/components/Tabs';
import Link from 'next/link';
import { privacyPolicy } from '../../src/constants/header';

const tabs = [
  {
    label: 'Privacy Policy',
    content: (
      <PrivacyPolicy
        title="Copyright Policy"
        privacyPolicyItems={privacyPolicy}
      />
    ),
  },
  {
    label: 'Cookie Policy',
    content: (
      <PrivacyPolicy title="Cookie Policy" privacyPolicyItems={privacyPolicy} />
    ),
  },
  {
    label: 'Copyright Policy',
    content: (
      <PrivacyPolicy
        title="Copyright Policy"
        privacyPolicyItems={privacyPolicy}
      />
    ),
  },
];

const privacyPolicyNew = () => {
  //   const listRef = useRef<HTMLUListElement>(null);

  return (
    <div className="h-screen m-auto">
      <header className="flex justify-between max-w-screen-xl mx-auto my-12">
        <h1>LOGO</h1>
        <Link className="hover:cursor-pointer hover:underline" href="/">
          Take me back to Visualizer.me
        </Link>
      </header>
      <Tabs tabs={tabs} />
    </div>
  );
};

export default privacyPolicyNew;
