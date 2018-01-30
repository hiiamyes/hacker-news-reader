# Hacker News Reader

## Development

* node version: 8.9.0
* npm version: 5.5.1

```
npm install
npm start
```

## Test the Offline-First (Service Worker) Function Locally

```
npm install -g serve
npm run build
serve -s build
open http://localhost:5000
```

## Deployment

`npm run build` creates a build directory with a production build of the app. Serve it with your preferred solution.
