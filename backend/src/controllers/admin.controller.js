import bcrypt from "bcrypt";
import Admin, { AdminRoles } from "../models/admin.model.js";
import { generateToken } from "../utils/jwt.js";
import User, { UserRoles } from "../models/user.model.js";
import Task from "../models/task.model.js";

export const login = async (req, res) => {
  try {
    console.info(`Received login request for ${req.body.email}`);
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
        successful: false,
      });
    }

    let adminAccount = await Admin.findOne({ email });
    let userAccount = await User.findOne({ email });

    if (!adminAccount && !userAccount) {
      return res.status(404).json({
        message: "Account not found. Please register to continue.",
        successful: false,
      });
    }

    const account = adminAccount || userAccount;

    if (account.active === false) {
      return res.status(403).json({
        message: "Your account has been blocked. Please contact support.",
        successful: false,
      });
    }

    const isMatch = await bcrypt.compare(password, account.password);
    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid email or password",
        successful: false,
      });
    }

    const accessToken = await generateToken(account.id, account.role);

    return res.status(200).json({
      user: { ...account.toJSON(), accessToken },
      message: "Login successful",
      successful: true,
    });
  } catch (error) {
    console.error("Error during login", error);
    return res.status(500).json({
      message: "An error occurred during the login process",
      successful: false,
    });
  }
};

export const signup = async (req, res) => {
  try {
    console.info("Received signup request");
    const { email, password, role } = req.body;

    if (!email || !password || !role) {
      return res.status(400).json({
        message: "All fields are required",
        successful: false,
      });
    }

    let Model;
    if (role === AdminRoles.ADMIN) {
      Model = Admin;
    } else if (role === UserRoles.USER) {
      Model = User;
    } else {
      return res.status(400).json({
        message: "Invalid role specified",
        successful: false,
      });
    }

    const existingAcc = await Model.findOne({ email });
    if (existingAcc) {
      return res.status(400).json({
        message: `${role} already exists with this email`,
        successful: false,
      });
    }

    let account = new Model({
      email,
      password,
      role,
    });
    account = await account.save();

    const accessToken = await generateToken(account.id, account.role);

    return res.status(200).json({
      user: { ...account.toJSON(), accessToken },
      message: `${role} signup successful`,
      successful: true,
    });
  } catch (error) {
    console.error("Error during signup", error);
    res.status(500).json({
      message: "An error occurred during the signup process",
      successful: false,
    });
  }
};

export const profile = async (req, res) => {
  return res.json({
    user: req.user,
    message: "Profile fetched successfully",
    successful: true,
  });
};
