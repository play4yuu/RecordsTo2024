function getTime() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  time_genjitsu.innerText = `${hours}:${minutes}:${seconds}`;
}
getTime();
setInterval(getTime, 1000);

function setRedBack_5s() {
  document.body.style.backgroundColor = "red";
  setTimeout(function () {
    document.body.style.backgroundColor = "white";
  }, 5000);
}
