#!/bin/sh
docker-compose -f docker-compose-db.yaml down
docker-compose -f docker-compose-db.yaml up -d
npx prisma generate
npx prisma migrate dev