importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js')
// import { getMessaging } from "firebase/messaging"

var firebaseConfig = {
  apiKey: "AIzaSyAl3pIJiOGD9MgpgmfXqqhouPohhEXxvW0",
  authDomain: "ic-pos.firebaseapp.com",
  projectId: "ic-pos",
  storageBucket: "ic-pos.appspot.com",
  messagingSenderId: "934631668976",
  appId: "1:934631668976:web:d136d223d7ed1181e21635",
  measurementId: "G-M6F68ZE9EC"
}

const app = firebase.initializeApp(firebaseConfig)

// Retrieve firebase messaging
// const messaging = firebase.messaging();

// messaging.onBackgroundMessage(function(payload) {
//   console.log("Received background message ", payload);

//   const notificationTitle = payload.notification.title;
//   const notificationOptions = {
//     body: payload.notification.body,
//   };

//   self.registration.showNotification(notificationTitle, notificationOptions);
// });

app.messaging().getToken({ vapidKey: "BLkYaJKQf2MdrmEwMofkfizo9C3TEFz2a2LCRwpmq0qJRYIK9cB9_oIdGDB8N-i2gVlKwsgzQmcBwc6hvr6uWFo" })
