// paso objetos para configurar la base de datos userID: USR-1618786-NtTMtr-613343
import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyD-_xIE9KLlp6-cKgJ5nR_G-nnJDz1nXa0",
    authDomain: "taskmgmt-app.firebaseapp.com",
    databaseURL: "https://taskmgmt-app-default-rtdb.firebaseio.com",
    projectId: "taskmgmt-app",
    storageBucket: "taskmgmt-app.appspot.com",
    messagingSenderId: "633454014352",
    appId: "1:633454014352:web:54437f6044c420ce8e4d15"
});

export {firebaseConfig as firebase};