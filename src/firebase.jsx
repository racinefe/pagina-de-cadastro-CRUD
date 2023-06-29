import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDyPon5n1mrJzqxHS6J03j-dWsLTkSty9Q",
    authDomain: "cadastro-crud-48092.firebaseapp.com",
    projectId: "cadastro-crud-48092",
    storageBucket: "cadastro-crud-48092.appspot.com",
    messagingSenderId: "284809249126",
    appId: "1:284809249126:web:a0a066d53ae3916237c8a7"
};

firebase.initializeApp(firebaseConfig);

export default firebase;