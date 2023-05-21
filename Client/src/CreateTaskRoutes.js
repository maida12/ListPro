const TaskSchema = require('../schemas/TaskSchema')
const bcrypt = require('bcrypt')
const express = require('express')
const router = express.Router()
const { ObjectId } = require('mongodb');
const cookieParser = require('cookie-parser');

router.use(cookieParser())





router.post('/create_task', async (req, res) => {
  var {name, assigned_by,status,priority,end_date,details } = req.body

  var projectId=req.cookies.projectId;
  if (!name || !assigned_by || !status || !priority || !end_date )
    return res.status(400).json({ msg: 'Please fill required feilds' })
    var newStatus = 0;
    if(status==="todo")
    {
      newStatus = 1;
    }
    else if(status==="inprogress")
    {
      newStatus = 2;
    }
    else if(status==="done")
    {
      newStatus = 3;
    }
    var newP = 0;
    if(priority==="high")
    {
      newP= 1;
    }
    else if(priority=="medium")
    {
      newP= 2;
    }
    else if(priority==="low")
    {
      newP= 3;
    }

    status = newStatus
    priority = newP




  const newTask = new TaskSchema({ name, assigned_by,status,priority,end_date,details,projectId })

  const jsonObj = {
    "dateString": end_date
  };

  
  
  newTask.date = new Date(jsonObj.dateString);

    const savedTaskRes = await newTask.save()
    if (savedTaskRes)
      return res.status(200).json({ msg: 'Task is successfuly created' })
  })


  router.post('/update_task', async (req, res) => {
    var {name, assigned_by,status,priority,end_date,details } = req.body
    var newStatus = 0
    if(status==="todo")
    {
      newStatus = 1;
    }
    else if(status==="inprogress")
    {
      newStatus = 2;
    }
    else if(status==="done")
    {
      newStatus = 3;
    }
    var newP = 0;
    if(priority==="high")
    {
      newP= 1;
    }
    else if(priority=="medium")
    {
      newP= 2;
    }
    else if(priority==="low")
    {
      newP= 3;
    }

    const jsonObj = {
      "dateString": end_date
    };
  
   datee = new Date(jsonObj.dateString);

    
    var query = {name : name }
    var newvalues = { $set: {status: newStatus,priority: newP,end_date:datee,details: details}} 
    const yes =await TaskSchema.updateOne( query, newvalues );
    if(yes)
      console.log("oho")


    })
  

  // Route to get the cookei
router.get('/getcookie2', async (req, res) => {
  try {
    const taskId = req.query.taskId;
    
    console.log(taskId);
    const expirationDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toUTCString();
    
    
    
    res.cookie('taskId', taskId, { expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) });
          res.status(201).json({ message: 'Cookie created successful', taskId:taskId});
 
  } catch (error) {
    console.error('Fetch Cookie error:', error);
    res.status(500).json({ message: 'Failed to fetch cookie' });
  }
});

  router.get('/alltasks', async (req, res) => {
    try {
      // Fetch all courses from the database
      const project_Id=req.cookies.projectId;
      const tasks= await TaskSchema.find({ projectId: project_Id });
      console.log(tasks);
      res.json({tasks} );
   
    } catch (error) {
      console.error('Fetch courses error:', error);
      res.status(500).json({ message: 'Failed to fetch courses' });
    }
  });

  router.get('/alltasksdetails', async (req, res) => {
    try {
      // Fetch all courses from the database
      const task_Id=req.cookies.taskId;
      const tasks= await TaskSchema.findOne({ _id: task_Id });
      console.log(tasks);
      res.json({tasks} );
   
    } catch (error) {
      console.error('Fetch courses error:', error);
      res.status(500).json({ message: 'Failed to fetch courses' });
    }
  });

module.exports = router