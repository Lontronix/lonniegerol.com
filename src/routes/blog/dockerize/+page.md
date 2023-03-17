---
title: Dockerizing Lonniegerol.com
date: "2023-03-16"
---

Whenever I want to host something on [Computer Science House's](https://csh.rit.edu) OKD cluster (like this website!),
I always forget what steps need to be done to acomplish that. I figured it would be a good idea to document this process on
my shiny new blog in the hopes that it might help others.

While some of the steps are specific to node apps, most need to be done for anything else.

## Creating the Dockerfile
The whole point of OKD (which is a distribution of Kubernetes) is to manage a whole bunch of containers. Therefore, anything that
runs on OKD must be in a container.

The first step of creating a container is writing a `Dockerfile` which specifies a sequence of steps (or commands) that need to be
executed to create the container.

In broad strokes, a `Dockerfile` might look something like this:

1. Specify a **base image** (another `Dockerfile` that is already preconfigured to do something like run a [Node app](https://hub.docker.com/_/node) or a [Python app](https://hub.docker.com/_/python))
2. Do some setup (for instance setting environment variables and copying files from the host to the container)
3. start our application

In the case of lonniegerol.com, this is what that looks like:
```docker
# Base Image
FROM docker.io/node:19 as builder

# Setup
ENV NODE_ENV=production

WORKDIR /app

COPY package*.json /app

RUN npm install

COPY . /app/

RUN npm run build

COPY build/ /app/build

# Starting the Application
CMD [ "node", "build/index.js" ]
```

I also have a `.dockerignore` file since I don't want generated directories, like `node_modules/` and generated files like `npm-debug.log` to be copied over
to the container

```
node_modules
npm-debug.log
```
### Components of the Dockerfile
#### Base Image
- The app I'm hosting is a node app, so i'm using the node base image
#### Setup
- **Line 5**: Setting node's environment to `production` so that things like the commit hash that are only shown in dev are hidden
- **Line 7**: Setting the current working directory in the container
- **Line 9**: Copying both `package.json` and `package-lock.json` into the container's working directory
- **Line 11**: Installing node packages
- **Line 13**: Copying all files (that aren't in the `.dockerignore` file) into the container's working directory
- **Line 15**: Compiling all `.svelte` files into html files that are ready to be served
- **Line 17**: Copying the built site into the containers working directory
#### Starting the Application
- Starting the node server and serving my website

## Building and running the container
Once the a `Dockerfile` has been created you need to have your container engine of choice, like [Docker](https://docker.io/) or [Podman](https://podman.io/)
build and then run the container. I suck at remembering shell commands so I usually have a shell script that accomplishes this for me:

```bash
podman build -t lontronix/lonniegerol.com .
podman run -i -t -p 4200:4200 \
	-e PORT='4200' \
	lontronix/lonniegerol.com
```

In the above script, the `-t` flag in the build command allows you to set a tag for your build so that you don't need to refer to it using its randomly generated identifier. The `-i` and `-t` flags make it easier to quit the container by using `ctrl + c` and the `-p` flag lets you forward traffic from a port in the container to a port on the host machine.

