// Import latest Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

// Replace with your own config
// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_PROJECT.firebaseapp.com",
//   databaseURL: "https://YOUR_PROJECT.firebaseio.com",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_PROJECT.appspot.com",
//   messagingSenderId: "YOUR_SENDER_ID",
//   appId: "YOUR_APP_ID"
// };
const firebaseConfig = {
    apiKey: "AIzaSyAaF5OYId1cj0UtSdfKRrvSJLiBEpgL6-Q",
    authDomain: "copy-er.firebaseapp.com",
    projectId: "copy-er",
    databaseURL: "https://copy-er-default-rtdb.asia-southeast1.firebasedatabase.app/",
    storageBucket: "copy-er.firebasestorage.app",
    messagingSenderId: "728665812415",
    appId: "1:728665812415:web:91ffb1bb51bdd12047050a"
  };

// Init Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const textarea = document.getElementById("clipboard");

textarea.addEventListener("input", () => {
  const text = textarea.value;
  set(ref(db, "clipboard"), { text });
});

textarea.addEventListener("focus", () => {
  textarea.select();
});

// Listen for clipboard updates
onValue(ref(db, "clipboard"), (snapshot) => {
  const data = snapshot.val();
  textarea.value = data?.text || "";
});

