import React from 'react';
import { Container, Box, Typography, Button } from '@mui/material';

const Transcript = () => {
  return (
    <Box id="transcript" minHeight="100vh" bgcolor="#666" color="white" display="flex" alignItems="center" justifyContent="center">
      <Container>
        <Typography variant="h4" gutterBottom textAlign="center">My Unofficial Transcript</Typography>
        <Box textAlign="center">
          <Button
            variant="contained"
            style={{ backgroundColor: '#777', color: 'white' }}
            href="path/to/your_transcript.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Transcript
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Transcript;
