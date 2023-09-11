import express from "express";

import { getData } from "./lib/get-sheet.js";
import { createJSON } from "./lib/format.js";
import checkOrigin from "../libs/origin.js";

const taskApiRouter = express.Router();

taskApiRouter.get("/:sheetID/:tabName/:range", async (req, res) => {
  if (checkOrigin(req)) res.setHeader('Access-Control-Allow-Origin', '*');
  const rawData = await getData(req.params.sheetID, req.params.tabName, req.params.range);
  if (!Array.isArray(rawData)) res.send(rawData);
  const formatedData = createJSON(rawData);
  res.send(formatedData);
});

export default taskApiRouter;