import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDREACT_APP_ER_ID,
  appId: process.env.REACT_APP_APP_ID,
})

export const auth = app.auth()
export default app
