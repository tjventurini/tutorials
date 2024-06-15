# K6 Performance Tests

This folder contains examples of performance tests using [K6](https://k6.io/). In these examples we are going to use the docker version of k6 to perform our tests.

## Pull the docker images

There are two versions of the docker containers for k6. The first one is the general one.

```bash
docker pull grafana/k6
```

The second one is the one that is prepared for browser tests too.

```bash
docker pull grafana/k6:master-with-browser
```

In this tutorial we are going to focus on executing browser tests, therefore we are going to use the second image.

## Create a new test

K6 comes along with a CLI that allows you to create a new test. To create a new test you can run the following command:

```bash
docker run --rm -i --user=$UID -v $PWD:/app -w /app grafana/k6:master-with-browser new test.js
```

## Execute a test

```bash
docker run --rm -i --user=$UID -v $(pwd):/home/k6/screenshots grafana/k6:master-with-browser run - < test.js
```

## Run tests with dashboard

Note that we are using a different image for this test.

```bash
docker run --rm -it -p 5665:5665 --user=$UID -v $(pwd):/src ghcr.io/grafana/xk6-dashboard run --out 'web-dashboard=period=2s' /src/test.js
```

## Build your own binary with custom extensions

I was not able to find an image that has browser and dashboard support. Therefore, I had to build my own binary. To do the same you can run the following command:

```bash
docker run --rm -u "$(id -u):$(id -g)" -v "${PWD}:/xk6" grafana/xk6 build latest \
    --with github.com/grafana/xk6-dashboard@latest \
    --with github.com/grafana/xk6-browser@latest
```

### Create test using the binary

```bash
./k6 new test.js
```

### Run tests using the binary

Now we can run tests using the binary including browser support (chromium) and a dashboard to follow along the tests.

```bash
./k6 run --out 'web-dashboard=period=2s&open=true' test.js
```

## Create screenshots of the page

See example [browser-test-1.js](./browser-test-1.js)

## Fill out a login form

See example [browser-test-2.js](./browser-test-2.js)

## Hybrid tests

See example [hybrid-test-1.js](./hybrid-test-1.js)

## Execute multiple scenarios in the same test

See example [multiple-scenarios-1.js](./multiple-scenarios-1.js)