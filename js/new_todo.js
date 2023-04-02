const todoForm = document.querySelector("#add_todo_list_wrap");
const todoList = document.querySelector(".todo_list");
const todo_input_text = document.querySelector("#add_todo_list_input");
const todo_input_btn = document.querySelector("#add_todo_list_btn");
// const del_button = document.querySelector(button);

const todos = [];
function saveTodos() {
  localStorage.setItem("todos", todos);
}

function PaintTodo(newTodo) {
  // 비어있으면 추가안됨
  if (newTodo === "") {
    return;
  }
  const li = document.createElement("li");
  const li_date = new Date();
  const li_id = li_date.getTime();
  li.setAttribute("id", li_id);
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

  span.innerHTML = newTodo;

  //   console.log(li);
  todoList.appendChild(li);
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
  PaintTodo(newTodo);
  todo_input_text.value = "";
  todos.push(newTodo);

  saveTodos();
}

todo_input_btn.addEventListener("click", handle_todo_submit);

// 삭제 관련

function delTodo(event) {
  li = event.target.parentElement.parentElement;
  li.remove();
}
