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
            href="https://docs.google.com/viewer?url=https://raw.githubusercontent.com/ptsanchez/documents/main/patric_sanchez_unofficial_transcript.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Transcript
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

export default Transcript;
