# Setup Traefik for Two Nginx Containers

Setup [Traefik](https://traefik.io) for two [Nginx](https://nginx.org) containers in a single `docker-compose.yml` file.

## Run

Add the following to your hosts file.

```
127.0.0.1    nginx-one.local
127.0.0.1    nginx-two.local
```

The start the containers.

```bash
docker-compose up -d
```