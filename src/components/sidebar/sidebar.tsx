import { Box, Button, Typography, Link, Divider, Avatar, colors, } from '@mui/material';
import React, { Fragment } from 'react';
import navItems from '../../config/constants';
import Image from 'next/image';

const sidebar = () => {
  return (
    <>
      <Box sx={{ width: '30%', }} >
        <Box sx={{ display: 'flex', flexDirection: 'column-reverse', transition: "all 0.3s ease" }} style={{ position: 'sticky', top: '100px' }}>
          <Box sx={{ padding: '20px', boxShadow: "unset", background: '#171717', borderRadius: '8px', color: '#ededed' }}>
            <Typography variant='h5'>Category</Typography>
            <Box sx={{ display: 'flex', flexDirection: "column", justifyContent: 'flex-start', paddingTop: "10px" }}>
              {navItems.map((nav) => (
                <Link key={nav.route} href={nav.route} sx={{ borderBottom: "1px solid #ededed", marginBottom: '10px' }}>
                  <Button fullWidth sx={{ color: "#da0037", flexDirection: "column", justifyContent: 'flex-start', alignItems: "flex-start" }}>
                    {nav.label}
                  </Button>
                </Link>
              ))
              }
            </Box>
          </Box>
          <Box sx={{ width: "100%", borderRadius: '8px', marginBottom: '20px', padding: "20px", background: '#171717' }}>
            <Typography variant='h5' color={"#ededed"}>
              Latest blog
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", marginTop: '20px' }}>
              {data.map((e) => {
                return (
                  <Fragment key={e.title}>
                    <Box sx={{ display: "flex", gap: '20px', }}>
                      <Image src={e.image} alt={e.exerpt} width={'100'} height={'100'} style={{ objectFit: 'cover', borderRadius: '8px' }} />
                      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography variant='body1' color={"#ededed"}>
                          {e.title}
                        </Typography>
                        <Typography variant='body2' color={'#ededed'}>
                          {e.exerpt}
                        </Typography>
                        <Box sx={{ display: 'flex', marginTop: '10px', gap: '10px', color: "#ededed" }}>
                          <Avatar alt='Asadbek' src={e.author.image} />
                          <Box>
                            <Typography variant='subtitle1' >{e.author.name}</Typography>
                            <Box sx={{ color: "#ed0037" }}>
                              <Typography variant='subtitle2'>
                                12.05.2023
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
    image: 'https://media.graphassets.com/MxJZhmooRRuudoErkQ38',
    title: 'Full stack Developer',
    exerpt: 'Get started blog app',
    author: {
      name: 'Asadbek',
      image: 'https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/J47Q48hSaGKc7Cfi09Bc',
    }
  },
]