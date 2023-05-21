import React from "react";
import './Home.css';

import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate=useNavigate();
       
          return (
            
                <div className="container">
                    <h1>My Projects</h1>
                    <div className="button-container">
                        <button className="button" onClick={navigate("./NewProject")}>Create A New Project</button>
                        <button className="button">Previous Projects</button>
                    </div>
                </div>
           

    );
   
  }
export default Home;  