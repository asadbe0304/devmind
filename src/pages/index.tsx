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
        <Box sx={{display:'flex', gap:'20px', padding:'20px',}}>
          <Sidebar />
          <Content />
        </Box>
      </Layout>
    </>
  );
};

export default index;