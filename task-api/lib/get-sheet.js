/* import dotenv from "dotenv";
dotenv.config({ path: "./config.env" }); */

import { google } from "googleapis";



async function getGoogleSheetClient() {
  const auth = new google.auth.GoogleAuth({
    keyFile: process.env.GOOGLE_SERVICE_ACCOUNT_KEY_FILE_PATH,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const authClient = await auth.getClient();
  return google.sheets({
    version: 'v4',
    auth: authClient,
  });

}

async function readGoogleSheet(googleSheetClient, sheetId, tabName, range) {
  try {
    const res = await googleSheetClient.spreadsheets.values.get({
      spreadsheetId: sheetId,
      range: `${tabName}!${range}`,
    });

    if (res.status !== 200) return [];
    if ((res.code !== 200) && (res.code !== undefined)) return [];
    return res.data.values;
  } catch (error) {
    return [];
  }
}

export async function getData(sheetID, tabName, range){
  const googleClient = await getGoogleSheetClient();
  const rawData = await readGoogleSheet(googleClient, sheetID, tabName, range);
  return rawData;
}
