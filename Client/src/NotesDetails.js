import React from "react";
import { useEffect,useState } from "react";
import Sidebar from './Sidebar';
import './NotesDetails.css';
import taskImage from './task-images.jpg';
import axios from "axios";
import { useNavigate } from "react-router-dom";
const NotesDetails = () => {

    const navigate = useNavigate();
    const [noteName, setNoteName] = useState("");
   // const [participant, setParticipant] = useState("maidashahid@gmail.com");
    const [createdBy, setCreatedBy] = useState("");
 //   const [type, setType] = useState("");
    const [details, setDetails] = useState("");

    useEffect(() => {
        // Fetch the list of tasks from the server
         const fetchNotes = async () => {
           console.log("hello")
           try {
             const response = await axios.get('/api/allnotessdetails');
             console.log(response.data.notes.name);
             setNoteName(response.data.notes.name)
             setCreatedBy(response.data.notes.created_by)
             setDetails(response.data.notes.details)

           } catch (error) {
             console.error('Fetch taskcourses error:', error);
           }
         };
     
         fetchNotes();
       }, []);

    const handleInputChange = (e) => {
        const {id , value} = e.target;

        if(id === "noteName"){
            setNoteName(value);
        }
        if(id === "details"){
            setDetails(value);
        }

       
    }
    const handleUpdate = async () => {
        try {
            const response = await axios.post('/api/updatenotesdetails', {
                noteName,
                details
            });
            console.log(response.data);
            // Handle success or display a notification
        } catch (error) {
            console.error('Update notes details error:', error);
            // Handle error or display an error notification
        }
        finally{
            navigate('/NotesList')
        }
    }

    return (
        <><Sidebar/>
        <div className="bodyyyNotesDetail">
        <div className="NotesDetail-container">
          <div className="left-section">
            <img src={taskImage} alt="Task" className="task-image" />
          </div>
          <div className="right-section">
            <h1>{noteName}</h1>
            {/* Other input fields */}
            <div className="text">
              <div className="label">
                <span className="icon"><i className="fas fa-file-alt"></i></span>
                <label htmlFor="details">Notes Details:</label>
              </div>
              <div className="value">
                <textarea className="textArea" id="details" value={details} onChange={handleInputChange} />
              </div>
            </div>
            <button onClick={handleUpdate}>Save</button>
          </div>
        </div>
      </div>
        </> 

    );
}
   
export default NotesDetails;  