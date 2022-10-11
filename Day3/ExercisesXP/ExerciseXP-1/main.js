//Part 1

let intervalID;

function repeatEverySecond() {
  intervalID = setInterval(sendMessage, 2000);
}

function sendMessage() {
  console.log("Hello Word");
}

document.getElementById("clear").addEventListener("click", repeatEverySecond);

//Part 2


function repeatEverySecond() {
  intervalID = setInterval(sendMessage, 2000);
}

function sendMessage() {
    console.log('Hello World');
    var newP = document.createElement("p"); // <p></p>
    var text = document.createTextNode("hello word"); 
    newP.appendChild(text); // <p>TEST TEXT</p>
    document.getElementById("container").appendChild(newP)
}

document.getElementById("clear").addEventListener("click", repeatEverySecond);
//Part 3

function repeatEverySecond() {
    intervalID = setInterval(sendMessage, 2000);
  }
  
  function sendMessage() {
      console.log('Hello World');
      var newP = document.createElement("p"); // <p></p>
      var text = document.createTextNode("hello word"); 
      newP.appendChild(text); // <p>TEST TEXT</p>
      document.getElementById("container").appendChild(newP)
  }
  
  document.getElementById("clear").addEventListener("click", repeatEverySecond);
  

  var myTime = setInterval(function () { repeatEverySecond() },2000);
  function myStoptime() {
    clearInterval(myTime);
}

document.getElementById("clear").addEventListener("click", myStoptime);
   