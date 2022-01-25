import Vue from 'vue'

import { rtdbPlugin } from 'vuefire'

import firebase from 'firebase/app'
import 'firebase/database'

Vue.use(rtdbPlugin)

const firebaseConfig = {
  apiKey: "AIzaSyDoHuAtwRSAoGQe0ZBY8iydrXS_lUuECF4",
  authDomain: "formal-001.firebaseapp.com",
  databaseURL: "https://formal-001.firebaseio.com",
  projectId: "formal-001",
  storageBucket: "formal-001.appspot.com",
  messagingSenderId: "438528269119",
  appId: "1:438528269119:web:4d7240ae5b4188da7d118a",
  measurementId: "G-L5040K0E67"
};

export const db = firebase
  .initializeApp(firebaseConfig).database()