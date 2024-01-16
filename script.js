//console.log("ccccc");
var scare = document.getElementsByClassName("scare")[0];
var input = document.getElementsByClassName("input")[0];
var button = document.getElementsByClassName("button")[0];
var output = document.getElementsByClassName("output")[0];
var gameScore = document.getElementsByClassName("score")[0];

let ranNum = Math.floor(Math.random() * 100);
ranNum = Number.parseInt(ranNum);
console.log(ranNum);
let score = 100;

button.onclick = function () {
  check();
};

function check() {
  let num = input.value;
  if (num != ranNum) {
    score -= 1;
  }

  if (num == ranNum) {
    output.innerHTML = "You won the game";

    output.classList.add("real");
    scare.classList.add("won");

    scare.innerHTML = "& Your score is " + score;
  } else if (num > ranNum) {
    output.innerHTML = "it is greater than the number & your score is " + score;
    output.style.color = "red";
  } else if (num < ranNum) {
    output.innerHTML = "it is smaller than the number & your score is" + score;
    output.style.color = "red";
  }
  gameScore.innerHTML = "Your score is " + score;
}
document.onkeyup = function (e) {
  console.log("code", e.keyCode);
};
