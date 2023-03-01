import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDpb2R6K9KQPPWa5XfpGuByxta9mkqBFDk",
  authDomain: "twitter-clone-6d966.firebaseapp.com",
  projectId: "twitter-clone-6d966",
  storageBucket: "twitter-clone-6d966.appspot.com",
  messagingSenderId: "346859273721",
  appId: "1:346859273721:web:e6bffc478ffc6818be1128",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
