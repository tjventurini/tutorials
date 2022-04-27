# Getting Started with Superset

[Source](https://superset.apache.org/docs/installation/installing-superset-using-docker-compose)

## Run

```
cd src
git clone https://github.com/apache/superset.git
cd superset
git checkout 1.4.0
TAG=1.4.0 docker-compose -f docker-compose-non-dev.yml up -d
```

Superset should now be available on [localhost:8088](http://localhost:8088).

You can login using the following credentials.

```
username: admin
password: admin
```

## Troubleshooting

If you get a 500 error when accessing Superset for the first time through the browser, check if you have other docker containers running that interfere with this docker-compose sestup.

## Tutorials

Check out the following links to get familiarized with Superset.

- [What is Superset](https://superset.apache.org/docs/intro)
- [Installing Superset Locally Using Docker Compose](https://superset.apache.org/docs/installation/installing-superset-using-docker-compose)
- [Creating Your First Dashboard](https://superset.apache.org/docs/creating-charts-dashboards/creating-your-first-dashboard)
- [Exploring Data in Superset](https://superset.apache.org/docs/creating-charts-dashboards/exploring-data)