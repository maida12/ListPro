import React from "react";
import { useEffect,useState ,useRef} from "react";
import './TaskDetails.css';
import Sidebar from "./Sidebar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TaskDetails = () => {
  const navigate = useNavigate();

    const [taskName, setTaskName] = useState("");
    const [assighnee, setAssighnee] = useState("");
    const [status, setStatus] = useState("");
    const [endDate,setEndDate]=useState("")
    const [priority, setPriority] = useState("");
    const [details, setDetails] = useState("");
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        // Fetch the list of tasks from the server
         const fetchTasks = async () => {
           console.log("hello")
           try {
             const response = await axios.get('/api/alltasksdetails');
             console.log(response.data.tasks);
             setTaskName(response.data.tasks.name)
             setAssighnee(response.data.tasks.assigned_by)
            if(response.data.tasks.status==1)
            dropdownRef.current.value = 'todo';
            if(response.data.tasks.status==2)
            dropdownRef.current.value = 'inprogress';
            if(response.data.tasks.status==3)
            dropdownRef.current.value = 'done';

            if(response.data.tasks.priority==1)
            dropdownRef2.current.value = 'high';
            if(response.data.tasks.priority==2)
            dropdownRef2.current.value = 'medium';
            if(response.data.tasks.priority==3)
            dropdownRef2.current.value = 'low'; 

             setDetails(response.data.tasks.details)
            const dateObject = new Date(response.data.tasks.end_date);
            const dateString = dateObject.toISOString().split('T')[0];

            dropdownRef3.current.value = dateString; 

           } catch (error) {
             console.error('Fetch taskcourses error:', error);
           }
         };
     
         fetchTasks();
       }, []);

       
        const dropdownRef = useRef(null);
        const dropdownRef2 = useRef(null);
        const dropdownRef3 = useRef(null);

        const handleSubmit =  (event) => {
            event.preventDefault()
        
            try {
              const res =  fetch('/api/update_task', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  name: taskName,
                  assigned_by: assighnee,
                  status: dropdownRef.current.value,
                  priority: dropdownRef2.current.value,
                  end_date: dropdownRef3.current.value,
                  details :  details,
    
                }),
              })
        
              if (!res.ok) {
                const error =  res.json()
              }
              navigate('/TaskList');
              console.log("hi in task detail");
              const data =  res.json()
              // this is just a visual feedback for user for this demo
              // this will not be an error, rather we will show a different UI or redirect user to dashboard
              // ideally we also want a way to confirm their email or identity
    
                setTaskName("")
                setAssighnee("");
                setStatus("");
                setPriority("");
                setEndDate("");
                setDetails("");

             
            } catch (error) {
              
            }
            finally{
              navigate('/TaskList');
              console.log("hi in task detail");
            }
          }
    

    const handleDropdownChange = (event) => {
        setStatus(event.target.value);
      };

      const handleDropdownChange2 = (event) => {
        setPriority(event.target.value);
      };

    const handleInputChange = (e) => {
        const {id , value} = e.target;

        if(id === "taskName"){
            setTaskName(value);
        }
        if(id === "assighnee"){
            setAssighnee(value);
        }
        // if(id === "status"){
        //     setStatus(value);
        // }
        // if(id === "priority"){
        //     setPriority(value);
        // }
        if(id === "endingDate"){
            setEndDate(value);
        }
        if(id === "details"){
            setDetails(value);
        }

        
        
    
    }

    return (
      <><Sidebar/>
        <div className="bodyyy">
            <div className="TasDetails-container">
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
                <select id="status" ref={dropdownRef} name="status" onChange = {(e) => handleDropdownChange(e)} >
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
                <select id="priority" name="priority" ref={dropdownRef2} onChange = {(e) => handleDropdownChange2(e)}  >
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
                <input type="date" name="endingDate" id="endingDate" ref={dropdownRef3}onChange = {(e) => handleInputChange(e)}/>
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

            <button onClick={handleSubmit}>Save</button>

            </div>
        </div> 
        </>   

    );
   
  }
export default TaskDetails;  