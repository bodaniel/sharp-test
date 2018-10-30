# Sharp test
Testing Sharp on Alpine Linux in Docker

## Prerequisites
Install Docker.

## Do it
```
git clone git@github.com:bodaniel/sharp-test.git
cd sharp-test
docker build -t sharptest .
docker run sharptest
```

## Vips using RAM
```
docker run -e VIPS_DISC_THRESHOLD=200m sharptest
```