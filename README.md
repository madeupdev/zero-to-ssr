# Zero-to-SSR

Building an app with server side rendering is easier than you think with React & Express.

> This repository is set up as a template, feel free to generate your own project from it.

## Whats included?

- A hydrating React app that is server side rendered by a Node Express app
- Language/locale support through query string (e.g. `?lang=es`)
- Webpack development configurations and custom development script

## Getting started

1. `yarn install`
2. `yarn start`
3. Open http://localhost:3000 in your browser

## How does it work?

To acheive SSR and client hydration we need to perform 2 simultaneous builds.

### Client

We first build our application with the browser as our targeted environment. These will be the assets that we serve to the browser and which will hydrate the application. It's important that we write these files to the disk using the devServer so that our Express app can serve them as static assets.

### Server

Our server provides 2 tasks required for server side rendering. The first is it serves our client side static assets which are required for client hydration.

The second is that it builds it's own version of the same React app which it renders on the server in it's own middleware. This middleware also renders the HTML page which our application renders inside.
