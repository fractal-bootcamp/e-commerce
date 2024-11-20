import axios, { InternalAxiosRequestConfig } from "axios";
import { getAuth } from "firebase/auth";

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
});

const addFirebaseToken = async (
  config: InternalAxiosRequestConfig
): Promise<InternalAxiosRequestConfig> => {
  try {
    const auth = getAuth();
    const currentUser = auth.currentUser;

    if (currentUser) {
      const idToken = await currentUser.getIdToken();
      config.headers.Authorization = `Bearer ${idToken}`;
    }

    return config;
  } catch (error) {
    console.error("Error adding Firebase token:", error);
    return config;
  }
};

axiosClient.interceptors.request.use(
  (config) => addFirebaseToken(config),
  (error) => Promise.reject(error)
);

export default axiosClient;
