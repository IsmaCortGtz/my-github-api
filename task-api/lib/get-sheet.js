import fetch from 'node-fetch';
/* import dotenv from "dotenv";
dotenv.config({ path: "./config.env" }); */

export async function getData(sheetID, tabName, range){
  const URL_TO_FETCH = `https://sheets.googleapis.com/v4/spreadsheets/${sheetID}/values/${tabName}!${range}?key=${process.env.GOOGLE_API_KEY}`; 
  const rawData = await fetch(URL_TO_FETCH).then((res) => res.json());
  return rawData;
}
