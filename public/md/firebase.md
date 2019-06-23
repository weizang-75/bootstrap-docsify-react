### [Home](../README.md)

## Firebase

### Why Firebase?

Firebase gives you the tools to develop high-quality apps, grow your user base, and earn more money. We cover the essentials so you can monetize your business and focus on your users.

- https hosting
- Firestore
- Storage buckets
- Authentication
- Machine learning (native apps only)

### Using the Firebase CLI

```bash
npm install -g firebase-tools
firebase login
```

### Provisioning a new Environment

Start a new Firebase Project (Environment) and copy the config.

[![Project Config](https://firebasestorage.googleapis.com/v0/b/docsify-react.appspot.com/o/firebase_config.jpg?alt=media&token=a215b1e3-fdf0-4045-bfe8-8960e6a1f51b)](https://console.firebase.google.com)

### Configure node .env

```bash
cd <path-to>/docsify-react
cp .env.sample .env.development
cp .env.sample .env.production
```

Copy the config details from firebase into these files.

[![Copy Config](https://firebasestorage.googleapis.com/v0/b/docsify-react.appspot.com/o/env_file.jpg?alt=media&token=94dcf2a9-f8c2-40b4-9ba9-c6580a2d51fe)](https://console.firebase.google.com)


You can use seperate environmants for dev & prod here.

Restart the development environment for the settings to take effect.


### yarn deploy

- Builds the latest distribution to ./build
- Copies dist (using gulp) to the ./firebase/build
- runs `firebase deploy`

### Dictionary

This is what the following terms mean in the context of this dowcument
> An __Environment__ is an individual Firebase project  
A __Project__ is the name Firebase uses.  
An __.env file__ is one which does not get tracked in the repo

[![Firebase Console](https://firebasestorage.googleapis.com/v0/b/docsify-react.appspot.com/o/firebase.png?alt=media&token=f886eb14-2051-4b87-8286-ef804fe6ffa4)](https://console.firebase.google.com)