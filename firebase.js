var firebaseConfig = {
    apiKey: "AIzaSyBpRTmU-uuuDzxx5aoM2RR5orACxfwDaWM",
    authDomain: "to-do-list-ec0d0.firebaseapp.com",
    projectId: "to-do-list-ec0d0",
    storageBucket: "to-do-list-ec0d0.appspot.com",
    messagingSenderId: "396373148285",
    appId: "1:396373148285:web:9a0d708466f96fe7cfe714",
    measurementId: "G-H5MW96QF6R"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  var db = firebase.firestore();