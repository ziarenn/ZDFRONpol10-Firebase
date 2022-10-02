import renderTodoForm from "../TodoForm/renderTodoForm.js";
import {
  collection,
  addDoc,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js";
import { firestore } from "../../firebaseConfig.js";

export default function () {
  // 2.
  const contentContainer = document.querySelector(".content");
  contentContainer.innerHTML = "";

  // 3.
  const h2 = document.createElement("h2");
  h2.textContent = "Your team's todos.";
  contentContainer.appendChild(h2);

  // 4.
  const todoForm = renderTodoForm();

  // 5.
  todoForm.setAttribute("id", "teams-todo-form");
  contentContainer.appendChild(todoForm);

  // 6.
  todoForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // 7.
    const todoText = document.getElementById("todo-input").value;

    // 8.
    const radios = [...document.getElementsByName("category")];
    const category = radios.find((el) => el.checked).value;

    // 9.
    addDoc(collection(firestore, "teams"), {
      todoText,
      category,
    })
      .then(() => {
        console.log("Pushed data to firestore");
      })
      .catch(() => {
        console.log("Failed to push data to firestore");
      });
  });
}

