import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDnNUquLvpubs0mmPOuDV1qYL-RQHHyVGE",
    authDomain: "parker-7bf18.firebaseapp.com",
    databaseURL: "https://parker-7bf18-default-rtdb.firebaseio.com",
    projectId: "parker-7bf18",
    storageBucket: "parker-7bf18.appspot.com",
    messagingSenderId: "486979200513",
    appId: "web:36cb351af0ac77df0a4200",
    measurementId: "TGRH3ZB7V3"
};

const app = initializeApp(firebaseConfig);

export default app;
