// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBf4nIWCX5HcDS1w8log__iTYAjb0KAnA4",
  authDomain: "event-management-48511.firebaseapp.com",
  projectId: "event-management-48511",
  storageBucket: "event-management-48511.appspot.com",
  messagingSenderId: "670107697571",
  appId: "1:670107697571:web:d7cedcf0eca803b920da16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Handle form submission
const applyForm = document.getElementById("apply-form");
applyForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("applicant-name").value;
  const email = document.getElementById("applicant-email").value;
  const eventName = document.getElementById("event-name").value;
  const skills = document.getElementById("skills").value;

  try {
    await addDoc(collection(db, "applications"), {
      name: name,
      email: email,
      event: eventName,
      skills: skills,
      appliedAt: new Date().toISOString()
    });

    alert("✅ Application submitted successfully!");
    applyForm.reset();
  } catch (error) {
    alert("❌ Error submitting application: " + error.message);
  }
});
