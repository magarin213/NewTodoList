const toDoform = document.querySelector("#todo-form")
const toDoInput = toDoform.querySelector("input")
const toDoList = document.querySelector("#todo-list")


function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove()
}

function patinToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button")
  button.innerText = "❌"
  button.addEventListener("click", deleteTodo)
  li.appendChild(span);
  li.appendChild(button)

  toDoList.appendChild(li)
}

function handleToDoSubmit(event) {
  event.preventDefault()
  const newTodo = toDoInput.value;

  toDoInput.value = "";

  patinToDo(newTodo)
}


toDoform.addEventListener("submit", handleToDoSubmit)
