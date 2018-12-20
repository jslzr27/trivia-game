$(document).ready(function(){

    $("#start-btn").on("click", gamePlay.startTimer);
});

// 
var gamePlay = {
    timeLeft: 10,
  
    // start the timer, hide the start page, show the questions
    startTimer: function() {
      $("#time-rem").text("Time remaining: " + gamePlay.timeLeft);
      setInterval(gamePlay.countdown, 1000);
      $("#startscreen").hide();
      trivia.questionsDisplay();
    },
  
    // here is the countdown function
    countdown: function() {
      gamePlay.timeLeft--;
      $("#time-rem").text("Time remaining: " + gamePlay.timeLeft);
      if (gamePlay.timeLeft <= 0) {
        clearInterval(gamePlay.startTimer);
        trivia.gradeQuestions();
      }
    },
  
    // function to stop the timer
    /*stopTimer: function() {
      clearInterval();
      trivia.gradeQuestions();
      console.log(gamePlay.timeLeft);
    },*/
  
    // hide the questions and display the end page with results
    resultsPage: function(correctAns, incorrectAns, unanswered) {
      $("#results-screen").show();
      $("#questions-box").empty();
      $("#questions-box").hide();
      $("#time-rem").empty();
      $("#time-rem").hide();
      $("#correct-answers").text("Correct answers: " + correctAns);
      $("#incorrect-answers").text("Incorrect answers: " + incorrectAns);
      $("#unanswered").text("Unanswered questions: " + unanswered);
    }
  }

  // functions for displaying questions and grading them
var trivia = {

    // pull questions from the array of questions, loop through them, and append to UI
    questionsDisplay: function() {
      var divQuestions = $("#questions-box");
      divQuestions.append('<h2>Answer the following questions:</h2>');
              
      for (var i = 0; i < questions.length; i++) {
  
        divQuestions.append('<div id="question">' + questions[i].quest + '</div>');
  
        var answer1 = questions[i].ans[0];
        var answer2 = questions[i].ans[1];
        var answer3 = questions[i].ans[2];
        var answer4 = questions[i].ans[3];
  
        divQuestions.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer1 + '</label></div>');
        divQuestions.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer2 + '</label></div>');
        divQuestions.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer3 + '</label></div>');
        divQuestions.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer4 + '</label></div>');
      }
  
      // function to add a submit button
      var submitButton = '<button class="btn btn-primary" id="submit-btn" type="submit">Submit Answers</button>';
      divQuestions.append(submitButton);
      $("#submit-btn").on("click", trivia.gradeQuestions);
    },
  
    // test if the user answers are correct, incorrect, or if there are unanswered questions
    gradeQuestions: function() {
      var correctAnswer;
      var userAnswer;
      var correctAns = 0;
      var incorrectAns = 0;
      var unanswered = 0;
  
      // loop to compare the text of the label with the user answers
      for (var i = 0; i < questions.length; i++) {
        correctAnswer = questions[i].correct;
        userAnswer = $('input[id=radio'+i+']:checked + label').text();
  
        if (userAnswer === correctAnswer) {
          correctAns++;
        } else if (userAnswer === "") {
          unanswered++;
        } else if (userAnswer !== correctAnswer) {
          {
            incorrectAns++;
          }
        }
      }
  
      // function to show the results page
      gamePlay.resultsPage(correctAns, incorrectAns, unanswered);
    },
  }

  //Create a variable that holds an array with all the questions 

var questions = [{
    quest: "What year did the Champions League Start?",
    ans: ["1955", "1982", "1992", "1965"],
    name: "firstChampions",
    correct: "1955",
    divClass: "firstChampions"
},
{
    quest: "Who organizes the Champions League Tournament?",
    ans: ["FIFA", "UEFA", "CONCACAF", "CAF"],
    name: "organizer",
    correct: "UEFA",
    divClass: "organizer"
},
{
    quest: "What team has won the most titles?",
    ans: ["Manchester United", "Real Madrid", "Barcelona", "Bayern Munich"],
    name: "mostTitles",
    correct: "Real Madrid",
    divClass: "mostTitles"
},
{
    quest: "Who is the all time goal scorer?",
    ans: ["Lionel Messi", "Raul Gonzalez", "David Beckham", "Cristiano Ronaldo"],
    name: "topScorer",
    correct: "Cristiano Ronaldo",
    divClass: "topScorer"
},
{
    quest: "Who has the most appearances?",
    ans: ["Iker Casillas", "Gianluigi Buffon", "Lionel Messi", "Xavi Hernandez"],
    name: "mostApp",
    correct: "Iker Casillas",
    divClass: "mostApp"
},
{
    quest: "Which country has the most titles?",
    ans: ["England", "Italy", "Germany", "Spain"],
    name: "countryWins",
    correct: "Spain",
    divClass: "countryWins"
},
{
    quest: "What team won the 2004/05 tournament?",
    ans: ["Liverpool", "Barcelona", "Manchester United", "AC Milan"],
    name: "winner05",
    correct: "Liverpool",
    divClass: "winner05"
},
{
    quest: "What team holds the record for most consecutive clean sheets?",
    ans: ["Ajax", "Arsenal", "Atletico Madrid", "Juventus"],
    name: "cleanSheets",
    correct: "Arsenal",
    divClass: "cleanSheets"
},
{
    quest: "What team has won the most consecutive trophies in a row?",
    ans: ["AC Milan", "Bayern Munich", "Chelsea", "Real Madrid"],
    name: "titlesinArow",
    correct: "Real Madrid",
    divClass: "titlesinArow"
},
{
    quest: "What team has the record of scoring most goals in a group stage?",
    ans: ["Benfica", "Paris Saint-Germain", "Borussia Dortmund", "Manchester City"],
    name: "groupGoals",
    correct: "Paris Saint-Germain",
    divClass: "groupGoals"
},
{
    quest: "What player has won the most trophies with 6?",
    ans: ["Cristiano Ronaldo", "Lionel Messi", "Francisco Gento", "Paolo Maldini"],
    name: "mostTrophies",
    correct: "Francisco Gento",
    divClass: "mostTrophies"
}, 
{
    quest: "One of this players has scored 5 goals in a match, who is it?",
    ans: ["Cristiano Ronaldo", "Neymar", "Luis Suarez", "Luiz Adriano"],
    name: "5goals",
    correct: "Luiz Adriano",
    divClass: "5goals"
},
{
    quest: "One of this players has scored for 6 different teams, who is it?",
    ans: ["Arjen Robben", "Alexis Sanchez", "Ronaldinho", "Zlatan Ibrahimovic"],
    name: "6different",
    correct: "Zlatan Ibrahimovic",
    divClass: "6different"
}
]
