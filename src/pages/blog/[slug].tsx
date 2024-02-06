import { GetServerSideProps } from 'next';
import React from 'react';
import { BlogService } from '../../services/blog.service';
import { BlogType } from '../../interfaces/blog.interfaces';
import { Sidebar } from '../../components';
import { Content } from '../../components';
import Layout from "./../../Layout/index"
import Image from 'next/image';
import { Avatar, Box, Divider, Typography } from '@mui/material';
import { calculatedEstimatedTime } from 'src/helpers/time.format';

const DetailedBlog = ({ blogs }: DetailedBlogsPageProps) => {
  console.log(blogs);

  return (
    <Layout>
      <Box sx={{ background: 'black', display: 'flex', gap: '20px', flexDirection: { xs: 'column', md: 'row' }, padding: '20px' }}>
        <Box width={{ xs: '100%', md: '100%' }} >
          <Box
            sx={{
              backgroundColor: 'black',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0px 8px 16px rgba(255, 255, 255, .1)',
            }}
            position={'relative'}
            width={'100%'}
            height={{ xs: '30vh', md: '50vh' }}
            marginBottom={'20px'}
          >
            <Image src={blogs.image.url} alt={blogs.title} fill style={{ objectFit: 'cover', borderRadius: '10px' }} />
          </Box>
          <Box display={'flex'} flexDirection={'column'} rowGap={'10px'} sx={{ background: '#171717', padding: '10px', borderRadius: '8px', boxShadow: '0px 8px 16px rgba(255, 255, 255, .1)', }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '20px' }}>
              <Avatar alt={blogs.asadbek} src={blogs.profile.url} />
              <Box>
                <Typography variant='subtitle1' color={'#fff'}>{blogs.asadbek}</Typography>
                <Box color={'#fff'}>
                  {(blogs.createdAt.slice(0, 10))} &#x2022;
                  {calculatedEstimatedTime(blogs.desciption.text)}
                  min read
                </Box>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <Typography variant='h5' sx={{ xs: { fontSize: '2rem' }, md: { fontSize: '3rem' } }} color={'#fff'}>{blogs.title}</Typography>
              <Typography color={'#fff'} variant='subtitle2'>{blogs.excerpt}</Typography>
              <Divider sx={{ background: '#fff' }} />
              <div style={{ color: 'white', textWrap: 'wrap', fontSize: '0.8rem', opacity: '.8' }} dangerouslySetInnerHTML={{ __html: blogs.desciption.html }} />
            </Box>
          </Box>
        </Box>
        {/* <Sidebar blogs={blogs} /> */}
      </Box>
    </Layout>
  );
};

export default DetailedBlog;


export const getServerSideProps: GetServerSideProps<DetailedBlogsPageProps> = async ({
  query
}) => {
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