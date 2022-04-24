# Setup Traefik for Multiple Laradock Environments

In this one we are going to setup [Traefik](https://traefik.io) so it resolves two different domains for two different [Laradock](https://laradock.io) environments.

# Run

Add the following to your hosts file.

```
127.0.0.1    laradock-one.local
127.0.0.1    laradock-two.local
```

Now run start the containers.

```bash
(cd src/traefik && docker-compose up -d)
(cd src/laradock_1/laradock && cp .env.example .env && docker-compose up -d nginx mysql php-fpm workspace)
(cd src/laradock_2/laradock && cp .env.example .env && docker-compose up -d nginx mysql php-fpm workspace)
```

(cd src/laradock_1/laradock && docker-compose down --remove-orphans) && (cd src/laradock_2/laradock && docker-compose down --remove-orphans) && (cd src/traefik && docker-compose down --remove-orphans && docker-compose up -d) && (cd src/laradock_1/laradock && docker-compose up -d nginx php-fpm mysql workspace) && (cd src/laradock_2/laradock && docker-compose up -d nginx php-fpm mysql workspace)