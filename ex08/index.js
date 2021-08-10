// ex08: function to check the answer

// importing the readlineSync package
var readlineSync = require("readline-sync");

// declaring global variable
var score = 0;

// declaring the function
function qna(question01 , answer01)
{
  var userAns = readlineSync.question(question01);
  if(userAns === answer01)
  {
    console.log("YAY! Correct Answer");
    score = score + 1;
  }
  else
  {
    console.log("NAY! Wrong Answer");
    // score = score - 1;
  }
}

// calling the function
qna("6 + 5 = ", "11");
qna("6 * 5 = ", "30");
qna("6 - 5 = ", "01");
qna("Where do I study? ", "Vasad");
qna("Where do I live? ", "Vadodara");

// printing the score
console.log("your score is ", score);
