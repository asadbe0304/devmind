import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { MdFacebook, MdWhatsapp } from "react-icons/md"
import Link from '@mui/material/Link';
import Logo from "./../../assets/s.png"
import Image from 'next/image';

function Copyright() {
  return (
    <Typography variant="body2" sx={{ color: '#da0037' }}>
      {'Copyright © '}
      <Link color="inherit" style={{marginRight:'5px'}} href="https://devminds.uz/">
        One Team Group 
      </Link>
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


export default function StickyFooter() {

  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: "#171718"
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', sm: { flexDirection: 'column' } }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <Image
            src={Logo}
            width={40}
            height={40}
            alt="Picture of the logo"
          />
          <Typography variant='h5' color={'#da0037'}>
            Dev Blog
          </Typography >
        </Box>
        <Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
            <Link href="https://devminds.uz" color={'#da0037'}>
              <MdFacebook className='icon' />
            </Link>
            <Link href="https://devminds.uz" color={'#da0037'}>
              <MdWhatsapp className='icon' />
            </Link>
          </Box>
          <Copyright />
        </Box>
      </Box>
    </Box>
  );
}
