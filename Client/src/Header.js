import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import AppBar from '@mui/material/AppBar';

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
import Avatar from '@mui/material/Avatar';
import theme from './theme'


import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import './ProjectAlbum.css';
import { Link as RouterLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import logo from './logo.png';


const Header = () => {
  const [open, setOpen] = useState(false);
  const [reminders, setReminders] = useState([]);

  const handleClose = () => {
    setOpen(false);
    
    
  };

const handleOpen= async()=>
{
  setOpen(true);

  
    try {
      const response = await fetch('/api/getReminder');
      if (response.ok) {
        const data = await response.json();
        setReminders(data);
      } else {
        throw new Error('Failed to fetch reminders');
      }
    } catch (error) {
      console.error('Error retrieving reminders:', error);
    }
  

}


  const handleLogout = async () => {
    
       
        
    try {
      await axios.get('/api/logout');
      // Perform any additional client-side cleanup or actions

      // Redirect the user to the login page or any other desired route
      window.location.href = '/';
    } catch (error) {
      // Handle error
      console.error('Error logging out:', error);
    }
  };

  return (
    <>
    <div>

<ThemeProvider theme={theme}>
<AppBar position="relative" sx={{height: 75,}}>
        <Toolbar  >
        <Avatar alt="logo" src={logo}
        sx={{ width: 144, height: 55, borderRadius: '0%' }}  />
          
         

          <Stack
             
              direction="row"
              spacing={2}
              justifyContent="center"
            
            >
              <Button variant="contained" sx={{marginLeft:135}}  onClick={() => handleOpen()} >Reminders</Button>
               <Button   variant="contained" onClick={handleLogout}>Log out</Button>
          </Stack>
        
        </Toolbar>
      </AppBar>
      </ThemeProvider>
      </div>

      <div >
      <Dialog open={open} onClose={handleClose}>
        <DialogContent sx={{ display: 'flex', backgroundColor:'white' }} >
        
        <List>
    {reminders.map((item) => (
     
      <ListItem key={item._id}>
      {item.content&& (
        <ListItemText primary={item.TaskId.name} />
      )}
      {item.content&& (
      <ListItemText secondary={item.content} />
      
      )}
      </ListItem>
    ))}
  </List>
          {/* Add additional content on the right side if needed */}
         </DialogContent>
       </Dialog>
 

      </div>
      </>
      
  );
};

export default Header;
