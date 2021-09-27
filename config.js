import firebase from 'firebase'
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBYiyYLWG-lSj7KX17j_suK-dL00BhMjzA",
    authDomain: "school-attendence-daa3c.firebaseapp.com",
    databaseURL: "https://school-attendence-daa3c-default-rtdb.firebaseio.com",
    projectId: "school-attendence-daa3c",
    storageBucket: "school-attendence-daa3c.appspot.com",
    messagingSenderId: "900258575969",
    appId: "1:900258575969:web:0f0487809b5d1761f8dc20"
  };
  // Initialize Firebase
  if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
  }

export default firebase.database();