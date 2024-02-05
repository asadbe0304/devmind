import { Box, Button, Typography, Link, Divider, Avatar } from '@mui/material';
import React, { Fragment } from 'react';
import Image from 'next/image';
import { SidebarProps } from './props.sidebar';

const sidebar = ({ blogs, categories }: SidebarProps) => {
  console.log(categories);

  return (
    <>
      <Box sx={{}} width={{ xs: '100%', md: '30%' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column-reverse', transition: "all 0.3s ease" }} style={{ position: 'sticky', top: '100px' }}>
          <Box sx={{ padding: '10px', boxShadow: "unset", background: '#171717', borderRadius: '8px', color: '#ededed' }}>
            <Typography variant='h5'>Category</Typography>
            <Box sx={{ display: 'flex', flexDirection: "column", justifyContent: 'flex-start', paddingTop: "10px" }}>
              {categories.map((nav) => (
                <Link key={nav.id} href={nav.id} sx={{ borderBottom: "1px solid #ededed", marginBottom: '10px' }}>
                  <Button role='link' aria-label="blogs category" fullWidth sx={{ color: "#da0037", flexDirection: "column", justifyContent: 'flex-start', alignItems: "flex-start" }}>
                    {nav.slug}
                  </Button>
                </Link>
              ))
              }
            </Box>
          </Box>
          {/* latest blog box */}
          <Box sx={{ width: "100%", borderRadius: '8px', marginBottom: '20px', padding: "20px", background: '#171717' }}>
            <Typography variant='h5' color={"#ededed"}>
              Latest blog
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", marginTop: '20px' }}>
              {blogs.map((e) => {
                return (
                  <Fragment key={e.title}>
                    <Box sx={{ display: "flex", gap: '20px', width: '100%', justifyContent: 'space-between' }}>
                      <Image src={e.image.url} priority={true} alt={e.excerpt} width={'100'} height={'100'} style={{ objectFit: 'cover', borderRadius: '8px' }} />
                      <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                        <Typography variant='h5' color={"#ededed"}>
                          {e.title}
                        </Typography>
                        <Typography variant='body2'  color={'#ededed'}>
                          {e.excerpt.slice(0, 20)}...
                        </Typography>
                        <Box sx={{ display: 'flex', marginTop: '10px', gap: '10px', color: "#ededed" }}>
                          <Avatar alt='Asadbek' src={e.profile.url} />
                          <Box>
                            <Typography variant='subtitle1' >{e.asadbek}</Typography>
                            <Box sx={{ color: "#ed0037" }}>
                              <Typography variant='subtitle2'>
                                {e.createdAt.slice(0, 10)}
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                    <Divider sx={{ marginTop: "10px", marginBottom: "10px", background: "#ededed" }} />
                  </Fragment>
                )
              })}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default sidebar;


const data = [
  {
    image: 'https://media.graphassets.com/Z69qaoW1SGef88ReW8ol',
    title: 'Frontend Engineer',
    exerpt: 'Get started blog app',
    author: {
      name: 'Asadbek',
      image: 'https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/J47Q48hSaGKc7Cfi09Bc',
    }
  },
  {
    image: 'https://media.graphassets.com/M1fXWFlRC6xHmSHm3xFr',
    title: 'Technical Ceo',
    exerpt: 'Get started blog app',
    author: {
      name: 'Asadbek',
      image: 'https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/J47Q48hSaGKc7Cfi09Bc',
    }
  },
  {
    image: 'https://media.graphassets.com/FpCuYWbASqCiNgJIQMQV',
    title: 'Production Manager',
    exerpt: 'Get started blog app',
    author: {
      name: 'Asadbek',
      image: 'https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/J47Q48hSaGKc7Cfi09Bc',
    }
  },
  {
    image: 'https://media.graphassets.com/M1fXWFlRC6xHmSHm3xFr',
    title: 'Full stack Developer',
    exerpt: 'Get started blog app',
    author: {
      name: 'Asadbek',
      image: 'https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/J47Q48hSaGKc7Cfi09Bc',
    }
  },
]