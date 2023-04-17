import React from "react";
import { useEffect,useState } from "react";
import './TaskDetails.css';

const TaskDetails = () => {


    const [taskName, setTaskName] = useState("New Task");
    const [assighnee, setAssighnee] = useState("l201288@gmail.com");
    const [status, setStatus] = useState("Done");
    const [endDate,setEndDate]=useState("12/02/2020")
    const [priority, setPriority] = useState("High");
    const [details, setDetails] = useState("Create Test Cases");

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "assighnee"){
            setAssighnee(value);
        }
        if(id === "status"){
            setStatus(value);
        }
        if(id === "priority"){
            setPriority(value);
        }
        if(id === "endingDate"){
            setEndDate(value);
        }
        if(id === "details"){
            setDetails(value);
        }

        
        
    
    }

    return (
        <div className="body">
            <div className="container">
            <h1>{taskName}</h1>

            <div className="text">
                <div className="label">
                <span className="icon"><i class="fa-solid fa-person"></i></span>
                <label htmlFor="assighnee">Assighnee:</label>
                </div>
                <div className="value">
                <input type="email" name="assighnee" id="assighnee" value={assighnee} onChange = {(e) => handleInputChange(e)} />
                </div>
            </div>

            <div className="text">
                <div className="label">
                <span class="icon"><i class="fas fa-tasks"></i></span>
                <label htmlFor="status">Status:</label>
                </div>
                <div className="value">
                <select id="status" name="status" onChange = {(e) => handleInputChange(e)} value={status}>
                    <option value="todo">To Do</option>
                    <option value="inprogress">In progress</option>
                    <option value="done">Done</option>
                </select>
                </div>
            </div>

            <div className="text">
                <div className="label">
                <span className="icon"><i class="fa-regular fa-square-check"></i></span>
                <label htmlFor="priority">Priority:</label>
                </div>
                <div className="value">
                <select id="priority" name="priority" onChange = {(e) => handleInputChange(e)} value={priority}>
                    <option value="high">High</option>
                    <option value="low">Medium</option>
                    <option value="medium">Low</option>
                </select>
                </div>
            </div>

            <div className="text">
                <div className="label">
                <span class="icon"><i class="fa-regular fa-clock"></i></span>
                <label htmlFor="endingDate">Ending Date:</label>
                </div>
                <div className="value">
                <input type="date" name="endingDate" id="endingDate" value={endDate}onChange = {(e) => handleInputChange(e)}/>
                </div>
            </div>

            <div className="text">
                <div className="label">
                <span className="icon"><i class="fas fa-file-alt"></i></span>
                <label htmlFor="details">Task Details:</label>
                </div>
                <div className="value">
                <input type="textarea" name="details" id="details" value={details} onChange = {(e) => handleInputChange(e)} />
                </div>
            </div>

            </div>
        </div>    

    );
   
  }
export default TaskDetails;  