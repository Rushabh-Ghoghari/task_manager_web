import jwt from "jsonwebtoken";

const jwtKey = process.env.JWT_KEY;
const signOptions = { expiresIn: "2d" };

if (!jwtKey) {
  // Fail fast with a clear message if JWT secret is missing
  throw new Error("JWT_KEY environment variable is not set");
}

export const generateToken = async (userId, role) => {
  const token = jwt.sign({ userId, role }, jwtKey, signOptions);

  return token;
};

export const verifyToken = async (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, jwtKey, (err, data) => {
      if (err) {
        return reject(new Error("Please login again to continue."));
      }

      resolve({ userId: data.userId });
    });
  });
};

//! TODO: need to change this jwtKey key, its different and unique dont use
//! same jwtKey for GOD user
export const generateGodUserToken = (secretKey) => {
  return jwt.sign({ secretKey }, jwtKey, { expiresIn: "10m" });
};
