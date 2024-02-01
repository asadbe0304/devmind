import Head from "next/head";
import Layout from "./../Layout/index"
import { Hero, Sidebar, Content } from "../components";
import { Box } from "@mui/material";
import { useEffect } from "react";
import { BlogService } from "../services/blog.service";
import { BlogType } from "../interfaces/blog.interfaces";
const index = ({ blogs }: HomePageProps) => {
  // useEffect(()=>{
  //   BlogService.getAllBlogs().then(data => console.log(data))
  // },[])



  return (
    <>
      <Layout>
        <Head>
          <meta name="description" content="Blog app" />
          <title>
            Blog App
          </title>
        </Head>
        <Hero />
        <Box sx={{ display: 'flex', gap: '10px', padding: '10px', background: 'black', flexDirection: { xs: 'column', md: 'row' } }}>
          <Sidebar />
          <Content blogs={blogs}/>
        </Box>
      </Layout>
    </>
  );
};

export default index;

export const getServerSideProps = async () => {
  const blogs = await BlogService.getAllBlogs()

  return {
    props: {
      blogs
    }
  }
}

interface HomePageProps {
  blogs: BlogType[];
}