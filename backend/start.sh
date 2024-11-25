#!/bin/sh

# Wipe current containers/images
bash scripts/dockerWipe.sh

# Create local database
bash scripts/db.sh

# Seed the database
bash scripts/seed.sh

# Spin up server
bash scripts/server.sh
