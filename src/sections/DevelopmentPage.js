import React, { Fragment } from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import nfaDiagram from '../imgs/automaton.svg'
import dfaDiagram from '../imgs/automaton2.svg'
import exampleFile from '../imgs/cseProject6.png'
import exampleCompile from '../imgs/cseProject7.png'
import exampleOutput from '../imgs/cseProject8.png'

const DevelopmentPage = () => {
  const { projectId } = useParams();  
  const navigate = useNavigate();

  return (
    <Box id="home" minHeight="100vh" bgcolor="#6B6B6B" color="white" display="flex" alignItems="center" justifyContent="center">
      <Container>
        
        {(() => {
              if (projectId === '1'){
                  return (
                    <Fragment>
                    <Button variant="contained" color="primary" onClick={() => navigate('/')}  style={{ marginBottom: '20px' }} >
                      Back to Home
                    </Button>
                    <Typography>Under Construction!~</Typography>
                    </Fragment>
                  )
              }
              else if (projectId === '2'){
                return (
                  <Fragment>
                    <Button variant="contained" color="primary" onClick={() => navigate('/')}  style={{ marginBottom: '20px' }} >
                      Back to Home
                    </Button>
                    <Typography>Under Construction!~</Typography>
                    </Fragment>
                )
              }
              else if (projectId === '3'){
                return (  
                  <Fragment>
                    <Box mb={12} />
                    <Button variant="contained" color="primary" onClick={() => navigate('/')}  style={{ marginBottom: '20px' }} >
                      Back to Home
                    </Button>
                    
                    <Typography variant="h3">
                      Development of NFA to DFA Project
                    </Typography>
                    <Box mb={3} />
                    <Typography variant="body1">
                      This is an algorithm designed in Java that converts a Nondeterministic Finite Automaton to a Determinstic Finite Automaton.
                      If these terms don't make sense to you right now, that's ok! Just a bit of a warning that the rest of this project description might now 
                      make much sense. This development journal assumes knowledge in Theory of Computation, a class I enjoyed greatly.
                    </Typography>
                    <Box mb={2} />
                  <Typography variant="body1">
                    The alphabet that I chose for this example will be defined as Σ = a,b. The state diagram of the three-state NFA I will be working with
                    for this task is below. The following is an NFA over Σ that accepts the set of strings that starts with a and ends with b.
                  </Typography>
                  <Box mb={2} />
                  <img src={nfaDiagram} alt="NFA State Diagram" style={{ display: 'block', margin: '0 auto' }} />
                  <Box mb={2} />
                  <Typography variant="body1">
                    This algorithm is a Java algorithm that takes in an NFA and oupts a DFA representation of the 
                    same language using the "macro-state" construction as stated above. As input, my algorithm takes the filename of a text filename
                    passed as a command line argument. This file is assumed to have been properly structured as such: The first line contains the list of
                    space-separated states in the NFA. For the above NFA, the first line would be "q0 q1 q2". The second line contains ONLY the initial state.
                    The third line contains ONLY the accept state(s). The rest of the lines of the text file are for the transitions, where the first part is the 
                    beginning state, the second part is the input that the machine reads, and the third part is the state to transition to. For example, the 
                    way to formate the transition from q_0 to q_1 that reads input 'a' would be: "q_0 a q_1." The following screenshot below lists
                    the example text file in the program github repository that is a representation of the above NFA.
                  </Typography>

                  <Box mb={2} />
                  <img src={exampleFile} alt="Example Input File" style={{ display: 'block', margin: '0 auto' }} />    
                  <Box mb={2} />

                  <Typography variant="body1">
                    In order to run the program, you must compile and run "nfaToDfa" like you would any normal Java program in the terminal. However, you must ensure 
                    you include the formatted text file name as a command line argument. An example that includes the file above is as follows:
                  </Typography>

                  <Box mb={2} />
                  <img src={exampleCompile} alt="Example Compile" style={{ display: 'block', margin: '0 auto' }} />    
                  <Box mb={2} />

                  <Typography variant="body1">
                    Below is the example file running with my program, with the appropriate output in the terminal. It is easy to see that the output lists 
                    both the NFA and DFA contents. 
                    <Box mb={2} />
                    <img src={exampleOutput} alt="Example Output" style={{ display: 'block', margin: '0 auto' }} />
                    <Box mb={2} />
                    The main point of interest lies in the map of transitions of the DFA class. It follows the same conventions
                    as the ones used in the textbook, where any arrows not present in the NFA are implied to transition to the empty set, hence the "macro-state" conversion.
                    The DFA recognized the same language as the original input NFA and is equivalent to the following state diagram which can be easily verified: 
                    <Box mb={2} />
                    <img src={dfaDiagram} alt="DFA State Diagram" style={{ display: 'block', margin: '0 auto' }} />
                    <Box mb={2} />
                  </Typography>
                </Fragment>
                )
              }
              return null;
            })()}
      </Container>
    </Box>
  );
};

export default DevelopmentPage;
