import { Avatar, Box, Divider, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { ContentProps } from './props.content';

const content = ({ blogs }: ContentProps) => {

  console.log(blogs);

  return (
    <>
      <Box width={{ xs: '100%', md: '70%' }} sx={{ background: "#171718", borderRadius: '8px' }}>
        {
          blogs.map((e) => {
            return (
              <Box key={e.title} sx={{ padding: '10px', margin: '10px', borderRadius: '4px', boxShadow: '0 8px 16px rgba(255,255,255,0.1)' }}>
                <Box position={'relative'} width={'100%'} height={{ xs: '30vh', md: '50vh' }}>
                  <Image src={e.image.url} priority={true} alt={e.excerpt} fill style={{ objectFit: 'cover', borderRadius: '10px', }} />
                </Box>
                <Typography variant='h4' marginTop={'30px'} color={'#ededed'}>{e.title}</Typography>
                <Typography variant='body1' color={"#ededed"}> {e.excerpt}</Typography>
                <Divider sx={{ background: "#ededed", marginTop: '30px' }} />
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '20px' }}>
                  <Avatar src={e.profile.url} alt={e.excerpt} />
                  <Box>
                    <Typography variant='subtitle1' color={'#ededed'}>
                      {e.asadbek}
                    </Typography>
                    <Box color={'#ededed'}>
                      {e.createdAt.slice(0, 10)}
                    </Box>
                  </Box>
                </Box>
              </Box>
            )
          })
        }
      </Box>
    </>
  );
};

export default content;


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