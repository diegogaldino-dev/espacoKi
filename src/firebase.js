import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push } from 'firebase/database';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDWcD0PlJfMN9Mu-5rGsKBTOoQ7n-P6BJQ",
  authDomain: "bd-adicionarartigo.firebaseapp.com",
  projectId: "bd-adicionarartigo",
  storageBucket: "bd-adicionarartigo.appspot.com",
  messagingSenderId: "640917001232",
  appId: "1:640917001232:web:c9d00e146a96228dbda695"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const storage = getStorage(app);
const artigosRef = ref(db, 'artigos');

export { db, artigosRef, storage };