export const setCookie = (
  name: string,
  value: string,
  expires?: Date,
  path = '/'
) => {
  let cookie = `${name}=${value}; path=${path}`;

  if (expires) {
    cookie += `; expires=${expires.toUTCString()}`;
  }
  console.log('cookie value ', cookie);
  document.cookie = cookie;
};

export const getCookie = (name: string): string | null => {
  const cookies = document.cookie.split('; ');
  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split('=');
    if (cookieName === name) {
      return decodeURIComponent(cookieValue);
    }
  }
  return null;
};

export const deleteCookie = (name: string) => {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
};
