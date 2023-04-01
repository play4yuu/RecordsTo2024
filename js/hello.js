console.log("hello.js 시작");

// 배경--------------------------------------------------------------
const background = document.querySelector("body");
const background_atsume = [
  "./resource/background/forest.png",
  "./resource/background/coke.png",
  "./resource/background/happy_v.png",
  "./resource/background/elinia.png",
  "./resource/background/maple_island.png",
  "./resource/background/mirror_day.png",
  "./resource/background/mirror_night.png",
  "./resource/background/time_temple.png",
  "./resource/background/erev.png",
  "./resource/background/orbis.png",
];

var random_num_bg = Math.floor(Math.random() * background_atsume.length);

function image() {
  background.style.backgroundImage = `url(${background_atsume[random_num_bg]})`;
  console.log("image");
}

image();

// --------------------------------------------------------------------

const input_text = document.querySelector(
  "#body_wrap > div > form > label > input[type=text]:nth-child(1)"
);
const input_btn = document.querySelector(
  "#body_wrap > div > form > label > input[type=submit]:nth-child(2)"
);

const hello_wrap = document.querySelector(".hello");
hello_wrap.style.opacity = 1;
const main_wrap = document.querySelector(".main_wrap");
const bubble = document.querySelector(".bubble");
const bubble_text = document.querySelector("#bubble_text");

input_btn.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("click");

  if (input_text.value == "") {
    alert("이름을 입력해주세요.");
    return;
  }

  const input_text_value = input_text.value;
  localStorage.setItem("name", input_text_value);

  hello_wrap.style.opacity = 0;
  hello_wrap.style.transition = "all 1.8s ease";

  setTimeout(function () {
    hello_wrap.style.display = "none";
    main_wrap.classList.remove("hidden");

    bubble.classList.remove("hidden");
    bubble_text.innerHTML = `<span class="bubble_bold">${input_text_value}</span>용사님, 안녕하세요.`;

    setTimeout(function () {
      bubble.classList.add("hidden");
      bubble.style.transition = "all 1.5s ease";
    }, 3000);
  }, 1000);
});
