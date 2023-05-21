
const mongoose = require('mongoose');
const uniqueValidator=require('mongoose-unique-validator');

const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    assigned_by:{
        type:String,
        required:true
    },
    status: {
        type: Number,
        required: true,
    },
    priority: {
        type:Number,
        required:true,
    },
    end_date: {
        type:Date,
        required:true,
    },
    details: {
        type:String,
    },
    projectId:
    {
       
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
        required:true
    },

});
TaskSchema.plugin(uniqueValidator);
const Task = mongoose.model('Task', TaskSchema, 'Task')

module.exports = Task
