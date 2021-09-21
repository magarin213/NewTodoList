const toDoform = document.querySelector("#todo-form")
const toDoInput = toDoform.querySelector("input")
const toDoList = document.querySelector("#todo-list")

function handleToDoSubmit(event) {
  event.preventDefault()
  const newTodo = toDoInput.value;
  console.log(toDoInput.value)
  toDoInput.value = "";
  console.log(newTodo, "인풋",toDoInput.value)
}


toDoform.addEventListener("submit", handleToDoSubmit)
