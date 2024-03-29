let num = 1;
let q = {
  1: { "title": "문제 1번", "type": "EI", "A": "E", "B": "I" },
  2: { "title": "문제 2번", "type": "EI", "A": "E", "B": "I" },
  3: { "title": "문제 3번", "type": "EI", "A": "E", "B": "I" },
  4: { "title": "문제 4번", "type": "SN", "A": "S", "B": "N" },
  5: { "title": "문제 5번", "type": "SN", "A": "S", "B": "N" },
  6: { "title": "문제 6번", "type": "SN", "A": "S", "B": "N" },
  7: { "title": "문제 7번", "type": "TF", "A": "T", "B": "F" },
  8: { "title": "문제 8번", "type": "TF", "A": "T", "B": "F" },
  9: { "title": "문제 9번", "type": "TF", "A": "T", "B": "F" },
  10: { "title": "문제 10번", "type": "JP", "A": "J", "B": "P" },
  11: { "title": "문제 11번", "type": "JP", "A": "J", "B": "P" },
  12: { "title": "문제 12번", "type": "JP", "A": "J", "B": "P" }
}

let result = {
  "ISTJ": { "animal": "하마", "explain": "하마 설명", "img": "lion.jpg" },
  "ISFJ": { "animal": "부엉이", "explain": "부엉이 설명", "img": "lion.jpg" },
  "INFJ": { "animal": "물소", "explain": "물소 설명", "img": "lion.jpg" },
  "INTJ": { "animal": "치타", "explain": "치타 설명", "img": "lion.jpg" },
  "ISTP": { "animal": "나무늘보", "explain": "나무늘보 설명", "img": "lion.jpg" },
  "ISFP": { "animal": "거북이", "explain": "거북이 설명", "img": "lion.jpg" },
  "INFP": { "animal": "코끼리", "explain": "코끼리 설명", "img": "lion.jpg" },
  "INTP": { "animal": "침팬지", "explain": "침팬지 설명", "img": "lion.jpg" },
  "ESTP": { "animal": "악어", "explain": "악어 설명", "img": "lion.jpg" },
  "ESFP": { "animal": "미어캣", "explain": "미어캣 설명", "img": "lion.jpg" },
  "ENFP": { "animal": "멋쟁이 사자", "explain": "멋쟁이 사자 설명", "img": "lion.jpg" },
  "ENTP": { "animal": "태양새", "explain": "태양새 설명", "img": "lion.jpg" },
  "ESTJ": { "animal": "기린", "explain": "기린 설명", "img": "lion.jpg" },
  "ESFJ": { "animal": "고릴라", "explain": "고릴라 설명", "img": "lion.jpg" },
  "ENFJ": { "animal": "카피바라", "explain": "카피바라 설명", "img": "lion.jpg" },
  "ENTJ": { "animal": "호랑이", "explain": "호랑이 설명", "img": "lion.jpg" }
}

function start() {
  $(".start").hide();
  $(".question").show();
  next();
}

$("#A").click(function () {
  let type = $("#type").val();
  let preValue = $("#" + type).val();
  $("#" + type).val(parseInt(preValue) + 1);
  next();
});

$("#B").click(function () {
  next();
});

function next() {
  if (num === 13) {
    $(".question").hide();
    $(".result").show();
    let mbti = "";
    ($("#EI").val() < 2) ? mbti += "I" : mbti += "E";
    ($("#SN").val() < 2) ? mbti += "N" : mbti += "S";
    ($("#TF").val() < 2) ? mbti += "F" : mbti += "T";
    ($("#JP").val() < 2) ? mbti += "P" : mbti += "J";
    $("#img").attr("src", result[mbti]["img"]);
    $("#animal").html(result[mbti]["animal"]);
    $("#explain").html(result[mbti]["explain"]);
  } else {
    $(".progress-bar").attr('style', 'width: calc(100/12*' + num + '%)');
    $("#title").html(q[num]["title"]);
    $("#type").val(q[num]["type"]);
    $("#A").html(q[num]["A"]);
    $("#B").html(q[num]["B"]);
    num++;
  }
}