import mongoose from "mongoose";

const logSchema = new mongoose.Schema({
  timestamp: { type: Date, default: Date.now },
  level: {
    type: String,
    enum: ["INFO", "WARN", "ERROR"],
    required: true
  },
  service: String,
  message: String
}, { timestamps: true });

export default mongoose.model("Log", logSchema);