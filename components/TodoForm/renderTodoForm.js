// 1. Stwórz element <form> i nadaj mu id 'todo-form'
// 2. Stwórz element <inoput> i nadaj mu id 'todo-input'
// 3. Stwórz element <fieldset> i  nadaj mu id "todo-fieldset"
// 4. Stwórz element <legend> i nadaj mu textContent "Select a category"
// 5. Stwórz element <div> i nadaj mu id 'div-work'
// 6. Stwórz element <input>, nadaj mu type "radio", id "radio-work", name "category", value "work", checked "true"
// 7. Stwórz element <label>, nadaj mu atrybut for "radio-work", textContent "Work"
// 8. Do diva id 'div-work' (pkt 5) podpinacie radio inputa z pkt 6 i label z pkt 7
// 9. Stwórz element <div> i nadaj mu id 'div-life'
// 10. Stwórz element <input>, nadaj mu type "radio", id "radio-life", name "category", value "life"
// 11. Stwórz element <label>, nadaj mu atrybut for "radio-life", textContent "Life"
// 12. Do diva id 'div-life' (pkt 5) podpinacie radio inputa z pkt 10 i label z pkt 11
// Powtórz tyle razy żeby finalnie powstały 4 radio inputy z value Work, Life, Sport i Education
// 13. Stwórz element <button>, nadaj mu type "submit", klasę "todo-form-submit-button", textContent "Add todo"
// 14. Do fieldseta podpinacie elementy legend, divWork, divLife, divSport, divEducation
// 15. Do form podpinacie input (pkt 2), fieldset, submit button
// 16. Cały formularz zwracacie returnem
export default function () {
  // 1.
  const form = document.createElement("form");
  form.setAttribute("id", "todo-form");

  // 2.
  const todoInput = document.createElement("input");
  todoInput.setAttribute("id", "todo-input");

  // 3.
  const fieldset = document.createElement("fieldset");
  fieldset.setAttribute("id", "todo-fieldset");

  // 4.
  const legend = document.createElement("legend");
  legend.textContent = "Select a category";

  // 5.
  const divWork = document.createElement("div");
  divWork.setAttribute("id", "div-work");
  const radioWork = document.createElement("input");
  radioWork.setAttribute("type", "radio");
  radioWork.setAttribute("id", "radio-work");
  radioWork.setAttribute("name", "category");
  radioWork.setAttribute("value", "work");
  radioWork.setAttribute("checked", "true");
  const workLabel = document.createElement("label");
  workLabel.setAttribute("for", "radio-work");
  workLabel.textContent = "Work";
  divWork.appendChild(radioWork);
  divWork.appendChild(workLabel);

  const divLife = document.createElement("div");
  divLife.setAttribute("id", "div-life");
  const radioLife = document.createElement("input");
  radioLife.setAttribute("type", "radio");
  radioLife.setAttribute("id", "radio-life");
  radioLife.setAttribute("name", "category");
  radioLife.setAttribute("value", "life");
  const lifeLabel = document.createElement("label");
  lifeLabel.setAttribute("for", "radio-life");
  lifeLabel.textContent = "life";
  divLife.appendChild(radioLife);
  divLife.appendChild(lifeLabel);

  const divSport = document.createElement("div");
  divSport.setAttribute("id", "div-Sport");
  const radioSport = document.createElement("input");
  radioSport.setAttribute("type", "radio");
  radioSport.setAttribute("id", "radio-sport");
  radioSport.setAttribute("name", "category");
  radioSport.setAttribute("value", "sport");
  const sportLabel = document.createElement("label");
  sportLabel.setAttribute("for", "radio-sport");
  sportLabel.textContent = "Sport";
  divSport.appendChild(radioSport);
  divSport.appendChild(sportLabel);

  const divEducation = document.createElement("div");
  divEducation.setAttribute("id", "div-Education");
  const radioEducation = document.createElement("input");
  radioEducation.setAttribute("type", "radio");
  radioEducation.setAttribute("id", "radio-education");
  radioEducation.setAttribute("name", "category");
  radioEducation.setAttribute("value", "education");
  const educationLabel = document.createElement("label");
  educationLabel.setAttribute("for", "radio-education");
  educationLabel.textContent = "Education";
  divEducation.appendChild(radioEducation);
  divEducation.appendChild(educationLabel);

  // 13. Stwórz element <button>, nadaj mu type "submit", klasę "todo-form-submit-button", textContent "Add todo"
  const submitButton = document.createElement("button");
  submitButton.setAttribute("type", "submit");
  submitButton.setAttribute("class", "todo-form-submit-button");
  submitButton.textContent = "Add todo";

  // 14. Do fieldseta podpinacie elementy legend, divWork, divLife, divSport, divEducation
  fieldset.appendChild(legend);
  fieldset.appendChild(divWork);
  fieldset.appendChild(divLife);
  fieldset.appendChild(divSport);
  fieldset.appendChild(divEducation);

  // 15. Do form podpinacie input (pkt 2), fieldset, submit button
  form.appendChild(todoInput);
  form.appendChild(fieldset);
  form.appendChild(submitButton);

  // 16.
  return form;
}
