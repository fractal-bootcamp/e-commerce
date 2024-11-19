import admin from "firebase-admin";
import { serviceAccount } from "./serviceAccount";
import { generateUUID } from "../utils/generateUUID";
import axios from "axios";

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

  const customToken = await admin.auth().createCustomToken(userCredential.uid);

  const res = await axios({
    method: "POST",
    url: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=${process.env.FIREBASE_WEB_API_KEY}`,
    data: {
      token: customToken,
      returnSecureToken: true,
    },
  });
  const idToken: string = res.data.idToken;
  return idToken;
};
