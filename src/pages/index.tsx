import Head from "next/head";
import Layout from "./../Layout/index"
import { Hero } from "../components";
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
      </Layout>
    </>
  );
};

export default index;