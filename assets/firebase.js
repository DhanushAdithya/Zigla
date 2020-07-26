const firebase = require('firebase')

const firebaseConfig = {
  apiKey: process.env.FB_KEY,
  authDomain: `${process.env.FB_ID}.firebaseapp.com`,
  databaseURL: `https://${process.env.FB_ID}.firebaseio.com`,
  projectId: process.env.FB_ID,
  storageBucket: `${process.env.FB_ID}.appspot.com`,
  messagingSenderId: process.env.MESSAGE_ID,
  appId: process.env.FB_APP_ID,
  measurementId: process.env.MEASUREMENT_ID
};
firebase.initializeApp(firebaseConfig)