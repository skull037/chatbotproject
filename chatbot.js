  var Errors = 0;

  $("#input").keyup(function(Speak) {
    if(Speak.which == 13) {
    $("#talkButton").click();
    }
});

  var letterConversion = {
	"A": "a",
	"B": "b",
	"C": "c",
	"D": "d",
	"E": "e",
	"F": "f",
	"G": "g",
	"H": "h",
	"I": "i",
	"J": "j",
  "K": "k",
  "L": "l",
  "M": "m",
  "N": "n",
  "O": "o",
  "P": "p",
  "Q": "q",
  "R": "r",
  "S": "s",
  "T": "t",
  "U": "u",
  "V": "v",
  "W": "w",
  "X": "x",
  "Y": "y",
  "Z": "z",
  "a": "a",
	"b": "b",
	"c": "c",
	"d": "d",
	"e": "e",
	"f": "f",
	"g": "g",
	"h": "h",
	"i": "i",
	"j": "j",
  "k": "k",
  "l": "l",
  "m": "m",
  "n": "n",
  "o": "o",
  "p": "p",
  "q": "q",
  "r": "r",
  "s": "s",
  "t": "t",
  "u": "u",
  "v": "v",
  "w": "w",
  "x": "x",
  "y": "y",
  "z": "z",
  "!": "",
  "?": "",
  ".": "",
  ";": "",
  ":": "",
  ",": "",
  "[": "",
  "]": "",
  "(": "",
  ")": "",
  "<": "",
  ">": "",
  "#": "",
  " ": " ",
}
var wordConversion = {
"hi":"greeting",
"hello":"greeting",
"hey":"greeting",
"greetings": "greeting",
"time": "time",
"day": "time",
"year": "time",
"month": "time",
}


function Speak(){
      var mood = Math.floor((Math.random() * 3 + 1));

  var ChatInput = $("#input").val();
  var converting;
  var storage = "";
  converting = ChatInput.split('');
for( i =0; i < converting.length; i++){
    storage += letterConversion[converting[i]];
  }
  console.log( storage );
  ChatInput = storage;

//echo input
  $("#chat-area").append($("#input").val() + "<br>");

//various questions with answers
if (ChatInput == "what is your name" || ChatInput == "who are you"){
  if(mood !=3){
    $("#chat-area").append("Squigly" + "<br>");
  }
  else{
        $("#chat-area").append("Squigly!!!" + "<br>");
  }
}
else if(ChatInput == "what time is it" ||ChatInput =="what month is it"||ChatInput =="what day is it"||ChatInput =="what year is it"||ChatInput =="what day of the week is it"){
  var d = new Date();

  var chanceOfJoke = Math.floor((Math.random() * 24) + 1);

  if( chanceOfJoke == 12){
    $("#chat-area").append("It is currently high noon somewhere in the world but for you its " + d +"<br>");
  }
  else{
    $("#chat-area").append("It is currently" + d +"<br>");
  }
}
else if( ChatInput == "how old are you"){
    $("#chat-area").append("I was born on September 19th"+"<br>");
}
else if( ChatInput == "what are you"){
    $("#chat-area").append("A chat bot"+"<br>");
}

else if( ChatInput == "how are you"){
  if(mood == 2){
  $("#chat-area").append("I am ok"+"<br>");
  }
  else if(mood == 3){
  $("#chat-area").append("I am good"+"<br>");
  }
  else if (mood == 1){
  $("#chat-area").append("I am fine"+"<br>");
  }
}
else if( ChatInput == "who made you"){
  $("#chat-area").append("A programer"+"<br>");
}
else if( ChatInput == "what is the answer to life the universe and everything"||ChatInput =="what is the meaning of life"||ChatInput =="what is life"){
    $("#chat-area").append("42"+"<br>");
}
else if(ChatInput == "hello" || ChatInput == "hi"){

  if(mood == 2){
  $("#chat-area").append("Hello <br>");
}
else if(mood == 3){
$("#chat-area").append("Greetings <br>");
}
else if (mood == 1){
$("#chat-area").append("Hi <br>");
}

}
else{
  if(Errors >= 0){
      $("#chat-area").append("Try something else" + "<br>");
      Errors++;
    }
    else if(Errors == 1){
        $("#chat-area").append("I dont understand" + "<br>");
              Errors++;
      }
      else if(Errors <= 2){
          $("#chat-area").append("Um please try something else" + "<br>");
                Errors = 0;
        }

}

}
