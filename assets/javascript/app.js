var number = 30;

var intervalId;

// set up reload event to restart timer

function run() {
  intervalId = setInterval(decrement, 1000);
}

function decrement() {

  number--;

$("#show-number").html("<h1>" + number + "</h2>");

if (number === 0) {

  stop();

  alert("Times Up!")
  }
}

function stop(){
  clearInterval(intervalId)
}

// run();
