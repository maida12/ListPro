import React, { useState,useRef } from 'react';
import { useContext } from 'react'
import { UserContext } from './App'
import { useNavigate } from 'react-router-dom';
import './Newproject.css'
import { Link as RouterLink } from 'react-router-dom'
import { type } from '@testing-library/user-event/dist/type';
import Sidebar from './Sidebar';


function Newproject() {
  const [error, setError] = useState('');

  const navigate = useNavigate();
    const userContext = useContext(UserContext)
    const selectedOptionRef = useRef(null);

    const [firstName, setFirstName] = useState(null);
    const [Type, setType] = useState(null);
   
    const [email1, setEmail1] = useState(null);
    const [email2, setEmail2] = useState(null);
    const [email3, setEmail3] = useState(null);

    const [selectedOption, setSelectedOption] = useState('');
    

    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };

  // Handle form submission
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}\nGender: ${gender}`);
//   };
const handleSubmit =  (event) => {

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ 
          created_by:userContext.name,
          name:firstName,
          status:selectedOption ,
          email1: email1,
          email2: email2,
          email3: email3, })
};


      const res =  fetch('/api/addproject', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        created_by:userContext.name,
          name:firstName,
          status:selectedOption ,
          email1: email1,
          email2: email2,
          email3: email3,
          
        })
       
      }).then(async response => {
        const isJson = response.headers.get('content-type')?.includes('application/json');
        const data = isJson && await response.json();
        if (!response.ok) {
          // get error message from body or default to response status state
          const error = (data && data.message) || response.status;
          setError(error);
          return Promise.reject(error);
    }
    else{
      console.log("helo");
      navigate('/ProjectAlbum');
    }
  })
      .catch(error => {
        setError(error);
        console.error('There was an error!', error);
    });
    console.log("helo");
    navigate('/ProjectAlbum');
      
    
  }

const handleInputChange = (e) => {
    
 
    const {id , value} = e.target;
    if(id === "firstName"){
        setFirstName(value);
    }
    
    
    if(id === "email1"){
        setEmail1(value);
    }
    if(id === "email2"){
        setEmail2(value);
    }
    if(id === "email3"){
        setEmail3(value);
    }
  
    
    

}

  return (
    
    <body className='bb'>
      <Sidebar/>
        <div className='bb2'>
    <div className='MyForm'>
         {/* <nav class="bg-dark navbar-dark navbar">
            <div className="row col-12 d-flex justify-content-center text-white">
                <h3>New Project</h3>
            </div>
        </nav> */}

        <div className="form">
          <h1 style={{marginLeft:60}}> Create Workspace</h1>
          <div className="form-body">
              <div className="username">
                  <label className="form__label" for="firstName">Name of your Project </label>
                  <input className="form__input" type="text" value={firstName} onChange = {(e) => handleInputChange(e)} id="firstName" placeholder=" Project Name"/> 
              </div>
            
             
             

              <div className="radio-group">
              
                 <label className="form__label1" for="radio">Enter the Option: How do you like to start!</label>
                    <label className="form__label" htmlFor="team">
                        <img  className='myimg'src="https://www.notion.so/images/onboarding/team-features-illustration.png"></img>
                        <input   className="form__input" type="radio" id="Team" name="Type" value="Team"
                           checked={selectedOption === 'Team'} onChange={handleOptionChange} />

                        <span>Team </span>
                    </label>

                    <label className="form__label" htmlFor="alone">
                        <img className='myimg' src='https://www.notion.so/images/onboarding/use-case-note.png'></img>
                        <input  className="form__input" type="radio" id="Alone" name="Type" value="Alone"   checked={selectedOption === 'Alone'} 
                         onChange={handleOptionChange} />
                        <span>Alone  </span>
                    </label>
                    
                    </div>
                    { selectedOption === 'Team'&& (
                      <>
                    <div className="email1">
                  <label className="form__label" for="email">Email </label>
                  <input  type="email" id="email1" className="form__input"  onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
              </div>
              <div className="email2">
                  <label className="form__label" for="email">Email </label>
                  <input  type="email" id="email2" className="form__input" onChange = {(e) => handleInputChange(e)}  placeholder="Email"/>
              </div>
              <div className="email3">
                  <label className="form__label" for="email">Email </label>
                  <input  type="email" id="email3" className="form__input" onChange = {(e) => handleInputChange(e)}  placeholder="Email"/>
              </div>
              </>
              )}
           
              
          </div>
          <div class="footer">
        
              <button type="submit" onClick={handleSubmit}  class="btn">Start Project</button>
             
          </div>
          <div >{error&& (<div className='NewProject-error'>{error}</div>) }</div>
      </div>      
    </div> 
    </div>
    </body> 
  );
}

export default Newproject;
