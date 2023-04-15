import React from "react";
import { useEffect,useState } from "react";
import './Sidebar.css';
const Sidebar = () => {

    
        function getside(){
            var getSidebar = document.querySelector('nav');
            var getToggle = document.getElementsByClassName('toggle');
            for (var i = 0; i <= getToggle.length; i++) {
                getToggle[i].addEventListener('click', function () {
                    getSidebar.classList.toggle('active');
                    console.log(getToggle.length);
                });
            }
        };
        

    

  
          return (
            <div>
            <header>
            <div class="toggle" onClick={getside}>
                <i class="fas fa-bars"></i>
            </div>
            <h3>Dashboard</h3>
            <a href="#">
                <i class="fas fa-sign-out-alt"></i>
            </a>
        </header>
        <nav>
            <ul>
                <li>
                    <a class="toggle" >
                        <span class="icon" ><i class="fas fa-bars"></i></span>
                        <span class="title">Menu</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="icon"><i class="fas fa-home"></i></span>
                        <span class="title">Home</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="icon"><i class="	fas fa-folder"></i></span>
                        <span class="title">My Projects</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="icon"><i class="fas fa-tasks"></i></span>
                        <span class="title">My Tasks</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="icon"><i class="fas fa-file-alt"></i></span>
                        <span class="title">Notes</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="icon"><i class=" 	fas fa-table"></i></span>
                        <span class="title">Reports</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="icon"><i class="fas fa-cog"></i></span>
                        <span class="title">Setting</span>
                    </a>
                </li>
               
                <li>
                    <a href="#">
                        <span class="icon"><i class="fas fa-sign-out-alt"></i></span>
                        <span class="title">Sign Out</span>
                    </a>
                </li>
            </ul>
        </nav>
        
  </div>

    );
   
  }
export default Sidebar;  