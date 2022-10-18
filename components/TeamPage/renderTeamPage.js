import renderTodoForm from "../TodoForm/renderTodoForm.js";
import {
  collection,
  addDoc,
  getDocs,
  onSnapshot,
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

  // ==KONIEC FOREACH I FUNKCJI READDOCDATA==
  // 8. Wywołanie readDocData
  // 9. Podepnij ul (pkt 1) do content container.

  // 1.
  const ul = document.createElement("ul");
  ul.setAttribute("id", "teams-todo-list");

  // 2.
  // const readDocData = async () => {
  //   try {
  //     // 3.
  //     const querySnapshot = await getDocs(collection(firestore, "teams"));

  //     // 4.
  //     querySnapshot.forEach((doc) => {
  //       const { todoText, category } = doc.data();

  //       // 6.
  //       const li = document.createElement("li");
  //       li.textContent = `${todoText} (${category})`;

  //       // 7.
  //       ul.appendChild(li);
  //     });
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };
  // readDocData();
  const renderedTodos = [{ id: 1 }, { id: 2 }, { id: 3 }];
  onSnapshot(collection(firestore, "teams"), (querySnapshot) => {
    console.log(querySnapshot);
    querySnapshot.forEach((doc) => {
      if (renderedTodos.includes(doc.id)) return; // guarding clause ID: 3ugh3eriuh2
      // console.log(renderedTodos);
      renderedTodos.push(doc.id);
      const { todoText, category } = doc.data();

      // 6.
      const li = document.createElement("li");
      li.textContent = `${todoText} (${category})`;

      // 7.
      ul.appendChild(li);
    });
  });

  contentContainer.appendChild(ul);
}
