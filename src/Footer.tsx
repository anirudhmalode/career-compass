import React from 'react';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'white', p: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6">About Us</Typography>
          <Typography variant="body2">Your company description here.</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6">Services</Typography>
          <Typography variant="body2">Service 1</Typography>
          <Typography variant="body2">Service 2</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6">Contact</Typography>
          <Typography variant="body2">Email: info@example.com</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;