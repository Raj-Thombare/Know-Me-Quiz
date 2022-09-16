var readlineSync = require('readline-sync');
const chalk = require('chalk');

var score = 0;


var userName = readlineSync.question(chalk.blue.bgYellowBright.bold('May I have your name? '));
console.log("Welcome " + userName +  " to DO YOU KNOW Raj !!!")

// array of object:questions and answers
var questions = [{
  question:`What is my Birthdate?
            a: 31 December
            b: 11 January
            c: 30 April\n`,
  answer: "a"
},{
  question:`How old i am?
            a: 21 years old
            b: 20 years old
            c: 19 years old\n`,
  answer: "c"
},{
  question:`What is my favorite sport?
            a: Cricket
            b: Football
            c: Chess\n`,
  answer: "a"
},{
  question:`Who is my favorite cricketer?
            a: Ben Stokes
            b: Rohit Sharma
            c: virat Kohli\n`,
  answer: "b"
},{
  question:`Which is my favorite Marvel Character?
            a: Thanos
            b: Antman
            c: Ironman\n`,
  answer: "c"
}];


function play(question, answer){
  var userAnswer = readlineSync.question(chalk.cyan(question));

  if(userAnswer===answer){
    console.log(chalk.green.bold("Right!"))
    score = score + 1;
    console.log("Current Score: " + score)
  }else {
    console.log(chalk.red.bold("Wrong!"))
    score = score - 1;
    console.log("Current Score: " + score)
  }
};


for(var i =0; i<questions.length;i++)
{
  var curr = questions[i];
  play(curr.question, curr.answer);
}

console.log('Game Over!!');
console.log(chalk.blue.bold('You Scored : '+ score));

if(score>3){
  console.log("Yay!! you know me very well :D")
}else {
  console.log("oops! you need to know me more :( ")
}










