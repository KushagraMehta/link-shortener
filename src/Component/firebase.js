import * as firebase from "firebase";
import "firebase/firebase-storage";
const firebaseConfig = {
  apiKey: "AIzaSyBi-gCY1PyzfB0rkPSwZGyNq-LX3sR2heA",
  authDomain: "link-shortener-7355d.firebaseapp.com",
  databaseURL: "https://link-shortener-7355d.firebaseio.com",
  projectId: "link-shortener-7355d",
  storageBucket: "link-shortener-7355d.appspot.com",
  messagingSenderId: "833709952803",
  appId: "1:833709952803:web:73a23ba19dcbc808f38696",
};
class Firebase {
  constructor() {
    firebase.initializeApp(firebaseConfig);
    this.auth = firebase.auth();
    this.db = firebase.firestore();
  }
  login(email, password) {
    return this.auth.signWithEmailAndPassword(email, password);
  }
  logout() {
    return this.auth.signOut();
  }
  async register(username, email, password) {
    await this.auth.createUserWithEmailAndPassword(email, password);
    return this.auth.currentUser.updateProfile({
      displayName: username,
    });
  }
}

export default new Firebase();
