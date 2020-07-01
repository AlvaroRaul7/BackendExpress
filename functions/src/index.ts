import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as express from 'express';
import * as bodyParser from 'body-parser';

interface User {
    firstName: String,
    lastName: String,
    email: String
}

// initialize Firebase 
admin.initializeApp(functions.config().firebase);

//initialize express server

const app= express();
const main = express();

main.use('/api/v1',app);
main.use(bodyParser.json());
main.use(bodyParser.urlencoded({extended: false}));

const db = admin.firestore();
const userCollection = 'users';
export const webApi= functions.https.onRequest(main);

      
   

