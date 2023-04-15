import React, { useState } from 'react';

import './Newproject.css'
function Newproject() {
    const [firstName, setFirstName] = useState(null);
    const [Type, setType] = useState(null);
   
    const [email, setEmail] = useState(null);
    

  

  // Handle form submission
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}\nGender: ${gender}`);
//   };
const handleSubmit  = () => {
    console.log(firstName,email);
}

const handleInputChange = (e) => {
    const {id , value} = e.target;
    if(id === "firstName"){
        setFirstName(value);
    }
    
    
    if(id === "email"){
        setEmail(value);
    }
  
    if(id === "Type"){
        setType(value);
    }
    

}

  return (
    <div className='MyForm'>
         <nav class="bg-dark navbar-dark navbar">
            <div className="row col-12 d-flex justify-content-center text-white">
                <h3>New Project</h3>
            </div>
        </nav>

        <div className="form">
          <div className="form-body">
              <div className="username">
                  <label className="form__label" for="firstName">Name of your Project </label>
                  <input className="form__input" type="text" value={firstName} onChange = {(e) => handleInputChange(e)} id="firstName" placeholder=" Project Name"/> 
              </div>
            
             
             

              <div className="radio-group">
                 <label className="form__label1" for="radio">Enter the Option: How do you like to start!</label>
                    <label className="form__label" htmlFor="team">
                        <img src="https://www.notion.so/images/onboarding/team-features-illustration.png"></img>
                        <input   className="form__input"type="radio" id="team" name="Type" value="Team" checked={Type === 'team'} onChange = {(e) => handleInputChange(e)} />
                        <span>Team </span>
                    </label>

                    <label className="form__label" htmlFor="alone">
                        <img src='https://www.notion.so/images/onboarding/use-case-note.png'></img>
                        <input  className="form__input" type="radio" id="alone" name="Type" value="Alone" checked={Type === 'alone'} onChange = {(e) => handleInputChange(e)} />
                        <span>Alone  </span>
                    </label>
            
                    <div className="email">
                  <label className="form__label" for="email">Email </label>
                  <input  type="email" id="email" className="form__input" placeholder="Email"/>
              </div>
              <div className="email">
                  <label className="form__label" for="email">Email </label>
                  <input  type="email" id="email" className="form__input" placeholder="Email"/>
              </div>
              <div className="email">
                  <label className="form__label" for="email">Email </label>
                  <input  type="email" id="email" className="form__input" placeholder="Email"/>
              </div>

            </div>
              
          </div>
          <div class="footer">
              <button type="submit" class="btn">Start Project</button>
          </div>
      </div>      
    </div> 
  );
}

export default Newproject;
