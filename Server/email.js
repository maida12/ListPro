const ReminderSchema = require('./schemas/ReminderSchema')
const bcrypt = require('bcrypt')
const express = require('express')
const router = express.Router()
const TaskSchema = require('./schemas/TaskSchema')
const nodemailer = require('nodemailer');
const cron = require('node-cron');



 async function sendEmail()
  {
var transporter = nodemailer.createTransport({
    port:465,
    host:"smtp.gmail.com",
    auth: {
      user: 'maidaa.shahid@gmail.com',
     // pass: ''
    },
    secure:true,
  });

      

      const tasks= await TaskSchema.find({ 
        $or: [
          { status: 1 },
          { status: 2 },
          
        ]
       });
     

      if (tasks.length > 0) {
        // Access the email fields for each project
        const userEmails = tasks.map((task) => task.assigned_by);
        console.log("helooo");
        console.log(userEmails);



        const selectedAttributesArray = tasks.map((entry) => {
            return {
              userEmail: entry.assigned_by,
              content:"Complete Your Task Please",
              TaskId: entry._id,
              
            };
          });

        
         // Save the entries
         ReminderSchema.insertMany(selectedAttributesArray)
.then((result) => {
  console.log(`${result.length} entries saved successfully.`);
})
      
      console.log("hello in email")
      var mailOptions = {
        from: 'maidaa.shahid@gmail',
        to: userEmails,
        subject: "Some Tasks is Pending ",
        text: 'This email is from ListPro official email address to remind you to do your pending tasks',
      };

      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    }


        

    
   
  
}
 



 

module.exports = sendEmail


