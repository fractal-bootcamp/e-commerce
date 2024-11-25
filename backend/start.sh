#!/bin/sh

# Wipe current containers/images
bash scripts/dockerWipe.sh

# Create local database
bash scripts/db.sh

# Spin up server
docker-compose down
docker-compose up --build
