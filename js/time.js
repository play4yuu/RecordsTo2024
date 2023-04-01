const time_colck = document.querySelector(".time_wrap__bottom");
const time_date = document.querySelector("#time_date");
const time_youbi = document.querySelector("#time_youbi");

function time() {
  const date = new Date();

  var hours = date.getHours();
  var minutes = date.getMinutes();
  var day = date.getDate();
  var month = date.getMonth();
  var youbi = date.getDay();

  list_youbi = ["일", "월", "화", "수", "목", "금", "토"];

  if (hours < 10) {
    hours = `0${hours}`;
  }

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  time_colck.innerText = `${hours} : ${minutes}`;
  time_date.innerText = `${month + 1}월 ${day}일`;
  time_youbi.innerText = `${list_youbi[youbi]}요일`;
}

time();
setInterval(time, 1000);
