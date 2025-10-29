import Task from "../models/task.model.js";

export const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;

    const task = await Task.create({
      title,
      description,
      createdBy: req.user._id,
    });

    res.status(201).json({ task, successful: true });
  } catch (error) {
    res.status(500).json({ message: "Error creating task", successful: false });
  }
};

export const getTasks = async (req, res) => {
  try {
    let tasks;

    if (req.user.role === "admin") {
      tasks = await Task.find({});
    } else {
      tasks = await Task.find({ createdBy: req.user._id });
    }

    return res.status(200).json({ data: tasks, successful: true });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching tasks", successful: false });
  }
};

export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, status } = req.body;

    const task = await Task.findById(id);
    if (!task) {
      return res
        .status(404)
        .json({ message: "Task not found", successful: false });
    }

    if (
      req.user.role !== "admin" &&
      String(task.createdBy) !== String(req.user._id)
    ) {
      return res
        .status(403)
        .json({
          message: "Not allowed to update this task",
          successful: false,
        });
    }

    if (title !== undefined) task.title = title;
    if (description !== undefined) task.description = description;
    if (status !== undefined) task.status = status;

    await task.save();
    return res.status(200).json({ task, successful: true });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error updating task", successful: false });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    if (!task) {
      return res
        .status(404)
        .json({ message: "Task not found", successful: false });
    }

    if (req.user.role !== "admin") {
      return res
        .status(403)
        .json({ message: "Only admin can delete tasks", successful: false });
    }

    await Task.findByIdAndDelete(id);
    return res.status(200).json({ message: "Task deleted", successful: true });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error deleting task", successful: false });
  }
};
