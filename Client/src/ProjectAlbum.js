
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

import React, { useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import './ProjectAlbum.css';
import { Link as RouterLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

import theme from './theme'
import Sidebar from './Sidebar';



function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        ListPro!
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}






export default function Album() {


  const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    

    function handleScroll() {
      window.scroll({
        top: 500,
        left: 10, 

        behavior: 'smooth',
      });
    }



    const [projectName, setProjectName] = useState('');
    const [projects, setProjects] = useState([]);
    const [sharedprojects, setsharedProjects] = useState([]);
    useEffect(() => {
        // Fetch the list of projects from the server
        const fetchCourses = async () => {
          try {
            const response = await axios.get('/api/allprojects');
            setProjects(response.data.projects);
          } catch (error) {
            console.error('Fetch Project error:', error);
          }

          try {
            const response = await axios.get('/api/allsharedprojects');
            setsharedProjects(response.data.sharedProjects);
          } catch (error) {
            console.error('Fetch Shared Project error:', error);
          }
        };
    
        fetchCourses();
      }, []);


      const handleAddCourse = async (projectId) => {
    
        console.log(projectId);
        
        try {
          await axios.get('/api/getcookie', {
            params: {
              projectId: projectId,
            },});
        } catch (error) {
          console.error('Add course error:', error);
        }
        navigate('/MainPage');
      };


      const handleDeleteCourse = async (projectId) => {
    
       
        
        try {
          await axios.get('/api/deletepost', {
            params: {
              projectId: projectId,
            },});
        } catch (error) {
          console.error('Delete project error:', error);
        }
        window.location.reload();
      
      };

     

      




  return (
  
    <ThemeProvider theme={theme}>
        <Sidebar/>
      <CssBaseline />
      <div className='album'>
     
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            // bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Project Collection
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
            A powerful application for efficient project management. Streamline tasks, 
            collaborate with your team, and meet deadlines seamlessly. Simplify your workflow with Project Manager.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
                <RouterLink to="/Newproject">
              <Button variant="contained"  >Create New Project</Button></RouterLink>
              
              <Button variant="outlined"  onClick={handleScroll}>Previus Projects</Button>
              
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
          {projects.map((project) => (
              <Grid item key={project._id} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' ,bgcolor:'white' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '3.25%',
                    }}
                    image="https://miro.medium.com/v2/resize:fit:1400/1*mudojHtjCuxDybQH5IPtgQ.jpeg"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                     {project.name}
                    </Typography>
                    <Typography>
                     
                     Created_By : "{project.created_by}"
                     </Typography>
                   
                  </CardContent>

                  <CardActions>
                 
                  <Button variant="contained" size="medium"    onClick={() => handleAddCourse(project._id)}>View</Button> 
                  <Button variant="contained" size="medium"  sx={{marginLeft:1}}  onClick={() => handleDeleteCourse(project._id)}>Delete</Button>
                   
                   
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

        <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h3"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Shared With You
            </Typography>
            </Container>

{/* Shared Projectss */}
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
          {sharedprojects.map((project) => (
              <Grid item key={project.projectId_id} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' ,bgcolor:'white' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '3.25%',
                    }}
                    image="https://img.freepik.com/free-vector/project-management-design-concept-symbolizing-analysis-solving-problems-isometric-vector-illustration_1284-77122.jpg?w=2000"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                     {project.projectId.name}
                    </Typography>
                    <Typography>
                     
                    Created_By : "{project.projectId.created_by}"
                    </Typography>

                   
                  </CardContent>

                  <CardActions>
                  <RouterLink to="/MainPage">
                    <Button variant="contained" size="medium"    onClick={() => handleAddCourse(project._id)}>View</Button> </RouterLink>
                   
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      </div>
      <Box sx={{ bgcolor: 'background.paper', p: 4 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Our Website ListPro!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );

}
