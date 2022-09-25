import renderHomePage from "./components/HomePage/renderHomePage.js";
import renderLoginPage from "./components/LoginPage/renderLoginPage.js";
import { auth } from "./firebaseConfig.js";
import {
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";
import renderTodoForm from "./components/TodoForm/renderTodoForm.js";
import renderTodoPage from "./components/TodoPage/renderTodoPage.js";
// Selecting the content section
const contentContainer = document.querySelector(".content");

// Selecting navbar anchors
const homeButton = document.getElementById("home-anchor");
const todosButton = document.getElementById("todos-anchor");
const aboutButton = document.getElementById("about-anchor");
const publicButton = document.getElementById("public-anchor");
const loginButton = document.getElementById("login-anchor");

// Reacting to auth state change
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log(`User is logged in (${user.email}), onAuthStateChanged`);
    loginButton.textContent = "Log out";
  } else {
    console.log("No user logged in. onAuthStateChanged");
    loginButton.textContent = "Log in";
  }
});

// Rendering the home page on initial page load
renderHomePage();

// Navbar buttons listeners

// Home button
homeButton.addEventListener("click", renderHomePage);

// Todos button
todosButton.addEventListener("click", () => {
  contentContainer.innerHTML = "";
  renderTodoPage();
});

// Login button
loginButton.addEventListener("click", () => {
  if (auth.currentUser) {
    signOut(auth)
      .then(() => renderHomePage())
      .catch((err) => console.log(err));
  } else {
    renderLoginPage();
  }
});
