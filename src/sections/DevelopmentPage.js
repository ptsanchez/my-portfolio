import React, { Fragment } from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import Divider from '@mui/material/Divider';

import nfaDiagram from '../imgs/automaton.svg'
import dfaDiagram from '../imgs/automaton2.svg'
import exampleFile from '../imgs/cseProject6.png'
import exampleCompile from '../imgs/cseProject7.png'
import exampleOutput from '../imgs/cseProject8.png'
import teamPage from '../imgs/teamPage.png'
import miroBoard from '../imgs/miroBoard.png'

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
                    <Box mb={12} />
                    <Button variant="contained" color="primary" onClick={() => navigate('/')}  style={{ marginBottom: '20px' }} >
                      Back to Home
                    </Button>
                    <Typography variant="h3">Development of Developer Journal </Typography>
                    <Box mb={2} />
                    <img src={teamPage} alt="Team members" style={{ display: 'block', margin: '0 auto' }} />
                    <Box mb={2} />
                    <Typography variant="body1">
                      This is my most involved project yet, where I was a part of a 10-person team that developed a CRUD full-stack web application. Over the course 
                      of 6 weeks, we applied numerous software architecture design patters to create an efficient and scalable system. We utilized Agile methodoligies which included 
                      but were not limited to user stories, week-long sprints, daily standups, and retrospective meetings. 
                    </Typography>
                    <Box mb={2} />
                    <Divider> Our team values</Divider>
                    <Typography variant="body1">
                      Punctuality: We strive to arrive on time for meetings and adhere to deadlines.
                    </Typography>
                    <Typography variant="body1">
                      Respect: We will respect each other as programmers and as people.
                    </Typography>
                    <Typography variant="body1">
                      Collaboration: We have strength in numbers
                    </Typography>
                    <Box mb={2} />
                    

                    <Typography variant="body1">
                      An important lesson I took away from this project is that software development is an extremely dynamic process. Although we had a lot of planning 
                      ahead of time, there are many factors out of our control which influence the development of a project. My understanding of system design was enhanced, as I 
                      learned the importance of teamwork, communication, and strategic delegation. If one person is struggling with their part, that work is able to be 
                      split or even reassigned depending on how our work cycle evolved. I would like to make a note here that although I am listed as a "back-end dev", 
                      I spend my work with the front-end team to help implement some of the pages. For instance, we had an great team leader who was always on top
                      of things and made sure the pipeline was up to check, but this resulted in him not being able to contribute to the page he was supposed to implement; Hence, 
                      I was reassigned to also finish his page while also working on my own page, due to me being ahead of schedule on my work.  
                    </Typography>
                    <Box mb={2}/>
                    <Divider> Developer Journal Features</Divider>
                    <Typography variant="body1">
                      1. Add several different projects with unique logs.
                    </Typography>
                    <Typography variant="body1">
                      2. Different pages to differentiate active vs past projects.
                    </Typography>
                    <Typography variant="body1">
                      3. Project Home page displaying a TODO list and link to an issue for the project
                    </Typography>
                    <Typography variant="body1">
                      4. Ability to present TODO's in MARKDOWN and is editable
                    </Typography>
                    <Typography variant="body1">
                      5. Ability to see logs on a month calendar, week calendar, and day calendar to showcase the progress of a particular project visually.
                    </Typography>
                    <Typography variant="body1">
                      6. Logs showcase title, time, and and editable progress bar and a CODE SNIPPT using Code Mirror
                    </Typography>
                    <Typography variant="body1">
                      7. Feedback page with a sentiment widget
                    </Typography>

                    <Box mb={2} />

                    <Divider>Planning</Divider>
                    <Typography variant="body1">
                      To plan this project, we first created User Stories and User Personas to get inspiration for this project. We used a behavior driven development process 
                      and brainstormed different features based on the stories and personas. 
                    </Typography>
                    <Typography variant="body1">
                      You can view the detailed user stories of the Developer Journal project here:{" "}
                      <a href="https://github.com/cse110-sp24-group15/cse110-sp24-group15/blob/main/specs/users/user_stories.md" 
                       target="_blank" 
                        rel="noopener noreferrer"
                        style={{ color: '#0000EE' }}>
                        User Stories Documentation
                      </a> 
                     </Typography> 
                    
                     <Typography variant="body1">
                      We then utilized a Miro Board to visualize our design. This Miro Board contains a design outline for each page in the form of a diagram. Click for full resolution.
                    </Typography>
                    <a href={miroBoard} target="_blank" rel="noopener noreferrer">
                     <img 
                     src={miroBoard} 
                      alt="Miro Board" 
                      style={{ 
                        display: 'block', 
                        margin: '0 auto', 
                        width: '100%',  
                        height: 'auto' 
                      }} 
                      />
                    </a>
                      
                    <Box mb={2} />
                    <Divider>CI/CD Pipeline</Divider>
                    <Typography variant="body1">
                      Every Feature was assigned an issue which used a template. For each issue, a Pull Request was made. For Continuous Integration, the following checks through Github Actions were run:
                    </Typography>
                    <Typography variant="body1">
                    • Superlinting for CSS, HTML, and JavaScript
                    </Typography>
                    <Typography variant="body1">
                    • Codacy Code Quality check. Click here for results:{" "}
                      <a href="https://app.codacy.com/gh/cse110-sp24-group15/cse110-sp24-group15/dashboard" 
                       target="_blank" 
                        rel="noopener noreferrer"
                        style={{ color: '#0000EE' }}>
                        Codacy Dashboard
                      </a> 
                     </Typography>
                     <Typography variant="body1">
                     • Node.js testing on various versions 16.x and 18.x
                     </Typography>
                     <Box mb={1} />
                     <Typography varitnt="body1">
                      One all the cheks passes, a manual review was held to check code quality. Once 1 review was approved, the PR was merged with main and the Continuous Development was run:
                     </Typography>
                     <Typography variant="body1">
                      • JSDoc Generation
                     </Typography>
                     <Typography variant="body1">
                      • GitHub Pages Deployment
                     </Typography>

                     <Box mb={2} />
                     <Divider>Testing</Divider>
                     <Typography variant="body1">
                      For the developer journal, we employed two forms of testing:
                     </Typography>
                     <Typography variant="body1">
                      1. Unit testing for each page's javascript which can be found in the following format within the GitHub Repository: project/tests/PAGENAME.tests.js
                     </Typography>
                     <Typography variant="body1">
                      2. End to End Pupeteer Testing which can be found in the following format project/tests/PAGENAME.tests.js
                     </Typography>

                      <Box mb={2} />
                     <Divider>Documentation</Divider>
                     <Typography variant="body1">
                     To keep track of our documentation, we autogenerated it using JSDocs. Here is the link to our code documentation:{" "}
                      <a href="https://cse110-sp24-group15.github.io/cse110-sp24-group15/docs/jsdoc/index.html" 
                       target="_blank" 
                        rel="noopener noreferrer"
                        style={{ color: '#0000EE' }}>
                        JSDocs
                      </a> 
                     </Typography>
                     <Box md={2}/>
                     <Typography variant="body1">
                     In addition, to allow users to learn how to use our website in detail, one of our fantastic team members made a documentation website. I highly recommend checking it out here:{" "}
                      <a href="https://rabonghan.github.io/jover-developer-journal-documentation-website/#home" 
                       target="_blank" 
                        rel="noopener noreferrer"
                        style={{ color: '#0000EE' }}>
                        Documentation Website
                      </a> 
                     </Typography>
                     <Box md={2}/>
                    </Fragment>
                  )
              }


              else if (projectId === '2'){
                return (
                  <Fragment>
                    <Button variant="contained" color="primary" onClick={() => navigate('/')}  style={{ marginBottom: '20px' }} >
                      Back to Home
                    </Button>
                    <Typography variant="h3">
                      Development of Data Science Project
                    </Typography>
                    <Box mb={1} />
                    <Typography variant="subtitle1">
                      This project is self-contained in the Jupyter Notebook, so I highly recommend reading everything here:{" "}
                      <a href="https://github.com/ptsanchez/economic-impact-of-tours/blob/main/FinalProject_group065.ipynb" 
                       target="_blank" 
                        rel="noopener noreferrer"
                        style={{ color: '#0000EE' }}>
                        Economic Impact of Tours on Services and Inflation
                      </a> 
                     </Typography> 
                    <Typography variant="body1">
                      For this project, I worked in a diverse group of 4 people, including myself, where we came together and settled on a topic to move forward with.
                      After some discussion, we eventually settled on a specific area of interest and formulated it into something that we could conduct research on. I worked on the more technical side
                      of the project. My specific contributions included: Identifying important variables in the dataset in relation to the context of our project. Employed data wrangling techniques on the 
                      dataset in order to transform and structure the data in a proper manner for future exploratory data analysis use. Performed numerous revisions throughought the duration of the project
                      to ensure the Jupyter Notebook was maintained to a high standard.
                    </Typography>

                    <Box mb={2} />

                    <Divider>Abstract of our Project</Divider>
                    <Typography variant="body1">
                      Our project examines the economic impact of Taylor Swift's Eras Tour on local economies in North America between March 2023 and August 2023, 
                      to understand how factors such as venue size, average ticket price, and concert attendance influenced inflation in sectors including retail, 
                      hospitality, and the restaurant industry. By analyzing a dataset that includes variables such as hospitality prices and Consumer Price Index (CPI)
                      inflation rates for each of the concerts, we aim to identify the economic impact linked to the tour.
                    </Typography>
                    <Box mb={1} />
                    <Typography variant="body1">
                    Our motivation for this project comes from the well-known cultural impact of Taylor Swift, including reports of economic boosts in cities hosting Eras Tour stops.
                     Known as "Swiftonomics," there has been increased tourism, greater demand for local services, and inflation in many sectors. There have been speculation and news articles 
                     highlighting the tour's economic contributions, but we wanted to create a detailed, city-by-city analysis exploring the tour and its specific impact.
                    </Typography>
                    <Box mb={1} />
                    <Typography variant="body1">
                      Our findings show that cities on the Eras Tour route experienced significant increases in local economic activity. The data reveal a correlation between higher concert attendance
                      and greater inflation rates, suggesting that the presence of Swift's fans played a critical role in increasing demand and prices. The results also bring to light that while major events
                      such as the Eras tour can stimulate economic growth and job creation in cities, they may also cause issues related to inflation and affordability for local residents.
                      Our research project contributes to a larger understanding of how economic dynamics can change due to major entertainment events and provides a framework for future research of
                      similar events.
                    </Typography>
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
