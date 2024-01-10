import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" sx={{color:'#da0037'}}>
      {'Copyright © '}
      <Link color="inherit" href="https://devminds.uz/">
        Your Website
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
      <Container maxWidth="sm">
        <Typography variant="body1" sx={{color:"#ededed"}}>
          My Personal Blog App
        </Typography>
        <Copyright />
      </Container>
    </Box>
  );
}
