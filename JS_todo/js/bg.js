var sel_icon = 4;
const background_bg = document.querySelector("body");
const npc = document.querySelector("#npc1");

const icon_maple_island = document.querySelector("#icon_maple");
const icon_elinia = document.querySelector("#icon_elinia");
const icon_erev = document.querySelector("#icon_erev");
const icon_timetemple = document.querySelector("#icon_timetemple");
const icon_arcana = document.querySelector("#icon_arcana");
const icon_mirrorday = document.querySelector("#icon_mirrorday");
const icon_happyv = document.querySelector("#icon_happyv");

const npc_list = [
  "./resource/npc/mushroom_01.png",
  "./resource/npc/mushroom_02.png",
  "./resource/npc/slime_01.png",
  "./resource/npc/slime_02.png",
  "./resource/npc/npc_vil_01.png",
  "./resource/npc/npc_vil_02.png",
  "./resource/npc/pinkbean_01.png",
  "./resource/npc/pinkbean_02.png",
  "./resource/npc/pinkbean_03.png",
  "./resource/npc/npc_emp_01.png",
  "./resource/npc/npc_emp_02.png",
  "./resource/npc/rock_soul_01.png",
  "./resource/npc/shika_01.png",
  "./resource/npc/shika_02.png",
  "./resource/npc/rock_soul_02.png",
  "./resource/npc/rock_soul_03.png",
];

const bg_list = [
  {
    name: "Maple island",
    bg: background_atsume[4],
    npc: npc_list[0],
    npc_over: npc_list[0],
    npc_click: npc_list[1],
  },

  {
    name: "Elinia",
    bg: background_atsume[3],
    npc: npc_list[2],
    npc_over: npc_list[2],
    npc_click: npc_list[3],
  },

  {
    name: "Erev",
    bg: background_atsume[8],
    npc: npc_list[9],
    npc_over: npc_list[9],
    npc_click: npc_list[10],
  },

  {
    name: "Time temple",
    bg: background_atsume[7],
    npc: npc_list[6],
    npc_over: npc_list[7],
    npc_click: npc_list[8],
  },

  {
    name: "Arcana",
    bg: background_atsume[0],
    npc: npc_list[11],
    npc_over: npc_list[11],
    npc_click: npc_list[15],
  },

  {
    name: "Mirror day",
    bg: background_atsume[5],
    npc: npc_list[4],
    npc_over: npc_list[4],
    npc_click: npc_list[5],
  },

  {
    name: "Happy village",
    bg: background_atsume[2],
    npc: npc_list[12],
    npc_over: npc_list[12],
    npc_click: npc_list[13],
  },
];

npc.addEventListener("click", function () {
  npc.style.backgroundImage = `url(${bg_list[sel_icon].npc_click}`;

  setTimeout(function () {
    npc.style.backgroundImage = "url(" + bg_list[sel_icon].npc + ")";
  }, 1500);
});

function mouseover() {
  if (sel_icon == 3) {
    npc.style.backgroundImage = "url(" + bg_list[sel_icon].npc_over + ")";
  }
}

function mouseout() {
  if (sel_icon == 3) {
    npc.style.backgroundImage = "url(" + bg_list[sel_icon].npc + ")";
  }
}

icon_maple_island.addEventListener("click", function () {
  sel_icon = 0;
  change_bg();
});

icon_elinia.addEventListener("click", function () {
  sel_icon = 1;
  change_bg();
});

icon_erev.addEventListener("click", function () {
  sel_icon = 2;
  change_bg();
});

icon_timetemple.addEventListener("click", function () {
  sel_icon = 3;
  change_bg();
});

icon_arcana.addEventListener("click", function () {
  sel_icon = 4;
  change_bg();
});

icon_mirrorday.addEventListener("click", function () {
  sel_icon = 5;
  change_bg();
});

icon_happyv.addEventListener("click", function () {
  sel_icon = 6;
  change_bg();
});

function change_bg() {
  background.style.backgroundImage = `url(${bg_list[sel_icon].bg})`;
  npc.style.backgroundImage = "url(" + bg_list[sel_icon].npc + ")";
  console.log(bg_list[sel_icon].name);
}
