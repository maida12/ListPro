
const mongoose = require('mongoose');
const uniqueValidator=require('mongoose-unique-validator');

const ReminderSchema = new mongoose.Schema({
    

    userEmail:{
        type:String,
        required:true
    },
    
    content: {
        type:String,
    },
    TaskId:
    {
       
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task',
        required:true
    },

});
ReminderSchema.plugin(uniqueValidator);
const Reminder = mongoose.model('Reminder', ReminderSchema, 'Reminder')

module.exports = Reminder

