import React from 'react';
import { Container, Box, Typography, Button } from '@mui/material';

const CoverLetter = () => {
  return (
    <Box id="coverLetter" minHeight="100vh" bgcolor="#777" color="white" display="flex" alignItems="center" justifyContent="center">
      <Container>
        <Typography variant="h4" gutterBottom textAlign="center">My Cover Letter</Typography>
        <Box textAlign="center">
          <Button
            variant="contained"
            style={{ backgroundColor: '#888', color: 'white' }}
            href="path/to/your_cover_letter.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Cover Letter
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default CoverLetter;
