const mongoose = require('mongoose')

const ProjectMembers = new mongoose.Schema({

    projectId:
    {
       
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
        required:true
    },
    
    email1: {
        type: String,
      
    },
    email2: {
        type: String,
       
    },
    email3: {
        type: String,
       
    },
    

});

const ProjectMember = mongoose.model('ProjectMember', ProjectMembers,'Projectmembers')

module.exports = ProjectMember