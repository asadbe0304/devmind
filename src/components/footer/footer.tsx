import Box from '@mui/material/Box';
import { MdFacebook, MdWhatsapp, MdMessage } from "react-icons/md";
import Link from '@mui/material/Link';
import Logo from "./../../assets/s.png";
import Image from 'next/image';

function Copyright() {
  return (
    <Box sx={{ color: '#7000FF' }}>
      {'Copyright © '}
      <Link href="https://devminds.uz/" color="inherit" underline="none" sx={{ marginRight: '5px', fontSize:'14px' }}>
        One Team Group
      </Link>
      {new Date().getFullYear()}
      {'.'}
    </Box>
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
        backgroundColor: "#2A2B33",
        border: '1px solid #7000FF'
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', sm: { flexDirection: 'column' } }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <Image
            src={Logo}
            width={40}
            height={45}
            alt="Picture of the logo"
          />
        </Box>
        <Box>
          <Box sx={{ display: 'flex', justifyContent: 'flex-start', gap: '10px' }}>
            <Link href="https://devminds.uz" color={'#7000FF'} aria-label={"social link"} underline="none">
              <MdFacebook className='icon' />
            </Link>
            <Link href="https://devminds.uz" color={'#7000FF'} aria-label={"social link"} underline="none">
              <MdWhatsapp className='icon' />
            </Link>
            <Link href="https://devminds.uz" color={'#7000FF'} aria-label={"social link"} underline="none">
              <MdMessage className='icon' />
            </Link>
          </Box>
          <Copyright />
        </Box>
      </Box>
    </Box>
  );
}