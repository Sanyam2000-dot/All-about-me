const readlineSync = require("readline-sync")
const chalk = require('chalk')
var welcomequestion = readlineSync.question("Enter your name!")
console.log("Welcome to the quiz "+ chalk.bgMagentaBright("HAVE YOU MET ME ")  + chalk.green(welcomequestion))
var score = 0

function play(question,answer){
  var userAnswer = readlineSync.question(question)
  if(userAnswer===answer){
    console.log(chalk.green("you are right!"))
    score = score + 1
  }
  else{
    console.log(chalk.red("you are wrong!"))
  }
}
var questions = [
  {question: chalk.blue("What is Sanyam's favourite song?"),
  answer: "Nit Nit"
  },
  {
    question: chalk.blue("What is the name of Sanyam's pet?"),
    answer: "tiger",
  },
  {
    question: chalk.blue("Is Sanyam single or committed?"),
    answer: "single"
  },
  {question: chalk.blue("What is Sanyam's favourite food?"),
  answer: "Rajma Chawal"
  },
  {question: chalk.blue("What is Sanyam's brother name?"),
  answer: "Akshat"
  },
]
for(var i =0;i<questions.length;i++){
var currentQuestion = questions[i]
play(currentQuestion.question,currentQuestion.answer)
}
console.log("YAYYY YOUR SCORE IS " + score)