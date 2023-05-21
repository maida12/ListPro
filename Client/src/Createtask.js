import React from "react";
import { useEffect,useState } from "react";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";
import './Createtask.css';


const CreateTask = () => {

    const navigate = useNavigate();
    const [taskName, setTaskName] = useState("");
    const [status, setStatus] = useState("");
    const [endDate,setEndDate]=useState("")
    const [priority, setPriority] = useState("");
    const [details, setDetails] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault()
    
        try {
          const res = await fetch('/api/create_task', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: taskName,
            //   assigned_by: assighnee,
              status: status,
              priority: priority,
              end_date: endDate ,
              details :  details,

            }),
          })
    
          if (!res.ok) {
            const error = await res.json()
          }
    
          const data = await res.json()
          // this is just a visual feedback for user for this demo
          // this will not be an error, rather we will show a different UI or redirect user to dashboard
          // ideally we also want a way to confirm their email or identity

            setTaskName("")
            // setAssighnee("");
            setStatus("");
            setPriority("");
            setEndDate("");
            setDetails("");
          return
        } catch (error) {
          
        }
        finally{
            navigate('/TaskList')
        }
      }

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "taskName"){
            setTaskName(value);
        }

        // if(id === "assighnee"){
        //     setAssighnee(value);
        // }
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
        <>
        <Sidebar/>
        <div className="body">
            <div className="CreatTaskcontainer">
            <div className="text">
                <div className="label">
                <span className="icon"><i class="fa-solid fa-file-alt"></i></span>
                <label htmlFor="taskName">Task Name:</label>
                </div>
                <div className="value">
                <input type="text" name="taskName" id="taskName" value={taskName} onChange = {(e) => handleInputChange(e)} />
                </div>
            </div>
            

            <div className="text">
                <div className="label">
                <span class="icon"><i class="fas fa-tasks"></i></span>
                <label htmlFor="status">Task Status:</label>
                </div>
                <div className="value">
                <select id="status" name="status" onChange = {(e) => handleInputChange(e)} value={status}>
                <option value="" disabled>Select</option>
                    <option value="todo">To Do</option>
                    <option value="inprogress">In progress</option>
                    <option value="done">Done</option>
                </select>
                </div>
            </div>

            <div className="text">
                <div className="label">
                <span className="icon"><i class="fa-regular fa-square-check"></i></span>
                <label htmlFor="priority">Task Priority:</label>
                </div>
                <div className="value">
                <select id="priority" name="priority" onChange = {(e) => handleInputChange(e)} value={priority}>
                    <option value="" disabled>Select</option>
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

            <button onClick={handleSubmit}>Create Task</button>

            </div>
        </div>  
        </>

    );
   
  }
export default CreateTask;