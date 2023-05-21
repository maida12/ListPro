const Reminder = require('../schemas/ReminderSchema')
const bcrypt = require('bcrypt')
const express = require('express')
const router = express.Router()
const TaskSchema = require('../schemas/TaskSchema')
const nodemailer = require('nodemailer');
const cron = require('node-cron');
var bodyp=require("body-parser");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

router.use(bodyParser.urlencoded({extended:true}));
router.use(cookieParser());






router.get('/getReminder', async (req, res) => {
  

  
    try {

      const userEmail=req.session.user.email;
      
      const reminders= await Reminder.find({ 
       userEmail:userEmail
       }).populate("TaskId");
      

     
        // Access the email fields for each project
        
      
        res.json(reminders);


  
   
    } catch (error) {
      console.error('Fetch courses error:', error);
      res.status(500).json({ message: 'Failed to fetch courses' });
    }
})
 



 

module.exports = router


