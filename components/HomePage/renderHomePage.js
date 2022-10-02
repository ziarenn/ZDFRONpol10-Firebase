export default function () {
  const contentContainer = document.querySelector(".content");
  contentContainer.innerHTML = "";
  const h2 = document.createElement("h2");
  h2.textContent = "Welcome!";
  const p = document.createElement("p");
  p.textContent =
    "This is a simple web page written in vanilla JavaScript, used as a practice project in frontend courses at Software Development Academy. Block subject: Firebase.";
  contentContainer.appendChild(h2);
  contentContainer.appendChild(p);
}
