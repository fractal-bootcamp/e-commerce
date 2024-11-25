import Redis from "ioredis";
import { REDIS_URL } from "../globals";

export const redis = new Redis(REDIS_URL);
