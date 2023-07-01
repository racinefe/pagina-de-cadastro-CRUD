import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyDyPon5n1mrJzqxHS6J03j-dWsLTkSty9Q",
  authDomain: "cadastro-crud-48092.firebaseapp.com",
  databaseURL: "https://cadastro-crud-48092-default-rtdb.firebaseio.com",
  projectId: "cadastro-crud-48092",
  storageBucket: "cadastro-crud-48092.appspot.com",
  messagingSenderId: "284809249126",
  appId: "1:284809249126:web:b1db4e4bd5f9f21737c8a7"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

export default database;