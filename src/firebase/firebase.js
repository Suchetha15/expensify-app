import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBraAlx0jggBXwToP9VuFLcZ-wkvSuXXh8",
    authDomain: "expensify-prjct.firebaseapp.com",
    databaseURL: "https://expensify-prjct.firebaseio.com",
    projectId: "expensify-prjct",
    storageBucket: "expensify-prjct.appspot.com",
    messagingSenderId: "463895235673"
};
firebase.initializeApp(config);
const database = firebase.database();

export { firebase, database as default};