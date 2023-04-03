const todoForm = document.querySelector("#add_todo_list_wrap");
const todoList = document.querySelector(".todo_list");
const todo_input_text = document.querySelector("#add_todo_list_input");
const todo_input_btn = document.querySelector("#add_todo_list_btn");
// const del_button = document.querySelector(button);

const TODO_KEY = "todos";
let todos = [];

function saveTodos() {
  localStorage.setItem(TODO_KEY, JSON.stringify(todos));
}

function delTodo(event) {
  li = event.target.parentElement.parentElement;
  li.remove();

  todos = todos.filter((todo) => todo.id !== parseInt(li.id));

  console.log(todos);
  saveTodos();
}

function PaintTodo(newTodo) {
  // 비어있으면 추가안됨
  if (newTodo === "") {
    return;
  }
  const li = document.createElement("li");
  li.id = newTodo.id;
  const label = document.createElement("label");
  const input_chkbox = document.createElement("input");
  input_chkbox.setAttribute("type", "checkbox");
  const span = document.createElement("span");
  const btn = document.createElement("button");

  btn.addEventListener("click", delTodo);

  label.appendChild(input_chkbox);
  label.appendChild(span);
  label.appendChild(btn);
  li.appendChild(label);

  span.innerHTML = newTodo.text;
  todoList.appendChild(li);
  saveTodos();
}

function handle_todo_submit(e) {
  e.preventDefault();

  if (todoList.children.length > 6) {
    const al_right = document.querySelector(".al_right");
    al_right.classList.remove("hidden");
    setTimeout(function () {
      al_right.classList.add("hidden");
    }, 1000);

    return;
  }

  const newTodo = todo_input_text.value;
  todo_input_text.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  //   console.log(todos);
  console.log("❤", newTodoObj);
  //   console.log(newTodoObj.text);

  todos.push(newTodoObj);
  PaintTodo(newTodoObj);
  saveTodos();
}

todo_input_btn.addEventListener("click", handle_todo_submit);

const saveTOdos = localStorage.getItem(TODO_KEY);
if (saveTOdos !== null) {
  console.log("불러오기");
  const parsedTodos = JSON.parse(saveTOdos);
  //   parsedTodos.forEach((todo) => PaintTodo(todo));
  parsedTodos.forEach(PaintTodo);
  console.log(todos, parsedTodos);
  todos = parsedTodos;
  localStorage.setItem(TODO_KEY, JSON.stringify(todos));
}
