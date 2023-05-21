
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
import './Tasklist.css';
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

    const navigate = useNavigate();
    

    function handleScroll() {
      window.scroll({
        top: 500,
        left: 10, 

        behavior: 'smooth',
      });
    }

    const handleAddCourse = async (taskId) => {
    
      console.log(taskId);
      
      try {
        await axios.get('/api/getcookie2', {
          params: {
            taskId: taskId,
          },});

          navigate('/TaskDetails');
      } 
     
      catch (error) {
        console.error('Add course error:', error);
      }
      
    };


    const [taskName, setTaskName] = useState('');
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
       // Fetch the list of tasks from the server
        const fetchTasks = async () => {
          console.log("hello")
          try {
            const response = await axios.get('/api/alltasks');
            setTasks(response.data.tasks);
            console.log(response.data.tasks);
          } catch (error) {
            console.error('Fetch taskcourses error:', error);
          }
        };
    
        fetchTasks();
      }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Sidebar/>
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
              Tasks Collection
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Let's Do This
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
                <RouterLink to="/Createtask">
              <Button variant="contained"  >Add New Task</Button></RouterLink>
              
              <Button variant="outlined"  onClick={handleScroll}>Previous Tasks</Button>
              
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
          {tasks.map((task) => (
              <Grid item key={task._id} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' ,bgcolor:'white' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '6.25%',
                    }}
                    image="https://clickup.com/blog/wp-content/uploads/2022/09/float-project-management.png"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                     {task.name}
                    </Typography>
                   
                  </CardContent>

                  <CardActions>
                  
                    { <Button variant="contained" onClick={() => handleAddCourse(task._id)} size="medium">View</Button> }
            
                   
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      </div>
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
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
