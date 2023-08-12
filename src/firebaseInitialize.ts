import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getMessaging, getToken } from "firebase/messaging"

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "ic-pos",
  storageBucket: "",
  messagingSenderId: "934631668976",
  appId: "",
  measurementId: ""
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firebaseAuth = getAuth();

export { firebaseAuth }

// Initialize Firebase Cloud Messaging and get a reference to the service
const messaging = getMessaging(app);

// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
// const messaging = getMessaging();
getToken(messaging, { vapidKey: '' }).then((currentToken) => {
  if (currentToken) {
    // Send the token to your server and update the UI if necessary
    console.log("current token fcm", currentToken)
    window.localStorage.setItem("token_fcm", currentToken)
  } else {
    // Show permission request UI
    console.log('No registration token available. Request permission to generate one.');
    // ...
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
  // ...
});

export default messaging