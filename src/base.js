import firebase from 'firebase';
import '@firebase/firestore';
import 'firebase/storage'

  const config =  ({
    apiKey: "AIzaSyAlxmTlKpk7vm-iNYAEJyIDf0IAYCQ1OSE",
    authDomain: "krogkollen-f1cd6.firebaseapp.com",
    projectId: "krogkollen-f1cd6",
    storageBucket: "krogkollen-f1cd6.appspot.com",
    messagingSenderId: "13531846650",
    appId: "1:13531846650:web:081a327e7f75e237447643",
    measurementId: "G-17G5MCP8DZ"
  });

  export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();


