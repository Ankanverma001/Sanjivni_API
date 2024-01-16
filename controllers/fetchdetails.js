import User from "../models/users.js";
import Hdata from "../models/healthdata.js";
const fetchDetails = {
    personal: (req,res)=>{
        const id =  req.params.id;
        User.findOne({_id:id})
        .then((details)=>{
            if(details.length==0){
                res.status(200).json({message:"User Not found"});
            }
            res.status(200).json({Details:details});
        })
        .catch((err)=>{
            res.status(500).json({message:"Internal server Error"});
        })
    },

    health : (req,res)=>{
        const id = req.params.id;
        Hdata.findOne({_id:id})
        .then((details)=>{
            if(details.length==0){
                res.status(200).json({message:"User Not found"});
            }
            res.status(200).json({Details:details});
        })
        .catch((err)=>{
            res.status(500).json({message:"Internal server Error"});
        })
    }
}

export default fetchDetails;