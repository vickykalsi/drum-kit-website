var buttons = document.getElementsByTagName("button");
buttons = Array.from(buttons);

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    makeSound(button.className);
  })
})

document.addEventListener("keydown", function (e) {
  let btn = document.getElementsByClassName(e.key.toLowerCase())[0];
  makeSound(e.key.toLowerCase());
  btn.previousElementSibling.classList.add("clicked");
  setTimeout(function () {
    btn.previousElementSibling.classList.remove("clicked");
  }, 300);
})

function makeSound(ch) {
  let audio;
  switch (ch) {
    case 'q': audio = new Audio("./sounds/tom-1.mp3");
      audio.play();
      break;
    case 'w': audio = new Audio("./sounds/tom-2.mp3");
      audio.play();
      break;
    case 'e': audio = new Audio("./sounds/tom-3.mp3");
      audio.play();
      break;
    case 'r': audio = new Audio("./sounds/tom-4.mp3");
      audio.play();
      break;
    case 't': audio = new Audio("./sounds/snare.mp3");
      audio.play();
      break;
    case 'y': audio = new Audio("./sounds/crash.mp3");
      audio.play();
      break;
    case 'u': audio = new Audio("./sounds/kick-bass.mp3");
      audio.play();
      break;
    default: console.log("only press those keys which are mentioned...");
      break;
  }
  let btn=document.getElementsByClassName(ch)[0];
  btn.style.opacity="0.5";
  setTimeout(function(){
    btn.style.opacity="1";
  },300);
}