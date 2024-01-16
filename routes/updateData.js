import express from "express";
import updateDetails from "../controllers/updatedata.js";
const router = express.Router();

router.post("/health/:id",updateDetails.health);
router.post("/personal/:id",updateDetails.personal);

export default router;