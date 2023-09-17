import express from "express";

import { getData } from "./lib/get-sheet.js";
import { createJSON } from "./lib/format.js";
import checkOrigin from "../libs/origin.js";

const taskApiRouter = express.Router();

taskApiRouter.get("/:tabName/:timeOut/:timeIn", async (req, res) => {
  if (checkOrigin(req)) res.setHeader('Access-Control-Allow-Origin', '*');
  const rawData = await getData(process.env.HOMEWORK_SPREADSHEET_ID, req.params.tabName, process.env.HOMEWORK_SHEETS_RANGE);

  if (rawData.error) { res.send(rawData); return; };

  const formatedData = createJSON(rawData.values, parseInt(req.params.timeOut), parseInt(req.params.timeIn));
  res.send(formatedData);
});

export default taskApiRouter;