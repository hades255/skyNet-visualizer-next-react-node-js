import { NextRouter } from 'next/router';

export const isHeaderRequired = (router: NextRouter) => {
  if (
    router.pathname.startsWith('/login') ||
    router.pathname.startsWith('/signUp') ||
    router.pathname.includes('/portfolio')
  ) {
    return false;
  }
};

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

// Utility function to scroll to a particular ref
export const scrollToRef = <T extends HTMLElement>(ref: React.RefObject<T>) => {
  ref.current?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};
