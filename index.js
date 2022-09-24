import renderHomePage from "./components/HomePage/renderHomePage.js";
import renderRegisterForm from "./components/RegisterForm/renderRegisterForm.js";
// Selecting navbar anchors
const homeButton = document.getElementById("home-anchor");
const todosButton = document.getElementById("todos-anchor");
const aboutButton = document.getElementById("about-anchor");
const publicButton = document.getElementById("public-anchor");
const loginButton = document.getElementById("login-anchor");

// Rendering the home page on initial page load
renderHomePage();
renderRegisterForm();
// Navbar buttons listeners

// Home button
homeButton.addEventListener("click", renderHomePage);
