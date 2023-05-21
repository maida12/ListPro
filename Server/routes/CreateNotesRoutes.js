const NotesSchema = require('../schemas/NotesSchema')
const bcrypt = require('bcrypt')
const express = require('express')
const router = express.Router()
const { ObjectId } = require('mongodb');
const cookieParser = require('cookie-parser');

router.use(cookieParser())

router.post('/create_notes', async (req, res) => {
  const {name,created_by,details } = req.body

  if (!created_by )
    return res.status(400).json({ msg: 'Please fill required feilds' })
    var projectId=req.cookies.projectId;

  const newNotes= new NotesSchema({ name,created_by,details, projectId })

    const savedNotesRes = await newNotes.save()

    if (savedNotesRes)
      return res.status(200).json({ msg: 'Notes is successfuly created' })
  })


  router.get('/getcookie3', async (req, res) => {
    try {
      const notesId = req.query.notesId;
      
      console.log(notesId);
      const expirationDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toUTCString();
      
      
      
      res.cookie('notesId', notesId, { expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) });
            res.status(201).json({ message: 'Cookie created successful', notesId:notesId});
   
    } catch (error) {
      console.error('Fetch Cookie error:', error);
      res.status(500).json({ message: 'Failed to fetch cookie' });
    }
  });

  router.get('/allnotes', async (req, res) => {
    try {
      // Fetch all courses from the database
      const project_Id=req.cookies.projectId;
      const notes= await NotesSchema.find({ projectId: project_Id });
      res.json({notes} );
   
    } catch (error) {
      console.error('Fetch courses error:', error);
      res.status(500).json({ message: 'Failed to fetch courses' });
    }
  });

  router.get('/allnotessdetails', async (req, res) => {
    try {
      // Fetch all courses from the database
      const notesId=req.cookies.notesId;
      const notes= await NotesSchema.findOne({ _id: notesId });
      res.json({notes} );
   
    } catch (error) {
      console.error('Fetch courses error:', error);
      res.status(500).json({ message: 'Failed to fetch courses' });
    }
  });

  router.post('/updatenotesdetails', async (req, res) => {
    const { noteName, details } = req.body;
  
    try {
      // Find the note in the database based on noteName
      const note = await NotesSchema.findOne({ noteName });
  
      if (!note) {
        return res.status(404).json({ error: 'Note not found' });
      }
  
      // Update the note's details
      note.details = details;
  
      // Save the updated note in the database
      await note.save();
  
      res.json({ message: 'Notes details updated successfully' });
    } catch (error) {
      console.error('Update notes details error:', error);
      res.status(500).json({ error: 'An error occurred while updating notes details' });
    }
  });

module.exports = router


