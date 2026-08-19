import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
     title:{
        type:String,
        required:[true, 'Task Title content is required'],
        minLength:7,
    },

    text:{
        type:String,
        required:[true, 'Task text content is required'],
        minLength:12
    },

    priority:{
        type:String,
        enum:["high", "medium", "low"],
        default:"low"
    },

    pinned:{
        type:Boolean,
        required:true,
        default:false
    },
    
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:[true,'user is required']
    }
},
{timestamps:true},
);

// !task model
const Task = mongoose.model('task',taskSchema)
export default Task