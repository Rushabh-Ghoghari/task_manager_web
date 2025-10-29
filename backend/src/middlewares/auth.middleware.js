import { verifyToken } from "../utils/jwt.js";
import Admin from "../models/admin.model.js";
import User from "../models/user.model.js";

export default function authWebsite(roles = [], requiredPermissions = []) {
  return async (req, res, next) => {
    try {
      const authHeader = req.headers.authorization || "";
      const token = authHeader.startsWith("Bearer ")
        ? authHeader.slice(7)
        : authHeader;
      if (!token) throw new Error("Please login to continue!");

      const { userId } = await verifyToken(token);

      const admin = await Admin.findById(userId);
      const user = await User.findById(userId);

      if (!admin && !user) {
        throw new Error("Account not found");
      }

      const account = admin || user;

      req.user = account;
      return next();
    } catch (error) {
      return res
        .status(401)
        .json({ message: error.message || "Invalid Token", successful: false });
    }
  };
}
