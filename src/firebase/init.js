import firebase from 'firebase/app'
import 'firebase/auth'

// The configuration below is not sensitive data. You can serenely add your config here
const config = {
  apiKey: 'AIzaSyDCnSxKfGyVTmsoZ9drx6PSiahA-dXbWAg',
  authDomain: 'friends-trip-863db.firebaseapp.com',
  databaseURL: 'https://friends-trip-863db.firebaseio.com',
  projectId: 'friends-trip-863db',
  storageBucket: '',
  messagingSenderId: '96851983867',
  appId: '1:96851983867:web:134755cb78531293'
}

firebase.initializeApp(config)
