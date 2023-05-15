import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push } from 'firebase/database';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCsUY8P7jMwieN3OHhcV5D12sw6GiEJFMY",
  authDomain: "bd-adicionarartigo-3ec38.firebaseapp.com",
  databaseURL: "https://bd-adicionarartigo-3ec38-default-rtdb.firebaseio.com",
  projectId: "bd-adicionarartigo-3ec38",
  storageBucket: "bd-adicionarartigo-3ec38.appspot.com",
  messagingSenderId: "325418594225",
  appId: "1:325418594225:web:5af545843e1b39b2455790"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
const artigosRef = ref(db, 'artigos');
const produtosRef  = ref(db, 'produtos');


export { db, firestore, artigosRef, storage };