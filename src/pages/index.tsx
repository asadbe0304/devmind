import Head from "next/head";
import Layout from "./../Layout/index"
const index = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>
            Blog App
          </title>
        </Head>
        <div>
          Index page
        </div>
      </Layout>
    </>
  );
};

export default index;