import { GetServerSideProps } from 'next';
import React from 'react';
import { BlogService } from '../../services/blog.service';
import { BlogType } from '../../interfaces/blog.interfaces';
import { Sidebar } from '../../components';
import { Content } from '../../components';
import Layout from "./../../Layout/index"

const DetailedBlog = ({ blogs }: DetailedBlogsPageProps) => {
  console.log(blogs);

  return (
    <Layout>
slug
    </Layout>
  );
};

export default DetailedBlog;


export const getServerSideProps: GetServerSideProps<DetailedBlogsPageProps> = async ({
  query
}) => {
  console.log(query);

  const blogs = await BlogService.getDetailedBlogs(query.slug as string)

  return {
    props: {
      blogs,
    }
  }
}


interface DetailedBlogsPageProps {
  blogs: BlogType;

}