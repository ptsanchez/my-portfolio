import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <AppBar position="fixed" style={{ backgroundColor: '#333' }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Patric Sanchez Portfolio
        </Typography>
        <Box display="flex" alignItems="center">
          <Typography
            variant="body1"
            component="a"
            href="mailto:p3sanchez@ucsd.edu"
            style={{ color: '#1E90FF', marginRight: '15px', textDecoration: 'none' }}
          >
            Email
          </Typography>
          <Typography
            variant="body1"
            component="a"
            href="https://github.com/ptsanchez/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#1E90FF', marginRight: '15px', textDecoration: 'none' }}
          >
            GitHub
          </Typography>
          <Typography
            variant="body1"
            component="a"
            href="https://www.linkedin.com/in/patric-s/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#1E90FF', marginRight: '15px', textDecoration: 'none' }}
          >
            LinkedIn
          </Typography>
        </Box>
        <Button color="inherit">
          <Link to="home" smooth duration={500} offset={-70}>Home</Link>
        </Button>
        <Button color="inherit">
          <Link to="resume" smooth duration={500} offset={-70}>Resume</Link>
        </Button>
        <Button color="inherit">
          <Link to="transcript" smooth duration={500} offset={-70}>Transcript</Link>
        </Button>
        <Button color="inherit">
          <Link to="coverLetter" smooth duration={500} offset={-70}>Cover Letter</Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;