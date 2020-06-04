import app from "firebase/app";
import 'firebase/auth';
import 'firebase/firebase-firestore'
import 'firebase/database';

const config = {
    apiKey: "AIzaSyAwK7g0cN2OWJy5-CGXuJfYsM5nscdh1cE",
    authDomain: "portfoliolab-6b1e0.firebaseapp.com",
    databaseURL: "https://portfoliolab-6b1e0.firebaseio.com",
    projectId: "portfoliolab-6b1e0",
    storageBucket: "portfoliolab-6b1e0.appspot.com",
    messagingSenderId: "706702384233",
    appId: "1:706702384233:web:da36fa725125671f0256f8"
};

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
        this.db = app.database();
    }

    // *** Auth API ***

    register = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    login = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);


    logout = () => this.auth.signOut();

    gifts = () => this.db.ref('gifts');
    // doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
    //
    // doPasswordUpdate = password =>
    //     this.auth.currentUser.updatePassword(password);
}

export default  new Firebase();