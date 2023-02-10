$(document).ready(function () {
    let WIDTH = canvas.width;
    let HEIGHT = canvas.height;
  
    var backplate_img = document.getElementById("backplate");
  
    function drawRatio(
      ctx,
      imgObj,
      target_width,
      target_height,
      start_x,
      start_y
    ) {
      w = imgObj.width;
      h = imgObj.height;
  
      target_ratio = target_width / target_height;
      img_ratio = w / h;
  
      if (img_ratio > target_ratio) {
        w = h * (target_width / target_height);
      } else {
        h = w * (target_height / target_width);
      }
  
      ctx.drawImage(
        imgObj,
        0,
        0,
        w,
        h,
        start_x,
        start_y,
        target_width,
        target_height
      );
    }
  
    function radioDraw(ctx, radio, x, y) {
      var x_offset = 0;
      var highlight_color = $("#highlight").val();
      for (
        var now_index = 0, length = radio.length;
        now_index < length;
        now_index++
      ) {
        var now_value = radio[now_index].value;
        if (radio[now_index].checked) {
          ctx.fillStyle = highlight_color;
        } else {
          ctx.fillStyle = "rgb(127, 127, 127)";
        }
        ctx.fillText(now_value, x + x_offset, y);
        x_offset += now_value.length * 13 + 11;
      }
    }
  
    function selectDraw(ctx, label, target_name, x, y) {
      var x_offset = 0;
      var highlight_color = $("#highlight").val();
      for (var now_index in label) {
        var now_name = label[now_index];
        if (target_name == now_name) {
          ctx.fillStyle = highlight_color;
        } else {
          ctx.fillStyle = "rgb(127, 127, 127)";
        }
        ctx.fillText(now_name, x + x_offset, y);
        x_offset += now_name.length * 13 + 11;
      }
    }
  
    function boolDraw(ctx, label, baseString, x, y) {
      var x_offset = 0;
      var highlight_color = $("#highlight").val();
      for (var now_index in label) {
        var now_name = label[now_index];
        var target_id = "#" + baseString + "_" + now_index;
        if ($(target_id).is(":checked")) {
          ctx.fillStyle = highlight_color;
        } else {
          ctx.fillStyle = "rgb(127, 127, 127)";
        }
        ctx.fillText(now_name, x + x_offset, y);
        x_offset += now_name.length * 13 + 11;
      }
    }
  
    function draw() {
      // 이미지
      var background_img = document.getElementById("background");
  
      // 변수들
      var popup_x = $("#popup_x").val() * 1;
      var popup_y = $("#popup_y").val() * 1;
      var highlight_color = $("#highlight").val();
  
      var server = $("#server").val();
      var race = $("#race").val();
      var age = $("#age").val();
  
      var talent = $("#talent").val();
      var chara_name = $("#chara_name").val();
      var guild = $("#guild").val();
      var level = $("#level").val();
      var lover = $("#lover").val();
      var channel_num = $("#channel_num").val();
      var color_max = $("#color_max").val();
  
      var etc_talk = $("#etc_talk").val();
  
      // radio variables
      var playtime_regular = document.getElementsByName("playtime_regular");
      var channel_fix = document.getElementsByName("channel_fix");
      var own_color_exists = document.getElementsByName("own_color_exists");
      var bomb = document.getElementsByName("bomb");
  
      // 이미지 생성
      var canvas = document.getElementById("canvas");
      var ctx = canvas.getContext("2d");
  
      drawRatio(ctx, background_img, WIDTH, HEIGHT, 0, 0);
      ctx.drawImage(
        backplate_img,
        popup_x,
        popup_y,
        backplate_img.width,
        backplate_img.height
      );
  
      // 내용물
      ctx.font = "15px NanumGothic";
      ctx.fillStyle = "rgb(255, 255, 255)";
  
      ctx.fillText("주시면 팔로우하러 갑니다!", popup_x + 303, popup_y + 90);
      ctx.fillText(talent, popup_x + 420, popup_y + 143);
      ctx.fillText(guild, popup_x + 420, popup_y + 177);
      ctx.fillText(level, popup_x + 420, popup_y + 210);
      ctx.fillText("평일", popup_x + 160, popup_y + 324);
      ctx.fillText("주말", popup_x + 160, popup_y + 348);
      ctx.fillText("휴일", popup_x + 160, popup_y + 372);
      ctx.fillText(lover, popup_x + 160, popup_y + 661);
  
      if (channel_fix[0].checked) {
        ctx.fillStyle = highlight_color;
        ctx.fillText(channel_num + " 채널", popup_x + 160, popup_y + 480);
        ctx.fillStyle = "rgb(255, 255, 255)";
      }
  
      // select box
      var follow_labels = ["멘션", "알티", "마음", "선팔로우"];
      boolDraw(ctx, follow_labels, "follow", popup_x + 130, popup_y + 90);
      var time_labels = ["새벽", "오전", "오후", "저녁", "심야"];
      boolDraw(ctx, time_labels, "weekday", popup_x + 210, popup_y + 324);
      boolDraw(ctx, time_labels, "weekend", popup_x + 210, popup_y + 348);
      boolDraw(ctx, time_labels, "holiday", popup_x + 210, popup_y + 372);
      var play_type_1 = [
        "퀘스트",
        "사냥",
        "수련",
        "수집",
        "잠수",
        "탐험",
        "미니게임",
        "스샷",
        "수다",
      ];
      var play_type_2 = ["의장", "기타"];
      boolDraw(ctx, play_type_1, "playType1", popup_x + 160, popup_y + 400);
      boolDraw(ctx, play_type_2, "playType2", popup_x + 160, popup_y + 424);
      var pers_1 = [
        "HL",
        "BL",
        "GL",
        "드림",
        "리버시블",
        "논리버시블",
        "논커플링",
      ];
      var pers_2 = ["올라운더", "기타"];
      boolDraw(ctx, pers_1, "personality1", popup_x + 160, popup_y + 694);
      boolDraw(ctx, pers_2, "personality2", popup_x + 160, popup_y + 714);
      var tw_pers_1 = [
        "알티",
        "마음요정",
        "타장르언급",
        "탐라대화",
        "자캐덕질",
        "앤캐앓이",
      ];
      var tw_pers_2 = ["일상트", "욕트", "폭트", "섹트", "우울트"];
      var tw_pers_3 = [
        "글",
        "그림",
        "썰",
        "코스프레",
        "녹음",
        "제작",
        "소비",
        "기타",
      ];
      boolDraw(ctx, tw_pers_1, "tw_personality1", popup_x + 160, popup_y + 752);
      boolDraw(ctx, tw_pers_2, "tw_personality2", popup_x + 160, popup_y + 772);
      boolDraw(ctx, tw_pers_3, "tw_personality3", popup_x + 160, popup_y + 792);
  
      // drop box
      var server_labels = ["류트", "만돌린", "하프", "울프"];
      selectDraw(ctx, server_labels, server, popup_x + 130, popup_y + 143);
      var race_labels = ["인간", "엘프", "자이언트"];
      selectDraw(ctx, race_labels, race, popup_x + 130, popup_y + 209);
      var age_labels = ["미성년자", "성인", "비공개"];
      selectDraw(ctx, age_labels, age, popup_x + 160, popup_y + 265);
  
      // radio box
      radioDraw(ctx, playtime_regular, popup_x + 160, popup_y + 300);
      radioDraw(ctx, channel_fix, popup_x + 160, popup_y + 457);
      radioDraw(ctx, own_color_exists, popup_x + 160, popup_y + 527);
      radioDraw(ctx, bomb, popup_x + 160, popup_y + 830);
  
      // textarea
      ctx.fillStyle = "rgb(255, 255, 255)";
      const etc_talks = etc_talk.split("\n");
      for (var etc_index in etc_talks) {
        if (etc_index > 4) {
          break;
        }
        ctx.fillText(
          etc_talks[etc_index],
          popup_x + 160,
          popup_y + 862 + 20 * etc_index
        );
      }
  
      // color
      // color set
      color_list = [];
      for (now_index = 1; now_index <= 4; now_index++) {
        r = parseInt($("#color" + now_index + "_r").val());
        g = parseInt($("#color" + now_index + "_g").val());
        b = parseInt($("#color" + now_index + "_b").val());
        color_name = $("#color" + now_index + "_name").val();
        if (r < 0) {
          r = 0;
        }
        if (r > 255) {
          r = 255;
        }
        if (g < 0) {
          g = 0;
        }
        if (g > 255) {
          g = 255;
        }
        if (b < 0) {
          r = 0;
        }
        if (b > 255) {
          b = 255;
        }
        var color_obj = new Object();
        color_obj.r = r;
        color_obj.g = g;
        color_obj.b = b;
        color_obj.name = color_name;
        color_list.push(color_obj);
      }
      // color_preview
      for (now_index = 0; now_index < 4; now_index++) {
        color_obj = color_list[now_index];
        select_color =
          "rgb(" + color_obj.r + "," + color_obj.g + "," + color_obj.b + ")";
        preview_box = document.getElementById(
          "color" + (now_index + 1) + "_preview"
        );
        preview_box.style.color = select_color;
      }
      if (color_max > 4) {
        color_max = 4;
      }
      if (color_max < 1) {
        color_max = 0;
      }
      for (now_index = 0; now_index < color_max; now_index++) {
        x_ind = now_index;
        if (now_index > 1) {
          x_ind -= 2;
        }
        y_ind = 0;
        if (now_index > 1) {
          y_ind = 1;
        }
        color_obj = color_list[now_index];
        select_color =
          "rgb(" + color_obj.r + "," + color_obj.g + "," + color_obj.b + ")";
        select_color_show = color_obj.r + "." + color_obj.g + "." + color_obj.b;
        ctx.fillStyle = select_color;
        roundedRect(ctx, popup_x + 165 * (x_ind + 1), popup_y + 535 + 60 * y_ind);
        ctx.fillStyle = "#ffffff";
        if (color_obj.name != "") {
          ctx.fillText(
            " · " + color_obj.name,
            popup_x + 213 + 165 * x_ind,
            popup_y + 553 + 60 * y_ind
          );
        }
        ctx.fillText(
          select_color_show,
          popup_x + 225 + 165 * x_ind,
          popup_y + 573 + 60 * y_ind
        );
      }
  
      // name
      ctx.font = "20px NanumGothic";
      ctx.fillText(chara_name, popup_x + 130, popup_y + 177);
      ctx.font = "15px NanumGothic";
    }
  
    function download(canvas, prefix) {
      var link = document.createElement("a");
      link.download = prefix + Date.now() + ".png";
      link.href = document.getElementById("canvas").toDataURL();
      link.click();
    }
  
    function readImage(input, loadImageId) {
      if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const loadImage = document.getElementById(loadImageId);
          loadImage.src = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
      }
    }
  
    function roundedRect(ctx, x, y) {
      radius = 5;
      width = 50;
      height = 50;
      ctx.beginPath();
      ctx.moveTo(x, y + radius);
      ctx.lineTo(x, y + height - radius);
      ctx.arcTo(x, y + height, x + radius, y + height, radius);
      ctx.lineTo(x + width - radius, y + height);
      ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
      ctx.lineTo(x + width, y + radius);
      ctx.arcTo(x + width, y, x + width - radius, y, radius);
      ctx.lineTo(x + radius, y);
      ctx.arcTo(x, y, x, y + radius, radius);
      ctx.fill();
    }
  
    const user_background_img = document.getElementById("background_img");
    user_background_img.addEventListener("change", (e) => {
      readImage(e.target, "background");
    });
  
    $("#apply").click(function () {
      draw();
    });
  
    $("#download").click(function () {
      download(document.getElementById("canvas"), "mabi_npc_");
    });
  
    $("input").change(function () {
      setTimeout(function () {
        draw();
      }, 100);
    });
    $("input[type=checkbox], select").change(draw);
    $("input[type=select], change").change(draw);
    setTimeout(function () {
      draw();
    }, 1000);
  });
  