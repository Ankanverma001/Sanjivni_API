import mongoose from "./database.js";

const userSchema = new mongoose.Schema({
    _id:{
        type:Number,
        required:true
    },
    Password:{
        type:String,
        required:true,
    },
    Name:{
        type:String,
        required:true,
    },
    Contact:{
        type:Number,
        default:0,
    },
    Email:{
        type:String,
        default:"Not Set",
    },
    Address:{
        type:String,
        default:"Not Set",
    }
});

const User = new mongoose.model('users',userSchema);

export default User;