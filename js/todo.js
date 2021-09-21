const toDoform = document.querySelector("#todo-form")
const toDoInput = toDoform.querySelector("input")
const toDoList = document.querySelector("#todo-list")

function patinToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  li.appendChild(span);
  span.innerText = newTodo;
  toDoList.appendChild(li)
}

function handleToDoSubmit(event) {
  event.preventDefault()
  const newTodo = toDoInput.value;

  toDoInput.value = "";

  patinToDo(newTodo)
}


toDoform.addEventListener("submit", handleToDoSubmit)
