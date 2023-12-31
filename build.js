import dotenv from "dotenv";
dotenv.config({ path: "./config.env" });

import * as fs from "node:fs";


// Generate Google Cloud Auth JSON file

const GOOGLE_CLOUD_CREDENTIALS = {
  "type": "service_account",
  "project_id": process.env.GOOGLE_PROJECT_ID,
  "private_key_id": process.env.GOOGLE_PRIVATE_KEY_ID,
  "private_key": process.env.GOOGLE_PRIVATE_KEY,
  "client_email": process.env.GOOGLE_CLIENT_EMAIL,
  "client_id": process.env.GOOGLE_CLIENT_ID,
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": process.env.GOOGLE_CLIENT_X509_CERT_URL,
  "universe_domain": "googleapis.com"
}

fs.writeFileSync(
  process.env.GOOGLE_SERVICE_ACCOUNT_KEY_FILE_PATH,
  JSON.stringify(GOOGLE_CLOUD_CREDENTIALS)
);
