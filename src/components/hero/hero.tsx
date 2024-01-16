import 'react-multi-carousel/lib/styles.css';
import { Avatar, Box, Typography } from "@mui/material";
import Carousel from 'react-multi-carousel';
import Image from 'next/image';

const hero = () => {
  return (
    <>
      <Box width={'100%'} height={'90vh'} sx={{}}>
        <Carousel
          infinite={true}
          showDots={true}
          ssr={true}
          responsive={{
            mobile: {
              breakpoint: { max: 4000, min: 0 },
              items: 1
            }
          }}
        >
          {
            data.map(item => (
              <Box key={item.image} sx={{ position: "relative", width: "100%", height: "90vh" }}>
                <Image src={item.image} alt={item.title} fill style={{ objectFit: 'cover', zIndex: 99 }} />
                <Box sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  width: '100%',
                  height: '100%',
                  background: 'rgb(0,0,0, 0.5)',
                }}>
                  <Box width={{ xs: '100%', xl: '70%' }} position={'relative'} sx={{ top: '50%', transform: 'translateY(-50%)', paddingLeft: '50px' }} color={'#ededed'} zIndex={999}>
                    <Typography variant='h2'>
                      {item.title}
                    </Typography>
                    <Typography variant='h5'>
                      {item.exerpt}
                    </Typography>
                    <Box sx={{ display: 'flex', marginTop: '20px', gap: '10px' }}>
                      <Avatar alt='Asadbek' src={item.author.image} />
                      <Box>
                        <Typography>{item.author.name}</Typography>
                        <Box>
                          12.05.2023 ,  10 min read
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

            ))
          }
        </Carousel>
      </Box>
    </>
  );
};

export default hero;

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