import { body } from "express-validator";
import { UserRoles } from "../models/user.model.js";

export const createUserValidationRules = () => [
  body("email").isEmail().withMessage("Valid email is required"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),
  body("role")
    .isIn(Object.values(UserRoles))
    .withMessage("Invalid role provided"),
];

export const updateUserValidationRules = () => [
  body("email").optional().isEmail().withMessage("Valid email is required"),
  body("password")
    .optional()
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),
  body("role")
    .optional()
    .isIn(Object.values(UserRoles))
    .withMessage("Invalid role provided"),
];
