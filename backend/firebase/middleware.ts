import admin from "firebase-admin";
import { serviceAccount } from "./serviceAccount";
import type { RequestHandler } from "express";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
  });
}

export const verifyFirebaseToken: RequestHandler = async (req, res, next) => {
  const idToken = req.headers.authorization?.split("Bearer ")[1];
  if (!idToken) {
    res.status(400).json({ message: "No token provided" });
    return;
  }
  const decodedToken = await admin.auth().verifyIdToken(idToken);
  const firebaseId = decodedToken.uid;
  const email = decodedToken.email;
  req.body = {
    ...req.body,
    firebaseId: firebaseId,
    email: email,
  };
  next();
};
