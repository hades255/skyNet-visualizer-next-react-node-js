import EmailVerificationForm from './EmailVerificationForm';
import { confirmSignUp } from '../../src/services/authService';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { maskEmail } from '../../src/utils/authenticationUtil';

const Verification = () => {
  const router = useRouter();
  const { userName } = router.query;
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (userName) {
      setEmail(userName as string);
    }
  }, [router.query, userName]);

  const handleVerificationSubmit = async (verificationCode: string) => {
    const verified = await confirmSignUp(email, verificationCode);
    console.log('verified', verified);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-6">
      <div className="flex flex-col items-center justify-center">
        <h1 className="mb-2 text-xl font-semibold">Email Verification</h1>
        <h2 className="mb-2 text-base">
          {userName &&
            `Please enter the code we sent to the email ${maskEmail(
              userName as string
            )}`}
        </h2>
      </div>
      <EmailVerificationForm onSubmit={handleVerificationSubmit} />
    </div>
  );
};

export default Verification;
