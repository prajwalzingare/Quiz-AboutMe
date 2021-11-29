var readLine = require("readline-sync");
var username = readLine.question("Hello,What is your name? ");
console.log("Hey "+ username +" Let's see how much you know Prajwal")
var score = 0;
var totalScore = 0;
function ask(question,answer){
  var userAnswer = readLine.question(question);
  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log("You are right!");
    score++;
    
  }
  else{
    console.log("You are wrong!!");
    
    
  }
  console.log("Your score is "+ score );
  console.log("----------");
  totalScore++;
}

var questionOne="Where do Prajwal live? ";
var questionTwo = "Which lifestyle does prajwal follows? ";
var questionThree = "Which outdoor game does Prajwal like to play? ";

ask(questionOne,"Bhiwapur");
ask(questionTwo,"Satviclifestyle");
ask(questionThree,"Football");

console.log("Hooray!!Your final score is "+ score + " out of "+ totalScore);