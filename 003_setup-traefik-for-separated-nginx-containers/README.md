# Setup Traefik for separate Nginx Containers

Setup [Traefik](https://traefik.io) for two [Nginx](https://nginx.org) containers split into multiple `docker-compose.yml` files. Both Nginx containers will be accessible through port 80.

## Run

Add the following to your hosts file.

```
127.0.0.1    nginx-one.local
127.0.0.1    nginx-two.local
```

The start the containers.

```bash
(cd src/traefik && docker-compose up -d)
(cd src/nginx_1 && docker-compose up -d)
(cd src/nginx_2 && docker-compose up -d)
```