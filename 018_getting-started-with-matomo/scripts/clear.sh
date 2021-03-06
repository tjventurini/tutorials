#!/usr/bin/env bash

# Load config.
source ./scripts/setup-colors.sh

# Clean up.
rm ./.env && echo -e "${SUCCESS}Removed .env ✅${NC}"
rm ./docker-compose.yml && echo -e "${SUCCESS}Removed docker-compose.yml ✅${NC}"