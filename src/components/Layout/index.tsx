import React, { ReactNode } from 'react';
import Footer from '../Footer';
import { footerLinks, menuItems } from '../../constants/header';
import Header from '../Header';
// import Header from './Header';
// import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <div className="font-dmsans">
      <Header menuItems={menuItems} />
      {children}
      <Footer footerLinks={footerLinks} />
    </div>
  );
};

export default Layout;
