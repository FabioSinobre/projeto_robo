import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBDI5bWsjIaMviirPFAfpsuvuMdZbVuozs",
    authDomain: "robot-integration-6b5c0.firebaseapp.com",
    projectId: "robot-integration-6b5c0",
    storageBucket: "robot-integration-6b5c0.appspot.com",
    messagingSenderId: "722527090238",
    appId: "1:722527090238:web:8c7a7db552d8f65ec2436f"
};
export default firebase.initializeApp(firebaseConfig);