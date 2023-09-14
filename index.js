/* import dotenv from "dotenv";
dotenv.config({ path: "./config.env" }); */

import express from "express";
import taskApiRouter from "./task-api/index.js";
const app = express();
const PORT = process.env.PORT || 5000;


app.use("/homework-api", taskApiRouter);


app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`Server up at port ${PORT}`);
});