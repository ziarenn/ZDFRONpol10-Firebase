import renderHomePage from "./components/HomePage/renderHomePage.js";
import renderLoginPage from "./components/LoginPage/renderLoginPage.js";

// Selecting the content section
const contentContainer = document.querySelector(".content");

// Selecting navbar anchors
const homeButton = document.getElementById("home-anchor");
const todosButton = document.getElementById("todos-anchor");
const aboutButton = document.getElementById("about-anchor");
const publicButton = document.getElementById("public-anchor");
const loginButton = document.getElementById("login-anchor");

// Rendering the home page on initial page load
renderHomePage();

// Navbar buttons listeners

// Home button
homeButton.addEventListener("click", renderHomePage);

// Login button
loginButton.addEventListener("click", () => {
  renderLoginPage();
});
