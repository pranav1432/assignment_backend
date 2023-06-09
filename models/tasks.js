
const mongoose=require("mongoose");

const taskSchema=new mongoose.Schema({

    "title":{
        type:String,
        required:[true,"Please Enter task title"]
    },
    "assignee":{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    "owner":{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    "status":{
        type:String,
        required:[true,"please select task status"]
    },
    "type":{
        type:String,
        required:[true,"please select task type"]
    },
    "sprint":{
        type:String,
        required:[true,"please select sprint type"]
    },

})


const Task=mongoose.model("Task",taskSchema);

module.exports={
   Task
}



