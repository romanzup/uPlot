# The first task

It is a simple react application which was bootstrapped with the library `uplot` and `uplot-react`

## Running
The work derictory is `u-plot`

```sh
cd u-plot
```

# The 2nd and 3rd tasks

[![Piral Logo](https://github.com/smapiot/piral/raw/develop/docs/assets/logo.png)](https://piral.io)

# [Piral Sample](https://piral.io) &middot; [![GitHub License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/smapiot/piral/blob/main/LICENSE) [![Gitter Chat](https://badges.gitter.im/gitterHQ/gitter.png)](https://gitter.im/piral-io/community)

> piral-microfrontend-demo

:zap: A demo for microfrontend page using Piral. :rocket:

## Prerequisites

For running the code you'll need Node.js with NPM. Nothing else is required.

Editing the code should work with convenience in any IDE capable of dealing with TypeScript. Personally, I've used Visual Studio Code.

## Installation

Each subdirectory contains a Node project and thus needs to be set up correctly, e.g., (for the `u-plot-instance`):

```sh
cd u-plot-instance
npm i
```

## Running

First, make sure you have access to a pilet feed. In the simplest case clone the [sample feed repository](https://github.com/smapiot/sample-pilet-service) and follow the instructions for running.


```sh
cd ./u-plot-instance
npx sample-pilet-service
```

Start the debug version of the `u-plot-instance`:

```sh
cd ./u-plot-instance
npm start
```
You should see an empty page (with a red rectangle).

Now open another shell and publish the pilets:

The first pilet
```sh
cd ./u-plot-pilet
npm i
pilet publish --url http://localhost:9000/api/v1/pilet --api-key <key> --fresh
```

The second pilet
```sh
cd ./u-plot-other-pilet
npm i
pilet publish --url http://localhost:9000/api/v1/pilet --api-key <key> --fresh
```

The upload assumes that the pilet feed service is running at `http://localhost:9000/api/v1/pilet`. The used API Key is one of the standard ones. If these assumptions are not correct you'll need to correct the settings.

## License

Piral and this sample code is released using the MIT license. For more information see the [license file](./LICENSE).