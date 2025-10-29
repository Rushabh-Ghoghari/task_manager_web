import mongoose from "mongoose";
import bcrypt from "bcrypt";

export const UserRoles = {
  USER: "user",
};

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: Object.values(UserRoles), required: true },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: (doc, ret, options) => {
        delete ret._id;
        delete ret.__v;
        delete ret.password;
      },
    },
  }
);

// 🔒 Pre-save hook to hash the password before saving
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10); // Hash password securely
  }
  next();
});

const User = mongoose.model("User", userSchema);

export default User;
