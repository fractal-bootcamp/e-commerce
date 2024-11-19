import admin from "firebase-admin";
import { serviceAccount } from "./serviceAccount";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
  });
}

const testToken = await admin.auth().createCustomToken("user123");

console.log(testToken);
