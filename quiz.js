$(document).ready(function() {
  questions = [
  "What is the name of this course?",
  "What is the name of our Professsor?",
  "How many sections does this course have?",
  "How many lab assignments should we have in total?"
  ];

  answers = [
    "CSCI 111",
    "Adai",
    "2",
    "10"
    ];

  choice_options = [
    ["CSCI 111", "CSCI 121", "CSCI 115", "CSCI 151"],
    ["Abai", "Arai", "Adai", "Asai"],
    ["1", "2", "3", "4"],
    ["8", "9", "10", "11"]
    ];


  for (var i = 0; i < questions.length; i++) {
    var Q = questions[i];
    var CO = choice_options[i];
    var QDiv = $("<div>").addClass("question");
    var QText = $("<p>").text(Q);
    QDiv.append(QText);

    for (var j = 0; j < CO.length; j++) {
      var C = CO[j];
      var CR = $("<input>").attr({
        type: "radio",
        name: "questione" + i,
        value: C
      });
      var CL = $("<label>").text(C);
      QDiv.append(CR).append(CL);
    }
    $("#quiz-box").append(QDiv);
  }

  var B = $("<button>").text("Check Answers").click(function() {
    var S = 0;

    for (var i = 0; i < questions.length; i++) {
      var selectedAnswer = $("input[name='questione" + i + "']:checked").val();
      if (selectedAnswer === answers[i]) {
        S++;
      }
    }

    $("#score").text("Your score is: " + S + " out of " + questions.length);
  });

  $("#quiz-box").append(B);
});
