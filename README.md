# oracle

## To start:

```bash
$ npm install
```

Additionally you will need [firebase tools](https://github.com/firebase/firebase-tools) installed as a resource
to deploy changes to the application:

```bash
$ npm install -g firebase-tools
```

## To develop:

You will need to setup the `default.json` file
in the `config/` folder so the app can connect to the firebase db.

```bash
$ npm run dev```

In order to run cloud functions locally, do the following:

1. Ensure you are on firebase-functions v0.5.7 or greater and firebase-tools v3.8.0 or greater
2. Navigate to /functions
3. Run 'firebase functions:config:get > .runtimeconfig.json' 
4. Ensure .runtimeconfig.json is in the /functions directory (Note: Do not commit this up. It contains sensitive keys.)
5. Run 'firebase serve --only functions' to serve the functions or 'firebase serve --only functions,hosting' to serve both functions and hosting
6. Change your base url in cloudFunctions to the local url
NOTE: This only serves HTTPs functions locally. Currently, no other functions types are supported.

## To build for production:

```bash
$ npm run build
```

## To lint you code:

```bash
$ npm run lint
```


---
