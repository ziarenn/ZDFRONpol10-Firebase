import renderTodoForm from "../TodoForm/renderTodoForm.js";
import {
  ref,
  onValue,
  push,
  update,
  remove,
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-database.js";
import { auth, db } from "../../firebaseConfig.js";

export default function () {
  const contentContainer = document.querySelector(".content");

  const todoRef = ref(db, "todos/" + auth.currentUser.uid);

  onValue(todoRef, (snapshot) => {
    const data = snapshot.val();
    if (!data) {
      // 1. Wyczyść contentContainer
      // 2. Stwórz element <h2> z textContent 'Add, remove and edit your todos' i podepnij go do content containera
      // 3. Wywołaj funkcję renderTodoForm i zapisz wynik wywołania do zmiennej (const todoForm = renderTodoForm())
      // 4. Podpięcie todo forma do content containera (con.apc(todoForm))
      // 5. Dodaj event listener na todoForm (reagujemy na submit, pamiętać o event.preventDefault())
      // W EL:
      // 6. Wybieracie wszystkie radio inputy i zapisujecie do zmiennej radios (document.getElementsByName (DOKUMENTACJA)), zrób z tego array bo getElementsByName zwraca HTMLCollection
      // 7. Z tych 4 radio inputów znajdź ten który jest zaznaczony (input.checked, .find(), wybieranie elementów w CSS w zależności od atrybutów), po znalezieniu inputu ściągnąć z niego .value
      // 8. Wybierz input o id 'todo-input' przy pomocy getElementById i ściągnij z niego value, zapisz do zmiennej
      contentContainer.innerHTML = "";
      const h2 = document.createElement("h2");
      h2.textContent = "Add, remove and edit your todos.";
      contentContainer.appendChild(h2);
      const todoForm = renderTodoForm();
      contentContainer.appendChild(todoForm);
      todoForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const radios = [...document.getElementsByName("category")];
        const category = radios.find((el) => el.checked).value;
        const todoText = document.getElementById("todo-input").value;
        console.log(category, todoText);
      });
    }
  });
}
