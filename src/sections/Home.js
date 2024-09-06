import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Home = () => {
  return (
    <Box id="home" minHeight="100vh" bgcolor="#444" color="white" display="flex" alignItems="center" justifyContent="center">
      <Container>
        <Typography variant="h3" gutterBottom textAlign="center">Patric Sanchez</Typography>
        <Typography variant="body1" textAlign="center">
          Hi! I'm an Undergraduate Computer Science and Mathematics student at the University of California - San Diego. 
          I strive to apply my technical knowledge and passion for learning to create innovative solutions for complex problems. Explore my work below!
        </Typography>
      </Container>
    </Box>
  );
};

export default Home;
