#!/bin/sh

# Wipe current containers/images
bash scripts/dockerWipe.sh

# Create local Dockerized database
bash scripts/db.sh

# Seed the database
bash scripts/seed.sh

# Create local Dockerized Redis instance
bash scripts/redis.sh

# Spin up server
bash scripts/server.sh
