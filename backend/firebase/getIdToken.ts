import admin from "firebase-admin";
import { serviceAccount } from "./serviceAccount";
import { generateUUID } from "../utils/generateUUID";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
  });
}

export const getIdToken = async () => {
  const uid = generateUUID();
  const userCredential = await admin.auth().createUser({
    uid: uid,
    email: `${uid}@test.com`,
    emailVerified: true,
  });

  const idToken = await admin.auth().createCustomToken(userCredential.uid);

  return idToken;
};
