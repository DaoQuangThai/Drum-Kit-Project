// document.querySelectorAll("button")[0].addEventListener("click", pickMeUP);
// document.querySelectorAll("button")[1].addEventListener("click", pickMeUP);
// document.querySelectorAll("button")[2].addEventListener("click", pickMeUP);
// document.querySelectorAll("button")[3].addEventListener("click", pickMeUP);
// document.querySelectorAll("button")[4].addEventListener("click", pickMeUP);
// document.querySelectorAll("button")[5].addEventListener("click", pickMeUP);
// document.querySelectorAll("button")[6].addEventListener("click", pickMeUP);

/**my way */
// function pickMeUP() {
//   alert("Pick me up!");
// }
// i = 0;
// while (i < 7) {
//   document.querySelectorAll("button")[i].addEventListener("click", pickMeUP);
//   i++;
// }

/* angela way */
// Dectecting button press
var numberOfButton = document.querySelectorAll(".drum").length;
for (i = 0; i < numberOfButton; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    makeSound(this.innerHTML);
  });
}

// Dectecting keyboard press
document.addEventListener("keypress", function(event) {
  makeSound(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();

    default:
      break;
  }
}

/* SOLID UNDERSTAND HOW addEventListener work behind the sence */
/*
function addEventListener(typeOfEvent, callback) {
  // dectecting event code
  var eventThatHappen = {
    eventType: "keypress",
    key: "k",
    timeOfDuaration: 2
  };

  if (eventThatHappen.eventType == typeOfEvent) {
    callback(eventThatHappen); // function(parameter) need 1 input, so when the objects callback function its also input a value
  } // *the crazy thing about the callback function that is: its not called by us, its called by the object that experience the click.
}

debugger;
addEventListener("keypress", function(event) {
  console.log("event");
});
// input2 is a callback function because it wait for the event finished happening
*/
