import { storage, auth } from "../../firebaseConfig.js";
import {
  uploadBytes,
  ref,
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-storage.js";
// W funkcji:

// 9. Funkcję zaimportuj do index.js, podepnij event listener do storage buttona i tam wywołuj renderStoragePage
export default function () {
  // 2.
  const contentContainer = document.querySelector(".content");
  contentContainer.innerHTML = "";

  // 3.
  const h2 = document.createElement("h2");
  h2.textContent = "Upload your profile photo!";
  contentContainer.appendChild(h2);

  // 4.
  const fileForm = document.createElement("form");
  fileForm.setAttribute("id", "file-form");

  // 5.
  const fileInput = document.createElement("input");
  fileInput.setAttribute("id", "file-input");
  fileInput.setAttribute("type", "file");
  fileInput.setAttribute("accept", "image/png, image/jpeg");

  // 6.
  const submitButton = document.createElement("button");
  submitButton.setAttribute("id", "file-form-submit-button");
  submitButton.setAttribute("type", "submit");
  submitButton.textContent = "Upload your file";

  // 7.
  fileForm.appendChild(fileInput);
  fileForm.appendChild(submitButton);

  // 8.
  contentContainer.appendChild(fileForm);

  fileForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const storageRef = ref(storage, `/users/${auth.currentUser.uid}/avatar`);

    const file = fileInput.files[0];
    uploadBytes(storageRef, file)
    .then(()=> console.log('File  uploaded'))
    .catch(( ) => console.log('Failed to upload the file'))
  });
}
