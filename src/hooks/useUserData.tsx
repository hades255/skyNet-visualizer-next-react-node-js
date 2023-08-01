import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

type UserLoginData = {
  email: string;
  email_verified: boolean;
  sub: string;
};
export function useUserData(cookieName: string): UserLoginData | null {
  const [user, setUser] = useState<UserLoginData | null>(null);

  useEffect(() => {
    const cookieValue = Cookies.get('user');
    const cookieUser: UserLoginData = cookieValue
      ? JSON.parse(cookieValue)
      : null;
    if (cookieUser) {
      setUser(cookieUser);
    }
  }, [cookieName]);

  return user;
}
