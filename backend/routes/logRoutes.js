import express from "express";
import {
  createLog,
  getLogs,
  getAnalytics
} from "../controllers/logController.js";

const router = express.Router();

router.post("/", createLog);
router.get("/", getLogs);
router.get("/analytics", getAnalytics);

export default router;