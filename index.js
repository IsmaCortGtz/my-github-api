import dotenv from "dotenv";
dotenv.config({ path: "./config.env" });

import express from "express";
import cors from "cors";
import taskApiRouter from "./task-api/index.js";
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ 
  origin: 'https://ismacortgtz.github.io',
  optionsSuccessStatus: 200
}));

app.get("/:test", (req, res) => {
  res.send(req.params.test)
})

app.use("/task-api", taskApiRouter);

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`Server up at port ${PORT}`);
});
