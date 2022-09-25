import { auth } from "../../firebaseConfig.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";
import renderHomePage from "../HomePage/renderHomePage.js";
// W funkcji:
// 1. Stwórz element <form> i nadaj mu id 'login-form'
// 2. Stwórz element <input>, nadaj mu type 'email', id 'input-email', placeholder 'email'
// 3. Stwórz element <input>, nadaj mu type 'password', id 'input-password', placeholder 'password'
// 4. Stwórz element <button>, nadaj mu type 'submit', textContent 'Sign in'
// 5. Podepnij oba inputy i button do form.
// 6. Na form nakładacie event listener (na submit).
// W środku event listenera:
// 7. Ściągnij wartości inputów email i password, zapisz do zmiennych (.value)
// 8. Wywołanie funkcji signInWithEmailAndPassword, funkcja przyjmuje 3 argumenty:
// - obiekt auth (zaimportuj z firebaseConfig.js)
// - email (który przed chwilą ściągnąłeś z inputa)
// - password (też z inputa)
// 9. Do wywołania poprzedniej funkcji dopisz thena, będzie on przyjmował parametr creds, w środku thena console.log(creds), console.log('Zalogowano') i wywołanie renderHomePage() (wcześniej trzeba zaimportować), dodaj metode catch i console.log('Error')
// KONIEC EL
// 10. Zwróć element form z głównej funkcji przy pomocy return
export default function () {
  // 1.
  const form = document.createElement("form");
  form.setAttribute("id", "login-form");

  // 2.
  const inputEmail = document.createElement("input");
  inputEmail.setAttribute("type", "email");
  inputEmail.setAttribute("id", "input-email");
  inputEmail.setAttribute("placeholder", "email");

  // 3.
  const inputPassword = document.createElement("input");
  inputPassword.setAttribute("type", "password");
  inputPassword.setAttribute("id", "input-password");
  inputPassword.setAttribute("placeholder", "password");

  // 4.
  const submitButton = document.createElement("button");
  submitButton.setAttribute("type", "submit");
  submitButton.textContent = "Sign in";

  // 5.
  form.appendChild(inputEmail);
  form.appendChild(inputPassword);
  form.appendChild(submitButton);

  // 6.
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // 7.
    const email = inputEmail.value;
    const password = inputPassword.value;

    // 8.
    signInWithEmailAndPassword(auth, email, password)
      .then((creds) => { // 9.
        console.log(creds);
        console.log("zalogowano");
        renderHomePage();
      })
      .catch((err) => console.log(err));
  });

  // 10.
  return form;
}
