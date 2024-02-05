import 'react-multi-carousel/lib/styles.css';
import { Avatar, Box, Typography } from "@mui/material";
import Carousel from 'react-multi-carousel';
import Image from 'next/image';
import { HeroProps } from './props.hero';
import { calculatedEstimatedTime } from '../../helpers/time.format';

const hero = ({ blogs }: HeroProps) => {

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
            blogs.map(item => (
              <Box key={item.id} sx={{ position: "relative", width: "100%", height: "90vh" }}>
                <Image src={item.image.url} priority={true} alt={item.title} fill style={{ objectFit: 'cover', zIndex: 99 }} />
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
                  <Box width={{ xs: '100%', xl: '70%' }} position={'relative'} sx={{ top: '50%', transform: 'translateY(-50%)', paddingLeft: { xs: '10px', md: '50px' } }} color={'#ededed'} zIndex={999}>
                    <Typography variant='h5' sx={{ fontSize: { xs: '30px', md: '50px', color: '#fff' } }}>
                      {item.title}
                    </Typography>
                    <Typography variant='h5' sx={{ fontSize: { xs: '25px', md: '30px', color: '#999' } }}>
                      {item.excerpt}
                    </Typography>
                    <Box sx={{ display: 'flex', marginTop: '20px', gap: '10px' }}>
                      <Avatar alt='Asadbek' src={item.profile.url} />
                      <Box>
                        <Typography variant='h5'>{item.asadbek}</Typography>
                        <Box>
                          {item.createdAt.slice(0, 10)} ,  {calculatedEstimatedTime(item.desciption.text)} min read
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
    image: 'https://media.graphassets.com/M1fXWFlRC6xHmSHm3xFr',
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