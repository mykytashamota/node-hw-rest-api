import mongoose from "mongoose";

import app from "./app.js";
import { error } from "console";

const DB_HOST =
  "mongodb+srv://mykytashamota:77443344Yt@cluster0.syw8owd.mongodb.net/db-contacts?retryWrites=true&w=majority";

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000);
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
