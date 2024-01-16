import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const databaseURL =  process.env.DatabaseURL;

mongoose.connect(databaseURL)
.then(()=>{
    console.log("Connected to the Database");
})
.catch((err)=>{
    console.log(err);
    console.log("Error Connecting to the Database..!");
});

export default mongoose;