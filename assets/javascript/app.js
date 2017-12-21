
// TIMER------------
var number = 30;
var intervalId;

function run() {
  intervalId = setInterval(decrement, 1000);
}
function decrement() {
  number--;
$("#show-number").html("<h1>" + number + "</h1>");
 if (number === 0) {

  stop();
  alert("Times Up!")
  }
}
function stop(){
  clearInterval(intervalId)
}
run();
// // TIMER END---------
var triviaQuestions = [{
 question: "How many square miles is the entire Walt Disney World Resort?",
 answerList: ["60", "78", "33", "40"],
 answer: 3
},{
 question: "How many tons of fruits and vegetables are grown each year at EPCOT's Land Pavilion?",
 answerList: ["30", "100", "45", "90"],
 answer: 0
},{
 question: "How tall is the Hollywood Tower of Terror?",
 answerList: ["200ft", "376ft", "199ft", "160ft"],
 answer: 2
},{
 question: "How many hand made leaves are on top of the Tree of Life in Disney's Animal Kingdom?",
 answerList: ["208,456", "103,000", "123,768", "300,325"],
 answer: 1
},{
 question: "How many happy haunts live in the Haunted Mansion?",
 answerList: ["999", "1,534", "94", "37"],
 answer: 3
}]
