import React from "react";
import { useEffect,useState } from "react";
import { Link,Outlet } from "react-router-dom";
import './Sidebar.css';
import axios from 'axios';
import Header from './Header'
const Sidebar = () => {

    
        const getside=()=>{
            var getSidebar = document.querySelector('nav');
                    getSidebar.classList.toggle('active');
                   
            
        };


        const handleLogout = async () => {
    
            console.log("neww");
        
            try {
              await axios.get('/api/logout');
              // Perform any additional client-side cleanup or actions
        
              // Redirect the user to the login page or any other desired route
             
            } catch (error) {
              // Handle error
              console.error('Error logging out:', error);
            }
          };
          return (
            <div className="sidebar">
              <>
              <Header/>
              </>
            <header>
            <button class="toggle"  onClick={getside} >
                <i class="fas fa-bars">
                </i>
            </button>
            <h3>Dashboard</h3>
            <a href="#">
                <i class="fas fa-sign-out-alt"></i>
            </a>
        </header>
        <nav>
            <ul>
                <li>
                    <a class="toggle" onClick={getside} >

                        <span class="icon" ><i class="fas fa-bars"></i></span>
                        <span class="title">Menu</span> 
                    </a>
                </li>
                <li>
                <Link to="/MainPage">
                        <span class="icon"><i class="fas fa-home"></i></span>
                        <span class="title">Home</span>
              </Link>
                </li>
                <li>
                <Link to="/ProjectAlbum">
                        <span class="icon"><i class="fas fa-folder"></i></span>
                        <span class="title">My Projects</span>
                 </Link>
                </li>
                <li>
                <Link to="/TaskList">
                        <span class="icon"><i class="fas fa-tasks"></i></span>
                        <span class="title">My Tasks</span>
                 </Link>
                </li>
                <li>
                <Link to="/NotesList">
                        <span class="icon"><i class="fas fa-file-alt"></i></span>
                        <span class="title">Notes</span>
                 </Link>
                </li>
                <li>
                <Link to="/Reports">
                        <span class="icon"><i class=" 	fas fa-table"></i></span>
                        <span class="title">Reports</span>
                        </Link>
                 
                </li>
               
                <li onClick={handleLogout}>
                <Link to="/">
                        <span class="icon"><i class="fas fa-sign-out-alt"></i></span>
                        <span class="title" >Sign Out</span>
                    </Link>
                </li>
            </ul>
        </nav>
       <Outlet/> 
  </div>

    );
   
  }
export default Sidebar;  