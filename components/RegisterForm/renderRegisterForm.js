import { auth } from "../../firebaseConfig.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";
import renderHomePage from "../HomePage/renderHomePage.js";
// W funkcji poniżej:
// 1. Wybranie i wyczyszczenie sekcji o klasie "content"
// 2. Stwórz element <form> i nadaj mu id 'register-form'.
// 3. Stówrz element <input>, nadaj mu type "email", placeholder "email", id "register-email-input".
// 4. Stwórz 2 osobne inputy, oba będą miały type 'password', oba placeholder "password", pierwszy będzie miał id "register-first-input-password" a drugi id "register-second-input-password"
// 5. Stwórz element <button>, nadaj mu type "submit" i textContent "Register"
// 6. Do elementu <form> (pkt 2) podpiąć wszystkie inputy i button.
// 7. Do sekcji content podpiąć cały formularz
export default () => {
  const contentContainer = document.querySelector(".content");
  contentContainer.innerHTML = "";
  const form = document.createElement("form");
  form.setAttribute("id", "register-form");
  const inputEmail = document.createElement("input");
  inputEmail.setAttribute("type", "email");
  inputEmail.setAttribute("placeholder", "email");
  inputEmail.setAttribute("id", "register-email-input");

  const firstPasswordInput = document.createElement("input");
  firstPasswordInput.setAttribute("type", "password");
  firstPasswordInput.setAttribute("placeholder", "password");
  firstPasswordInput.setAttribute("id", "register-first-input-password");

  const secondPasswordInput = document.createElement("input");
  secondPasswordInput.setAttribute("type", "password");
  secondPasswordInput.setAttribute("placeholder", "password");
  secondPasswordInput.setAttribute("id", "register-second-input-password");

  const submitButton = document.createElement("button");
  submitButton.setAttribute("type", "submit");
  submitButton.textContent = "Register";

  form.appendChild(inputEmail);
  form.appendChild(firstPasswordInput);
  form.appendChild(secondPasswordInput);
  form.appendChild(submitButton);

  contentContainer.appendChild(form);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = inputEmail.value;
    const password1 = firstPasswordInput.value;
    const password2 = secondPasswordInput.value;
    console.log(email, password1, password2);
    if (password1 === password2) {
      console.log("hasla ok");

      // 1. Zwraca Promise (trzeba bedzie zrobic then chain)
      // 2. Argumenty: obiekt auth (firebaseConfig.js), email, password
      createUserWithEmailAndPassword(auth, email, password1).then(
        (userCredentials) => {
          console.log(userCredentials.user.metadata.lastSignInTime);
          renderHomePage();
        }
      );
    } else {
      console.log("hasla sie nie zgadzaja");
    }
  });
};
