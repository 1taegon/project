import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCHqWiHWj6uRCK29RvdJ-Em1FgevmUEkbI",
  authDomain: "cafe-82903.firebaseapp.com",
  projectId: "cafe-82903",
  storageBucket: "cafe-82903.appspot.com",
  messagingSenderId: "220327878726",
  appId: "1:220327878726:web:40dcf1b00b29ef9319ea47",
  measurementId: "G-KV4CKEQGP3",
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(indexedDB);
