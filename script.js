function playSound(sound) {
  let drum, audio;
  switch (sound) {
    case 'q': drum = document.getElementsByClassName("button-1")[0];
      audio = new Audio("./sounds/tom-1.mp3");
      audio.play();
      break;
    case 'w': drum = document.getElementsByClassName("button-2")[0];
      audio = new Audio("./sounds/tom-2.mp3");
      audio.play();
      break;
    case 'e': drum = document.getElementsByClassName("button-3")[0];
      audio = new Audio("./sounds/tom-3.mp3");
      audio.play();
      break;
    case 'r': drum = document.getElementsByClassName("button-4")[0];
      audio = new Audio("./sounds/tom-4.mp3");
      audio.play();
      break;
    case 't': drum = document.getElementsByClassName("button-5")[0];
      audio = new Audio("./sounds/snare.mp3");
      audio.play();
      break;
    case 'y': drum = document.getElementsByClassName("button-6")[0];
      audio = new Audio("./sounds/crash.mp3");
      audio.play();
      break;
    case 'u': drum = document.getElementsByClassName("button-7")[0];
      audio = new Audio("./sounds/kick-bass.mp3");
      audio.play();
      break;
    default: console.log("only mentioned keys are valid");
  }
}

document.addEventListener("keydown", e => {
  playSound(e.key);
  document.getElementsByClassName(e.key)[0].classList.add("clicked");
  setTimeout(() => {
    document.getElementsByClassName(e.key)[0].classList.remove("clicked");
  }, 500)
})

let buttons = document.getElementsByTagName("button");
buttons = Array.from(buttons);
buttons.forEach(button => {
  button.addEventListener("mousedown", () => {
    playSound(button.className);
    console.log(button.className);
    document.getElementsByClassName(button.className)[0].classList.add("clicked");
    setTimeout(() => {
      document.getElementsByClassName(button.className)[0].classList.remove("clicked");
    }, 500)
  })
})