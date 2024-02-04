import Head from "next/head";
import Layout from "./../Layout/index"
import { Hero, Sidebar, Content } from "../components";
import { Box } from "@mui/material";
import { BlogService } from "../services/blog.service";
import { BlogType } from "../interfaces/blog.interfaces";
import { GetServerSideProps } from "next";
const index = ({ blogs, categories }: HomePageProps) => {

  return (
    <>
      <Layout>
        <Head>
          <meta name="description" content="Blog app" />
          <title>
            Blog App
          </title>
        </Head>
        <Hero blogs={blogs.slice(0, 3)} />
        <Box sx={{ display: 'flex', gap: '10px', padding: '10px', background: 'black', flexDirection: { xs: 'column', md: 'row' } }}>
          <Sidebar blogs={blogs.slice(0, 2)} categories={categories} />
          <Content blogs={blogs} />
        </Box>
      </Layout>
    </>
  );
};

export default index;

export const getServerSideProps: GetServerSideProps<HomePageProps> = async () => {
  const blogs = await BlogService.getAllBlogs();
  const categories = await BlogService.getCategories();

  return {
    props: {
      blogs,
      categories,
    }
  }
}

interface HomePageProps {
  blogs: BlogType[];
  categories: BlogType[];
}