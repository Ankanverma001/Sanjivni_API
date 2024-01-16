import mongoose from "./database.js";

const dataSchema = new mongoose.Schema({
    _id:{
        type:Number,
        required:true
    },
    BloodPressure:{
        type:Number,
        default:-1
    },
    SPO2:{
        type:Number,
        default:-1
    }
});

const HData = new mongoose.model('data',dataSchema);

export default HData;