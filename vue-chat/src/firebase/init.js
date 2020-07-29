// Connecting to my Firebase App
var firebaseConfig = {
  apiKey: "AIzaSyCj1kT8pckCt7kA-YCltkUvEZ9uT2edwhE",
  authDomain: "vuejschat-5c731.firebaseapp.com",
  databaseURL: "https://vuejschat-5c731.firebaseio.com",
  projectId: "vuejschat-5c731",
  storageBucket: "vuejschat-5c731.appspot.com",
  messagingSenderId: "11485340356",
  appId: "1:11485340356:web:b38febf96f717834a79f91",
  measurementId: "G-ZNLN2XBR6V",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings({ timestampsInSnapshots: true });

// Import the component to VueJS
export default firebaseApp.firestore();

// Chat Analytics
const analyticsApp = firebase.analytics();
