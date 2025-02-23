const btn = document.getElementById("add_todo_list_btn");

if (localStorage.getItem("count_todo") === null) {
  localStorage.setItem("count_todo", 0);
}

count_todo = localStorage.getItem("count_todo");

function submit(e) {
  e.preventDefault();

  var todo_text_input = document.getElementById("add_todo_list_input");
  var todo_text = todo_text_input.value;

  console.log(todo_text);

  var todo_list = document.querySelector(".todo_list");

  if (todo_text === "") {
    return;
  }

  todo_list.innerHTML += `
    <li id="todo_${count_todo}"><label><input type="checkbox" /><span>${todo_text}</span><button id="todo_btn_${count_todo}"></button></label></li>
    `;

  todo_text_input.value = "";
  count_todo = count_todo + 1;
  localStorage.setItem("count_todo", count_todo);
}

btn.addEventListener("click", submit);

