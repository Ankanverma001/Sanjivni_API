import express from "express";
import fetchDetails from "../controllers/fetchdetails.js";
const router = express.Router();

router.get("/status/health/:id",fetchDetails.health);
router.get("/status/personal/:id",fetchDetails.personal);

export default router;