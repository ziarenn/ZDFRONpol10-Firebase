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
        push(todoRef, {
          todoText,
          category,
        })
          .then(() => console.log("Pushed the data to db"))
          .catch((err) => console.log(err.message));
      });
    } else {
      const todos = Object.values(data);

      // 1.
      const h2 = document.createElement("h2");
      h2.textContent = "Add, remove and edit your todos.";

      // 2.
      const listItems = todos.map((el, i) => {
        // 3.
        const li = document.createElement("li");
        li.setAttribute("id", `li-${i}`);

        const div = document.createElement("div");
        div.setAttribute("id", `div-${i}`);

        const span = document.createElement("span");
        span.textContent = `${el.todoText} (${el.category})`;

        const editButton = document.createElement("button");
        editButton.setAttribute("id", `edit-button-${i}`);
        editButton.setAttribute("class", "edit-button");
        editButton.textContent = "Edit";

        const removeButton = document.createElement("button");
        removeButton.setAttribute("id", `remove-button-${i}`);
        removeButton.setAttribute("class", "remove-button");
        removeButton.textContent = "Remove";

        div.appendChild(span);
        div.appendChild(editButton);
        div.appendChild(removeButton);

        li.appendChild(div);
        return li;
      });
    }
  });
}
