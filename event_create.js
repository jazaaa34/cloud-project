// Import Firebase libraries
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
const eventForm = document.getElementById("event-form");
eventForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const eventName = document.getElementById("event-name").value;
  const eventLocation = document.getElementById("event-location").value;
  const eventDate = document.getElementById("event-date").value;
  const eventDescription = document.getElementById("event-description").value;

  try {
    await addDoc(collection(db, "events"), {
      name: eventName,
      location: eventLocation,
      date: eventDate,
      description: eventDescription
    });

    alert("✅ Event created successfully!");
    eventForm.reset();
  } catch (error) {
    alert("❌ Error creating event: " + error.message);
  }
});
