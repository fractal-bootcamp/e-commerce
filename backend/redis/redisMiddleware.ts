import { createHash } from "crypto";
import { redisClient } from "../redis/redisClient";
import type { RequestHandler } from "express";
import { withLogging } from "../utils/withLogging";

export const redisMiddleware = (expirationTime = 3600): RequestHandler =>
  withLogging("redisMiddleware", false, async (req, res, next) => {
    // Create cache key
    const requestData = {
      body: req.body,
      query: req.query,
      params: req.params,
      method: req.method,
      path: req.path,
    };
    console.log("REDIS: API path: ", req.path);
    const cacheKey = createHash("sha256").update(JSON.stringify(requestData)).digest("hex");
    const cachedData = await redisClient.get(`cache:${cacheKey}`);
    console.log("REDIS: cacheKey: ", cacheKey);

    // If cached data exists, return cached data
    if (cachedData) {
      console.log("REDIS: cache hit! cacheKey: ", cacheKey);
      res.status(200).json(JSON.parse(cachedData));
      return;
    }

    // If cached data does not exist, cache the data for a certain amount of time
    const originalJson = res.json;
    res.json = function (data) {
      redisClient.setex(`cache:${cacheKey}`, expirationTime, JSON.stringify(data));
      console.log("REDIS: caching completed! cacheKey: ", cacheKey);
      return originalJson.call(this, data);
    };

    next();
  });
