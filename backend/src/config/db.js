import mongoose from "mongoose";

console.log("DB_URL ", process.env.MONGODB_URL);

export async function connect() {
  await mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log("Server is connected to mongodb");
}
