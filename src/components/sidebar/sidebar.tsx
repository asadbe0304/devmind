import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import navItems from '../../config/constants';

const sidebar = () => {
  return (
    <>
      <Box sx={{ width: '40%', padding: '20px', border: "1px solid #ededed", borderRadius: '8px', color: '#ededed' }}>
        <Typography variant='h5'>Category</Typography>
        <Box sx={{display:'flex',}}>
          {navItems.map((nav) => (
            <Button key={nav.route} sx={{color:"#da0037"}}>
              {nav.label}
            </Button>
          ))
          }
        </Box>
      </Box>
    </>
  );
};

export default sidebar;