import React from "react";
import { useEffect,useState } from "react";
import Sidebar from "./Sidebar";
import './CreateNotes.css';
import { useNavigate } from "react-router-dom";

const CreateNotes = () => {

    const [name, setName] = useState("");
    const [created_by, setCreatedBy] = useState("");
    const [details, setDetails] = useState("");
    const navigate = useNavigate();
    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id ==="Name")
        {
            setName(value);
        }
        if(id ==="created_by")
        {
            setCreatedBy(value);
        }
        if(id === "details"){
            setDetails(value);
        }
    }

    const handleSubmit = async (event) => {
      event.preventDefault()
  
      try {
        const res = await fetch('/api/create_notes', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            
            name: name,
            created_by: created_by,
            
            details :  details,

          }),
        })
  
        if (!res.ok) {
          const error = await res.json()
        }
  
        const data = await res.json()

        setName("");
          setCreatedBy("");
          setDetails("");
        return
      } catch (error) {
        
      }
      finally{
        navigate('/NotesList')
      }
    }


    return (
      <>
      <Sidebar/>
        <div className="body">
            <div className="container">
            <h1>New Notes</h1>

            <div className="text">
                <div className="label">
                <span className="icon"><i class="fa-solid fa-person"></i></span>
                <label htmlFor="Name">Name:</label>
                </div>
                <div className="value">
                <input type="text" name="Name" id="Name" value={name} onChange = {(e) => handleInputChange(e)} />
                </div>
            </div>
            <div className="text">
                <div className="label">
                <span className="icon"><i class="fa-solid fa-person"></i></span>
                <label htmlFor="created_by">Created by:</label>
                </div>
                <div className="value">
                <input type="email" name="created_by" id="created_by" value={created_by} onChange = {(e) => handleInputChange(e)} />
                </div>
            </div>
            

            <div className="text">

                <div className="label">
                <span className="icon"><i class="fas fa-file-alt"></i></span>
                <label htmlFor="details">Details:</label>
                </div>
                <div className="value">
                <textarea id="details" onChange={(e) => handleInputChange(e)}>{details}</textarea>
                </div>
            </div>

            <button onClick={handleSubmit}>Create Notes</button>

            </div>
        </div>  
        </>

    );
}
   
export default CreateNotes;