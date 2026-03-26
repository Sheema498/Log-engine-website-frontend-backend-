import Log from "../models/Log.js";

// CREATE LOG
export const createLog = async (req, res) => {
  const log = await Log.create(req.body);
  res.status(201).json(log);
};

// GET LOGS
export const getLogs = async (req, res) => {
  const { level, search, page = 1, limit = 10 } = req.query;

  let query = {};

  if (level) query.level = level;
  if (search) query.message = { $regex: search, $options: "i" };

  const logs = await Log.find(query)
    .sort({ createdAt: -1 })
    .skip((page - 1) * limit)
    .limit(Number(limit));

  const total = await Log.countDocuments(query);

  res.json({ logs, total });
};

// ANALYTICS
export const getAnalytics = async (req, res) => {
  const data = await Log.aggregate([
    { $group: { _id: "$level", count: { $sum: 1 } } }
  ]);

  res.json(data);
};