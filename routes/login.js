import express from "express";
import auth from "../controllers/auth.js";
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("Server Working");
});
router.post("/register",auth.register);

export default router;