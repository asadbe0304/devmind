import { Box, Button, Typography, Link, Divider, Avatar } from '@mui/material';
import React, { Fragment } from 'react';
import Image from 'next/image';
import { SidebarProps } from './props.sidebar';
import { useRouter } from 'next/router';

export default function Sidebar({ blogs, categories }: SidebarProps) {
  const router = useRouter()

  return (
    <>
      <Box sx={{}} width={{ xs: '100%', md: '30%' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column-reverse', transition: "all 0.3s ease" }} style={{ position: 'sticky', top: '100px' }}>
          <Box sx={{ padding: '10px', background: '#2A2B33', borderRadius: '8px', color: '#ededed', border: '1px solid #7000FF' }}>
            <Typography variant='h5'>Category</Typography>
            <Box sx={{ display: 'flex', flexDirection: "column", justifyContent: 'flex-start', paddingTop: "10px" }}>
              {categories.map((nav) => (
                <Box key={nav.id}
                  // href={nav.id}
                  onClick={() => router.push(`${nav.slug}`)}
                  sx={{ marginBottom: '0px' }}>
                  <Divider sx={{ marginTop: "0px", marginBottom: "0px", background: "#7000ff" }} />
                  <Button role='link' aria-label="blogs category" fullWidth sx={{ color: "#7000FF", flexDirection: "column", justifyContent: 'flex-start', alignItems: "flex-start" }}>
                    {nav.slug}
                  </Button>
                </Box>
              ))
              }
            </Box>
          </Box>
          {/* latest blog box */}
          <Box sx={{ width: "100%", borderRadius: '8px', marginBottom: '20px', padding: "20px", background: '#2A2B33', border: '1px solid #7000FF' }}>
            <Typography variant='h5' color={"#ededed"}>
              Latest blog
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", marginTop: '20px' }}>
              {blogs.map((e) => {
                return (
                  <Fragment key={e.title}>
                    <Box
                      // href={`blog/${e.slug}`} 
                      onClick={() => router.push(`blog/${e.slug}`)}
                    // underline='none'
                    >
                      <Box sx={{ display: "flex", gap: '20px', width: '100%', justifyContent: 'space-between' }}>
                        <Image src={e.image.url} priority={true} alt={e.excerpt} width={'100'} height={'100'} style={{ objectFit: 'cover', borderRadius: '8px' }} />
                        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                          <Typography variant='h5' color={"#ededed"}>
                            {e.title}
                          </Typography>
                          <Typography variant='body2' color={'#ededed'}>
                            {e.excerpt.slice(0, 20)}...
                          </Typography>
                          <Box sx={{ display: 'flex', marginTop: '10px', gap: '10px', color: "#ededed" }}>
                            <Avatar alt='Asadbek' src={e.profile.url} />
                            <Box>
                              <Typography variant='subtitle1' >{e.asadbek}</Typography>
                              <Box sx={{ color: "#7000FF" }}>
                                <Typography variant='subtitle2' sx={{ fontSize: '14px' }}>
                                  {e.createdAt.slice(0, 10)}
                                </Typography>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                    <Divider sx={{ marginTop: "10px", marginBottom: "10px", background: "#7000ff" }} />
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

// export default sidebar;
