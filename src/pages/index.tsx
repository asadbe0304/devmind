import Head from "next/head";
import Layout from "./../Layout/index"
import { Hero, Sidebar, Content } from "../components";
import { Box } from "@mui/material";
const index = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>
            Blog App
          </title>
        </Head>
        <Hero />
        <Box sx={{ display: 'flex', gap: '10px', padding: '10px', background: 'black', flexDirection: { xs: 'column', md: 'row' } }}>
          <Sidebar />
          <Content />
        </Box>
      </Layout>
    </>
  );
};

export default index;