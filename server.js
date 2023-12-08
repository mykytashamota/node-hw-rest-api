import mongoose from "mongoose";

import app from "./app.js";
import { error } from "console";

import DB_HOST from "./config.js";

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log("Database connection successful");
    app.listen(3000);
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
