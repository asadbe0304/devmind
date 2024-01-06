import React from 'react';
import { LayoutProps } from './layout.props';
import { Footer, Navbar } from '@/components';

const index = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <Navbar />
      <Footer />
    </>
  );
};

export default index;