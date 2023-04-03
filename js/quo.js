quo_list = [
  {
    quote:
      "잘 들어라. 애초에 기대를 하니까 배신을 당하는 거다. 처음부터 아무것도 기대하지 않으면, 배신당할 일도 없지.",
    author: "트레이너",
    from: "클로저스",
  },
  {
    quote:
      "천국을 둘로 나누지 말아주세요. 로봇과 인간, 그 둘로 나누지 말아주세요..",
    author: "호시노 유메미",
    from: "플라네타리안",
  },
  {
    quote: "어이쿠, 손이 미끄러졌네",
    author: "퍼거스",
    from: "마비노기",
  },
  {
    quote: "들리나요...?",
    author: "모리안",
  },
  {
    quote: "궁극의 빛은 궁극의 어둠 속에서만 찾을 수 있다",
    author: "검은마법사",
    from: "메이플스토리",
  },
  {
    quote: "단 한번 웃을수 있다면, 몇 번이라도 울어도 좋아.",
    author: "몽키 D 루피",
    from: "원피스",
  },
  {
    quote: "나를 바보라고 부를수 있는건 나 자신뿐이다.",
    author: "롤로노아 조로",
    from: "원피스",
  },
  {
    quote:
      "우리는 1분 전의 우리보다 진화한다.한바퀴 돌리면 아주 조금이지만 앞으로 나아가지. 그것이 드릴이다!!",
    author: "시몬",
    from: "천원돌파 그렌라간",
  },

  {
    quote:
      "성장중인 여성은 곧 소녀... 그렇다면 마녀가 될 너희들은, 마법소녀라고 불러야 하지 않겠어?",
    author: "큐베",
    from: "마법소녀 마도카 마기카",
  },

  {
    quote:
      "내 인생은 그렇게 하찮은 삶이 아니야! 가족이 주는 행복이 얼마나 큰지 너한테 알려주고 싶을 정도다!",
    author: "노하라 히로시",
    from: "짱구는 못말려",
  },

  {
    quote:
      "얘야, 인생이란 원래 자기 생각대로 되지 않는 법이란다. 그래서 인생이 재밌는 거 아니겠어?",
    author: "마카오&조마",
    from: "짱구는 못말려",
  },

  {
    quote: "나와 계약해서 마법소녀가 되어줘!",
    author: "큐베",
    from: "마법소녀 마도카 마기카",
  },

  {
    quote:
      "진실 같은 건 알고 싶지 않았을텐데, 그래도 추구하지 않곤 못 견딘다니... 정말 인간의 호기심이란 건 불합리하네.",
    author: "큐베",
    from: "마법소녀 마도카 마기카",
  },

  {
    quote: "부딪혀야만 전해지는 것도 있어. 예를 들면, 내가 얼마나 진지한지.",
    author: "유우키",
    from: "소드아트온라인",
  },

  {
    quote: "하면 어떻게든 된다",
    author: "유우키 유우나",
    from: "유유유 시리즈",
  },

  {
    quote:
      "역사는 승자에 의해 쓰여진다. 역사는 거짓으로 가득차 있다. 놈이 살아남고, 우리가 죽는다면, 놈이 진실이 역사로 기록되고, 우리의 진실을 사라진다",
    author: "프라이스",
    from: "콜 오브 듀티",
  },

  {
    quote: "일어나서 걸어. 앞으로 나가. 너에게는 훌륭한 다리가 붙어 있잖아.",
    author: "에드워드 엘릭",
    from: "강철의 연금술사",
  },
];

quo_text = document.querySelector("#quo_text");
quo_author = document.querySelector("#quo_au");

function quo_random() {
  quo_author.style.opacity = 1;
  quo_text.style.opacity = 1;

  var quo_random_num = Math.floor(Math.random() * quo_list.length);
  // console.log(quo_random_num);

  //   console.log(quo_list[quo_random_num].quote);
  //   console.log(quo_list[quo_random_num].author);

  quo_text.innerText = quo_list[quo_random_num].quote;
  quo_author.innerHTML = `<span>- ${quo_list[quo_random_num].author} </span> <span class="sm"> ${quo_list[quo_random_num].from}</span>`;

  setTimeout(function () {
    quo_author.style.opacity = 0;
    quo_author.style.transition = "all 1s ease";
    quo_text.style.opacity = 0;
    quo_text.style.transition = "all 1s ease";
  }, 20000);
}

quo_random();
setInterval(quo_random, 21000);
