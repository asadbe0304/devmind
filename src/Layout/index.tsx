import React from 'react';
import { LayoutProps } from './layout.props';
import { Footer, Navbar,} from './../components/index';
import { Box } from '@mui/material';

const index = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <Navbar />
      <Box minHeight={'90vh'}>{children}</Box>
      <Footer />
    </>
  );
};

export default index;