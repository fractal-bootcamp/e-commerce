import { createHash } from "crypto";
import { redisClient } from "../redis/redisClient";
import type { Request, Response, NextFunction } from "express";

export const redisCache = (expirationTime = 3600) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const requestData = {
      body: req.body,
      query: req.query,
      params: req.params,
      method: req.method,
      path: req.path,
    };

    const cacheKey = createHash("sha256").update(JSON.stringify(requestData)).digest("hex");
    const cachedData = await redisClient.get(`cache:${cacheKey}`);
    console.log("REDIS: cacheKey: ", cacheKey);

    if (cachedData) {
      console.log("REDIS: cache hit! cacheKey: ", cacheKey);
      res.status(200).json(JSON.parse(cachedData));
      return;
    }

    // Modify res.json to intercept the response
    const originalJson = res.json;
    res.json = function (data) {
      redisClient.setex(`cache:${cacheKey}`, expirationTime, JSON.stringify(data));
      console.log("REDIS: caching completed! cacheKey: ", cacheKey);
      return originalJson.call(this, data);
    };

    next();
  };
};
