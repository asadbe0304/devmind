import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography, Link
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NavItems from './../../config/constants';
import Logo from './../../assets/s.png';
import Image from 'next/image';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = '50%';
const navItems = NavItems

export default function Navbar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', background: "#2A2B33", color: "#da0037" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Image
          src={Logo}
          width={40}
          height={40}
          priority={true}
          alt="Picture of the author"
        />
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.route} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', }} height={"10vh"}>
      <AppBar component="nav" sx={{ background: '#2A2B33', color: "#da0037", height: '10vh', borderBottom: '1px solid #7000FF', boxShadow: '0 1px 2px #6622FF' }}>
        <Toolbar sx={{ height: "10vh", background: "#2A2B33" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h2"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <Image
              src={Logo}
              width={40}
              height={45}
              alt="Picture of the author"
            />
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' }, color: '#da0037' }}>
            {navItems.map((item) => (
              <Link key={item.route} underline='none' sx={{ marginLeft: '5px', marginRight: '5px', color: '#da0037' }} href={item.route}>
                {item.label}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, height: "100vh", background: "#171718" },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
