
// Signup API
const Project = require('../schemas/ProjectSchema')
const ProjectMember = require('../schemas/Project_Member')
const bcrypt = require('bcrypt')
const express = require('express')
var nodemailer = require('nodemailer');
const app = express.Router()

var bodyp=require("body-parser");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());



var transporter = nodemailer.createTransport({
  port:465,
  host:"smtp.gmail.com",
  auth: {
    user: 'maidaa.shahid@gmail.com',
    pass: 'yroi olqm kipz lgmz'
  },
  secure:true,
});
app.post('/addproject', async (req, res) => {
    try {
      const { created_by, name ,status,email1,email2,email3} = req.body;
  
      // Create a new Project
      const userId=req.session.user.id;
      const newProject = new Project({ userId,created_by,name,status });
      await newProject.save();
      console.log(newProject._id);
      console.log(status);

        if(status==='Team')
        {
           
      const newProjectMember = new ProjectMember({ projectId :newProject._id,email1,email2,email3 });
      await newProjectMember.save();



      var maillist = [
        email1,
        email2,
        email3,
      ];

      var mailOptions = {
        from: 'maidaa.shahid@gmail',
        to: maillist,
        subject: "Invitation To Join Listpro Project "+name,
        text: 'This email is from ListPro official email address to inform you that '+req.session.user.name+'  Send you the invitation to join the listpro project!' ,
      };

      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
        }


      
    } catch (error) {
      console.error('project error:', error);
      res.status(500).json({ message: ' Project Add failed' });
    }
  });

  app.get('/deletepost', async (req, res) => {
   
      const projectId = req.query.projectId;
      
      try {
        // Check if the project exists
        const project = await Project.findById(projectId);
        if (!project) {
          return res.status(404).json({ error: 'Project not found' });
        }
    
        // Delete the project
        await Project.findByIdAndDelete(projectId);
    
        res.json({ message: 'Project deleted successfully' });
      } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
      }
  });




  // Route to get the cookei
app.get('/getcookie', async (req, res) => {
  try {
    const projectId = req.query.projectId;
    
    console.log(projectId);
    const expirationDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toUTCString();
    
    
    
    res.cookie('projectId', projectId, { expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) });
          res.status(201).json({ message: 'Cookie created successful', projectId:projectId});
 
  } catch (error) {
    console.error('Fetch Cookie error:', error);
    res.status(500).json({ message: 'Failed to fetch cookie' });
  }
});

app.get('/getsessioncookie', async (req, res) => {
  try {
    
    console.log(req.cookies.projectId);

    
          //res.status(201).json({ message: 'Cookie created successful', projectId:projectId});
 
  } catch (error) {
    console.error('Fetch Cookie error:', error);
    res.status(500).json({ message: 'Failed to fetch cookie' });
  }
});


  
  // Route to get the list of courses
app.get('/allprojects', async (req, res) => {
  try {
    // Fetch all courses from the database
    const userId = req.session.user.id;
    const useremail = req.session.user.email;
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const projects = await Project.find(
      
         {userId: userId}
   );
    res.json({projects} );

  } catch (error) {
    console.error('Fetch project error:', error);
    res.status(500).json({ message: 'Failed to fetch courses' });
  }
});



app.get('/allsharedprojects', async (req, res) => {
  try {
    // Fetch all shared projects from the database
    const userId = req.session.user.id;
    const useremail = req.session.user.email;
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }
   
   const sharedProjects=await ProjectMember.find({
    $or: [
      { email1: useremail },
      { email2: useremail },
      { email3: useremail },
    ]}
).populate("projectId");

 

    res.json({sharedProjects} );

  } catch (error) {
    console.error('Fetch courses error:', error);
    res.status(500).json({ message: 'Failed to fetch courses' });
  }
});

  module.exports = app




  









