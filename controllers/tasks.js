const Task = require("../models/task");

const getAllTasks = async (req, res) => {
  try {
    const allTasks = await Task.find({});
    res.json({ allTasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(400).json({ msg: error });
  }
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
