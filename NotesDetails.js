import React from "react";
import { useEffect,useState } from "react";
import './NotesDetails.css';

const NotesDetails = () => {


    const [noteName, setNoteName] = useState("New Notes");
    const [participant, setParticipant] = useState("maidashahid@gmail.com");
    const [createdBy, setCreatedBy] = useState("sabanaeem@gmail.com");
    const [type, setType] = useState("");
    const [details, setDetails] = useState("Meeting notes from Today's online meet");

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "participant"){
            setParticipant(value);
        }
        if(id === "type"){
            setType(value);
        }
        if(id === "details"){
            setDetails(value);
        }

        
        
    
    }

    return (
        <div className="body">
            <div className="container">
            <h1>{noteName}</h1>

            <div className="text">
                <div className="label">
                <span className="icon"><i class="fa-solid fa-person"></i></span>
                <label htmlFor="participant">Participants:</label>
                </div>
                <div className="value">
                <input type="email" name="participant" id="participant" value={participant} onChange = {(e) => handleInputChange(e)} />
                </div>
            </div>

            <div className="text">
                <div className="label">
                <span className="icon"><i class="fa-solid fa-person"></i></span>
                <label >CreatedBy:</label>
                </div>
                <div className="value">
                <span>{createdBy}</span>
                </div>
            </div>

            <div className="text">
                <div className="label">
                <span className="icon"><i class="fa-regular fa-file"></i></span>
                <label htmlFor="type">Type:</label>
                </div>
                <div className="value">
                <select id="type" name="type" onChange = {(e) => handleInputChange(e)} value={type}>
                    <option value="weekly">Weekly Sync</option>
                    <option value="inprogress">In progress</option>
                    <option value="done">Done</option>
                </select>
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

            </div>
        </div>  

    );
}
   
export default NotesDetails;  