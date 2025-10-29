import User from "../models/user.model.js";

export const getUsers = async (req, res) => {
  try {
    let users;

    if (req.user.role === "admin") {
      users = await User.find({}, "-password");
    } else {
      users = await User.find({ _id: req.user._id }, "-password");
    }

    return res.status(200).json({ data: users, successful: true });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({
      message: "Error fetching users",
      successful: false,
    });
  }
};

export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;

    if (req.user.role !== "admin" && req.user._id.toString() !== id) {
      return res
        .status(403)
        .json({ message: "Access denied", successful: false });
    }

    const user = await User.findById(id, "-password");
    if (!user) {
      return res
        .status(404)
        .json({ message: "User not found", successful: false });
    }

    return res.status(200).json({ data: user, successful: true });
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({
      message: "Error fetching user",
      successful: false,
    });
  }
};
