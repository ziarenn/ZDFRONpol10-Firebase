// W funkcji poniżej:
// 1. Przy uźyciu querySelector wybieracie sekcje o klasie "content" i od razu czyścicie przy pomocy innerHTML.
// 2. Stwórz element <h2> i nadaj mu textContent 'Welcome!'
// 3. Stwórz element <p> i nadaj mu textContent "This is a simple web page written in vanilla JavaScript, used as a practice project in frontend courses at Software Development Academy. Block subject: Firebase."
// 4. Podpinacie h2 i p do sekcji content

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
