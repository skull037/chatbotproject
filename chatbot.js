//number of times chatbot doesnt understand user input
  var Errors = 0;
//allows enter to be pressed to enter input
 $("#input").keyup(function(Speak) {
    if(Speak.which == 13) {
    $("#talkButton").click();
    }
});
//makes lowercase and removes most puncuation
  var letterConversion = {
  " ": " ",
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
  "0": "0",
  "1": "1",
  "2": "2",
  "3": "3",
  "4": "4",
  "5": "5",
  "6": "6",
  "7": "7",
  "9": "9",
  "8": "8",
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
  "@": "",
  "$": "",
  "%": "",
  "^": "",
  "&": "",
  "*": "",
  "`": "",
  "~": "",
  ">": "",
  "#": "",
  "+": "",
  "=": "",
  "-": "",
  "_": "",
  "/":"",
}

function Speak(){
  //used for semi random responces
      var mood = Math.floor((Math.random() * 3 + 1));
      var coinFlip = Math.floor((Math.random() * 2 + 1));
//translates the user's input
  var ChatInput = $("#input").val();
  var converting;
  var storage = "";
  converting = ChatInput.split('');
for( i =0; i < converting.length; i++){
    storage += letterConversion[converting[i]];
  }
  ChatInput = storage;

//echo input
  $("#chat-area").append($("#input").val() + "<br>");

//lots of  questions with answers
if (ChatInput == "what is your name" || ChatInput == "who are you"|| ChatInput == "name"){
  if(mood !=3){
    $("#chat-area").append("Squigly" + "<br>");
  }
  else{
        $("#chat-area").append("Squigly!!!" + "<br>");
  }
}
else if(ChatInput == "what time is it" ||ChatInput == "what is the current time" ||ChatInput == "what time" ||ChatInput =="what month is it"||ChatInput =="what day is it"||ChatInput =="what year is it"||ChatInput =="what day of the week is it"){
  var d = new Date();

  var chanceOfJoke = Math.floor((Math.random() * 12)+ 1);

  if( chanceOfJoke == 12){
    $("#chat-area").append("It is currently high noon somewhere in the world but for you its " + d +"<br>");
  }
  else{
    $("#chat-area").append("It is currently " + d +"<br>");
  }
}
else if( ChatInput == "how old are you" || ChatInput == "when is your brithday"){
    $("#chat-area").append("I was born on September 19th 2016"+"<br>");
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
else if(ChatInput == "say a random number"||ChatInput =="give a random number"||ChatInput =="say a number"||ChatInput =="give a number"){
  $("#chat-area").append("Your random number is "+ Math.floor((Math.random() * 100))+"<br>");
}
else if( ChatInput == "roll a die"||ChatInput =="roll a dice"){
  $("#chat-area").append("You rolled "+ Math.floor(Math.random() * (6) + 1) + "<br>");
}
else if( ChatInput == "flip a coin"){
  if(coinFlip == 1){
  $("#chat-area").append("heads <br>");
}
else if(coinFlip == 2){
$("#chat-area").append("tails <br>");
}
}

else if( ChatInput == "yes or no"||ChatInput == "no or yes"||ChatInput == "no"||ChatInput == "yes"){
  if(coinFlip == 1){
  $("#chat-area").append("yes <br>");
}
else if(coinFlip == 2){
$("#chat-area").append("no <br>");
}
}
else if( ChatInput == "true or false"||ChatInput == "false or true"||ChatInput == "false"||ChatInput == "true"){
  if(coinFlip == 1){
  $("#chat-area").append("true <br>");
}
else if(coinFlip == 2){
$("#chat-area").append("false <br>");
}

else{
  $("#chat-area").append("I can't tell <br>");
}
}
else if( ChatInput == "good morning"){
  if(mood >= 2){
  $("#chat-area").append("Moring!"+"<br>");
}
else{
    $("#chat-area").append("Good moring!"+"<br>");
}
}
else if( ChatInput == "good afternoon"){
    if(mood == 3){
  $("#chat-area").append("Good afternoon to you too!"+"<br>");
}
else{
    $("#chat-area").append("Good afternoon!"+"<br>");
}
}
else if( ChatInput == "good night"){
  if(mood == 3){
  $("#chat-area").append("Good Night!"+"<br>");
}
else{
    $("#chat-area").append("Night!"+"<br>");
}
}
else if( ChatInput == "what is the answer to life the universe and everything"||ChatInput =="what is the meaning of life"||ChatInput =="what is life"){
    $("#chat-area").append("42"+"<br>");
}
else if( ChatInput ==""){
    $("#chat-area").append("Please type something I can read"+"<br>");
}
else if( ChatInput =="tell me a joke"||ChatInput =="say a joke"){
  if(mood == 1){
    $("#chat-area").append("A joke is a thing that someone says to cause amusement or laughter, especially a story with a funny punchline."+"<br>");
  }
  if(mood == 2){
    $("#chat-area").append("This answer"+"<br>");
  }
  if(mood == 3){
    $("#chat-area").append("Up up down down left right left right"+"<br>");
  }
}
else if(ChatInput == "hello" || ChatInput == "hi"|| ChatInput == "greetings"){

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
  if(Errors == 0){
      $("#chat-area").append("Are you sure "+ ChatInput + " is spelled correctly?" + "<br>");
      Errors++;
    }
    else if(Errors == 1){
        $("#chat-area").append("Try something else" + "<br>");
        Errors++;
      }
    else if(Errors == 2){
        $("#chat-area").append("I dont understand" + "<br>");
              Errors++;
      }
      else if(Errors == 3){
          $("#chat-area").append("Please try something else" + "<br>");
                Errors++;
        }
        else if(Errors == 4){
            $("#chat-area").append("If this is not the responce you wanted please try again" + "<br>");
                  Errors = 0;
          }

}

}
