const form = document.querySelector("#tasks-form");
const newTask = document.querySelector("#item");
const ul = document.querySelector("ul");
const button = document.querySelector("button");

let itemsArray = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];

localStorage.setItem("items", JSON.stringify(itemsArray));

const data = JSON.parse(localStorage.getItem("items"));

const addTodo = () => {
  const li = document.createElement("li");
  li.textContent = newTask.value;
  ul.appendChild(li);
  li.addEventListener("click", function (e) {
    li.classList.add("complete");
  });
  button.addEventListener("click", function (e) {
    ul.removeChild(li);
  });
};

form.addEventListener("submit", function (e) {
  e.preventDefault();
  itemsArray.push(newTask.value);
  localStorage.setItem("items", JSON.stringify(itemsArray));
  addTodo();
  newTask.value = "";
});

data.forEach((item) => {
  addTodo(item);
});
