const Task = require("../models/task");

const getAllTasks = (req, res) => {
  res.send("all items from the controllers");
};

const createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.json({ task });
};
const getTask = (req, res) => {
  res.json({ id: req.params.id });
};
const updateTask = (req, res) => {
  res.json({ id: req.params.id });
};
const deleteTask = (req, res) => {
  res.send("delete task");
};
module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
