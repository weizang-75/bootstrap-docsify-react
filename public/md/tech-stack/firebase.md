
## Firebase

### Why use Firebase?

- It's easy
- It's free
- It has lots of great features
- It's secure

Any Google account, and that comes with a free [Firebase account ](https://firebase.google.com/) 
which you can use to prototype new JavaScript projects. Using a rex account is even better. 
Firebase offers all kinds of cool features for free. It provides an end-to-end identity solution, 
supporting email and password accounts, phone auth, and Google, Twitter, Facebook, and GitHub login, 
and more. You also get an amazing NoSQL  [Firestore](https://firebase.google.com/products/firestore/) 
database. Add secure hosting and you can spin up a demo JavaScript app in no time.

[![listingslab docs](../../img/3rd_party/firebase.png)](https://console.firebase.google.com/u/0/)

### Install

To leverage Firebase you will want to install the Firebase CLI tools as a global dependancy 
and login to [your account](https://console.firebase.google.com/u/0/). 

```
npm install -g firebase-tools
firebase login
```
Once you have authenticated your account, you will not have to do it again unless you log out. 

#### Provision a new project 

- Provision a new firebase project in the [console](https://console.firebase.google.com/u/0/).

#### Initialise project locally

```
cd <project-directory>
firebase init
```
This will guide you through the process of setting up 