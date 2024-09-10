import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, CardActions, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'Developer Journal',
    description: 'CRUD web application where users can keep track of their projects. Users can logs to each project to showcase progress.',
    projectLink: 'https://cse110-sp24-group15.github.io/cse110-sp24-group15/project/homePage/home_page.html',
    developmentLink: '/development/1',  
    githubLink: 'https://github.com/ptsanchez/developer-journal', 
  },
  {
    title: 'Economic Impact of Musical Tours',
    description: 'Investigating and exploring how local hospitality services and inflation is influenced from musical tours.',
    projectLink: 'https://github.com/ptsanchez/group65-sp24/blob/main/FinalProject_group065.ipynb',
    developmentLink: '/development/2', 
    githubLink: 'https://github.com/ptsanchez/economic-impact-of-tours',
  },
  {
    title: 'NFA to DFA',
    description: 'Java algorithm that converts a Nondeterministic Finite Automaton to a Deterministic Finite Automaton',
    projectLink: 'https://github.com/ptsanchez/nfaToDfa',
    developmentLink: '/development/3',  
    githubLink: 'https://github.com/ptsanchez/nfaToDfa',
  },
];

const Home = () => {
  return (
    <Box id="home" minHeight="100vh" bgcolor="#444" color="white" display="flex" alignItems="center" justifyContent="center">
      <Container>
        <Typography variant="h3" gutterBottom textAlign="center">Patric Sanchez</Typography>
        <Typography variant="body1" textAlign="center">
          Hi! I'm an Undergraduate Computer Science and Mathematics student at the University of California - San Diego. 
          I strive to apply my technical knowledge and passion for learning to create innovative solutions for complex problems. Explore some of my work below!
        </Typography>
        
        <Box mt={5}>
          <Grid container spacing={5}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <Card style={{ backgroundColor: '#333', color: 'white' }}>
                  <CardContent>
                    <Typography variant="h6" component="div">
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" style={{ color: '#bbb' }}>
                      {project.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="secondary" component={Link} to={project.developmentLink}>
                      Development
                    </Button>
                    <Button size="small" color="primary" href={project.projectLink} target="_blank">
                      View Project
                    </Button>
                    <Button size="small" color="inherit" href={project.githubLink} target="_blank">
                      View GitHub
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
