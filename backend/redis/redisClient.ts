import Redis from "ioredis";
import { REDIS_URL } from "../globals";

export const redisClient = new Redis(REDIS_URL);
