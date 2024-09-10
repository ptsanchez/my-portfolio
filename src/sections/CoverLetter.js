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
            href="https://docs.google.com/viewer?url=https://raw.githubusercontent.com/ptsanchez/documents/main/patric_sanchez_cover_letter.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Cover Letter
          </Button>
          <Box mb={1} />
          <Typography variant="subtitle1" fontStyle={'italic'}>
          Last updated on 9/9/24
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default CoverLetter;
