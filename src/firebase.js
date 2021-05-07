import firebase from 'firebase/app'
//import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';


const settings = {timestampsInSnapshots: true};

    const config  = {
      apiKey: "AIzaSyCvGu-_bQTDn4h1FbKbaZ5H-UAcLjyVdk8",
      authDomain: "my-database-3a61b.firebaseapp.com",
      databaseURL: "https://my-database-3a61b-default-rtdb.firebaseio.com",
      projectId: "my-database-3a61b",
      storageBucket: "my-database-3a61b.appspot.com",
      messagingSenderId: "1036111175681",
      appId: "1:1036111175681:web:4367a3fd778259c32aa000"
  };

firebase.initializeApp(config);

firebase.firestore().settings(settings);
const auth = firebase.auth();
const userCollections = firebase.firestore().collection('users');


export default firebase;
export{
  auth,
  userCollections
}


