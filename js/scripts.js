
var letterScore = function(letter) {

  var letterScores = {"a":1,"b":3,"c":3,"d":2,"e":1,"f":4,"g":2,"h":4,"i":1,"j":8,"k":5,"l":1,"m":3,"n":1,"o":1,"p":3,"q":10,"r":1,"s":1,"t":1,"u":1,"v":4,"w":4,"x":8,"y":4,"z":10};
  return letterScores[letter];

};

var wordScore = function(word) {
  var score = 0;
  word = word.toLowerCase();
  for (var i=0; i < word.length; i++) {
    score = score + letterScore(word.charAt(i));
  }
  return score;

};



$(document).ready(function(){
  $("form#wordSubmit").submit(function(event){
    var output = wordScore($("input#word-submit").val());
    $('p').append("The scrabble word score for" + " " + $("input#word-submit").val() + " is" + " " + output + "<br>");
    event.preventDefault();

  });
});



