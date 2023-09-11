import express from "express";

import { getData } from "./lib/get-sheet.js";
import { createJSON } from "./lib/format.js";

const taskApiRouter = express.Router();

taskApiRouter.get("/:sheetID/:tabName/:range", async (req, res) => {
  const rawData = await getData(req.params.sheetID, req.params.tabName, req.params.range);
  const formatedData = createJSON(rawData);
  res.send(formatedData);
});

export default taskApiRouter;