import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box mt={5} py={3} bgcolor="#222" color="white" textAlign="center">
      <Typography variant="body1">
        © 2024 Patric Sanchez. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
