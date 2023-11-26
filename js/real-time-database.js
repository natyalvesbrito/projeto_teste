const firebaseConfig = {
  apiKey: "AIzaSyAB3bUSrHm-h-GzToxUFtZVMZXQJSoJXpc",
  authDomain: "projeto-integrador-46e02.firebaseapp.com",
  databaseURL: "https://projeto-integrador-46e02-default-rtdb.firebaseio.com",
  projectId: "projeto-integrador-46e02",
  storageBucket: "projeto-integrador-46e02.appspot.com",
  messagingSenderId: "844881299765",
  appId: "1:844881299765:web:97b8cef60f3c2f30a2647c"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

const animalRef = database.ref('Animal');

const idadeAnimal = document.querySelector('idade');
const pesoAnimal = document.querySelector('peso');
const racaAnimal = document.querySelector('raça');
const corAnimal = document.querySelector('cor');