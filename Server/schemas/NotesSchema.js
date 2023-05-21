// notes{
//     id
//     particpant email
//     created-email
//     details
//     }

const mongoose = require('mongoose');
const uniqueValidator=require('mongoose-unique-validator');

const NotesSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },

    created_by: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true,
    },
    projectId:
    {
       
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
        required:true
    }

});

  
  
const Notes = mongoose.model('Notes', NotesSchema, 'Notes')

module.exports = Notes
