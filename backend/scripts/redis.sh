#!/bin/sh
docker-compose -f docker-compose-redis.yaml down
docker-compose -f docker-compose-redis.yaml up -d
