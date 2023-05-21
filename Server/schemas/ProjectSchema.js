const mongoose = require('mongoose')

const ProjectSchema = new mongoose.Schema({

    userId:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:true
    },
    created_by:{
        type:String,
        required:true
    },
    name: {
        type: String,
        required: true,
    },
    status: {
        type:String,
        required:true,
    }

});

const Project = mongoose.model('Project', ProjectSchema)

module.exports = Project