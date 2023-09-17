import express from "express";

import { getData } from "../task-api/lib/get-sheet.js";
import checkOrigin from "../libs/origin.js";

const scheduleApiRouter = express.Router();


scheduleApiRouter.get("/:tabName", async (req, res) => {
  if (checkOrigin(req)) res.setHeader('Access-Control-Allow-Origin', '*');
  const rawData = await getData(process.env.SCHEDULE_SPREADSHEET_ID, req.params.tabName, process.env.SCHEDULE_SHEETS_RANGE);

  if (rawData.error) { res.send(rawData); return; };
  var result = JSON.parse(rawData.values[0][0]);

  res.json(result);
});

export default scheduleApiRouter;