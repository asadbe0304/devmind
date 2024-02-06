import React from 'react';
import Layout from "./../../Layout/index"
import { Box } from '@mui/material';
import SEO from 'src/Layout/seo/';
const index = () => {
  return (
    <SEO>
      <Layout>
        <Box>
          Author blog
        </Box>
      </Layout>
    </SEO>
  );
};

export default index;