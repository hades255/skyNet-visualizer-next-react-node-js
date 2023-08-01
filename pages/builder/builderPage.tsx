import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { deleteCookie } from '../../src/utils/cookie';
import { useUserData } from '../../src/hooks/useUserData';

type HeaderProps = {
  isLoggedIn: boolean;
};

const BuilderPage: React.FC<HeaderProps> = ({ isLoggedIn }: HeaderProps) => {
  const user = useUserData('user');
  const router = useRouter();
  const dispatch = useDispatch();

  if (!user) {
    return null;
  }

  const { email } = user;

  const handleLogout = async () => {
    deleteCookie('user');
    dispatch({ type: 'LOGOUT' });
    router.push('/');
  };

  if (isLoggedIn && email) {
    return (
      <header className="bg-gray-800">
        <div className="container flex items-center justify-between px-4 py-4 mx-auto">
          <h1
            onClick={() => router.push('/')}
            className="text-xl font-bold text-white hover:cursor-pointer"
          >
            Builder
          </h1>
          <div className="flex items-center">
            <span className="mr-4 text-gray-400">Logged in as {email}</span>
            <button
              onClick={handleLogout}
              className="px-4 py-2 font-bold text-gray-800 bg-white rounded"
            >
              Logout
            </button>
          </div>
        </div>
      </header>
    );
  }

  return <div></div>;
};

export default BuilderPage;
