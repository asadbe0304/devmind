import { Avatar, Box, Divider, Typography, Link, Tooltip, Button } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';
import { ContentProps } from './props.content';
import { calculatedEstimatedTime } from '../../helpers/time.format';
import { useRouter } from 'next/router';
import { MdShare, MdLink } from 'react-icons/md';
// import ShareIcon from '@mui/icons-material/Share';
// import TelegramIcon from '@mui/icons-material/Telegram';


export default function Content({ blogs }: ContentProps) {
  const [copied, setCopied] = useState(false)
  const router = useRouter()
  const copyToClipboard = async () => {
    console.log(blogs);

    try {
      const urlToCopy = window.location.href;
      await navigator.clipboard.writeText(urlToCopy);
      setCopied(true);
    } catch (err) {
      console.error('Error copying to clipboard:', err);
    }
  };

  return (
    <>
      <Box width={{ xs: '100%', md: '70%', }}
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '10px', }} >
        {
          blogs.map((e) => {
            return (
              <Box key={e.title} sx={{ padding: '10px', margin: '0px', marginTop: '0px', borderRadius: '4px', background: "#2A2B33", border: '1px solid #7000FF', width: '100%' }}
              >
                <Box
                  // href={`blog/${e.slug}`} 
                  sx={{ cursor: 'pointer', textDecoration: 'none' }}
                  onClick={() => router.push(`/blog/${e.slug}`)}
                >
                  <Box position={'relative'} width={'100%'} height={{ xs: '30vh', md: '50vh' }}>
                    <Image src={e.image.url} priority={true} alt={e.excerpt} fill style={{ objectFit: 'cover', borderRadius: '10px', }} />
                  </Box>
                  <Typography variant='h4' marginTop={'30px'} color={'#ededed'}>{e.title}</Typography>
                  <Typography variant='body1' color={"#ededed"}> {e.excerpt}</Typography>
                </Box>
                <Divider sx={{ background: "#7000FF", marginTop: '30px' }} />
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px', marginTop: '20px' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Avatar src={e.profile.url} alt={e.excerpt} />
                    <Box>
                      <Typography variant='subtitle1' color={'#ededed'}>
                        {e.asadbek}
                      </Typography>
                      <Box color={'#7000FF'} sx={{fontSize:'14px'}}>
                        {e.createdAt.slice(0, 10)} {calculatedEstimatedTime(e.desciption.text)} min read
                      </Box>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Tooltip title={'Open Telegram'}>
                      <Button variant='contained' sx={{ background: '#7000FF' }} onClick={() => { router.push('https://t.me/Aa_Asadbek') }}>
                        <MdShare style={{ cursor: 'pointer', width: '24px', height: '24px' }} />
                      </Button>
                    </Tooltip>
                    <Tooltip title={`${copied ? "Copied" : 'Copy Url'}`}>
                      <Button variant={'contained'} sx={{background:'#7000FF'}}>
                        <MdLink onClick={copyToClipboard} style={{ cursor: 'pointer', width: '24px', height: '24px' }} />
                      </Button>
                    </Tooltip>
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

// export default content;
