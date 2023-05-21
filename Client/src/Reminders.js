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
            <div class="toggle" onClick={getside} >
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
                    <a class="toggle"   >
                        <span class="icon" ><i class="fas fa-clock"></i></span>
                        <span class="title">Reminders</span>
                    </a>
                   <hr/>
                </li>
                <li>
                    <a href="#">
                        <span class="icon"></span>
                        <span class="title">Last update</span>
                      
                    </a>
                    <hr/>
                </li>
                <li>
                <a href="#">
                        <span class="icon"></span>
                        <span class="title">20 minutes remaining</span>
                        <hr/>
                    </a>
                    <hr/>
                </li>
                <li>
                <a href="#">
                        <span class="icon"></span>
                        <span class="title">Recent change</span>
                        <hr/>
                    </a>
                    <hr/>
                </li>
                <li>
                <a href="#">
                        <span class="icon"></span>
                        <span class="title">New update</span>
                        <hr/>
                    </a>
                    <hr/>
                </li>
                <li>
                <a href="#">
                        <span class="icon"></span>
                        <span class="title">Latest update</span>
                        <hr/>
                    </a>
                    <hr/>
                </li>
                <li>
                <a href="#">
                        <span class="icon"></span>
                        <span class="title">Previos  update</span>
                    </a>
                </li>
               
                
            </ul>
        </nav>
        
  </div>

    );
   
  }
export default Sidebar;  