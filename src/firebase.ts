import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBnZEXSlVjpnoG3NUFcWgEgGL8tuqFrf6s",
  authDomain: "twitter-clone-79bf4.firebaseapp.com",
  projectId: "twitter-clone-79bf4",
  storageBucket: "twitter-clone-79bf4.appspot.com",
  messagingSenderId: "632890190195",
  appId: "1:632890190195:web:78559a0373fb997584fd06",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
