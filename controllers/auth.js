import HData from "../models/healthdata.js";
import User from "../models/users.js";

const auth = {
    register:(req,res)=>{
        const id =  req.body.userid;
        const password =  req.body.password;
        const name = req.body.name;
        const newuser =  new User({
            _id:id,
            Password:password,
            Name:name
        });
        newuser.save()
        .then(()=>{
            const newdata= new HData({
                _id:id
            })
            newdata.save()
            .then(()=>{
                console.log("Health Document initialised");
                res.status(200).json({message:"User Registered"});
            })
            .catch(err=>{
                console.log("Unable to initailize the health document");
                res.status(500).json({message:"User already exits, Use new Id",Error:err});
            })
        })
        .catch((err)=>{
            res.status(500).json({message:"User already exits, Use new Id",Error:err});
        })
    },
}

export default auth;