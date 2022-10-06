let getForm = document.getElementsByTagName("form");
let getFirstInput = document.getElementById("fname");
let getSecondInput = document.getElementById("lname");
let getLastInput = document.getElementById("submit");
let getFirstName = document.querySelector('[name="fname"]');
let getSecondName = document.querySelector('[name="lname"]');
console.log((getForm[0].innerHTML));
console.log(getFirstInput);
console.log(getSecondInput);
console.log(getLastInput);
console.log(getFirstName);
console.log(getSecondName);


  getLastInput.addEventListener("click", getInputValues);
  getLastInput.addEventListener("click", checkEmptyInput);
  getLastInput.addEventListener("click", addLi);

  function getInputValues() {
     // Selecting the input element and get its value 
     var firstInputVal = document.getElementById("fname").value;
     var secondInputVal = document.getElementById("lname").value;
     // Displaying the value
     alert(firstInputVal);
     alert(secondInputVal);
  }  
  

 function checkEmptyInput(){
    let getFirstinput = document.getElementById("fname");
    if (!getFirstinput.value) {
        getInputValues();
      }
    };

    function addLi(){
        var FirstTxtVal = document.getElementById('fname').value;
        var secondTxtVal = document.getElementById('lname').value;
        liNodeFirst = document.createElement("li"),
        liNodeSecond = document.createElement("li"),
        firstTxtNode = document.createTextNode(FirstTxtVal);
        secondTxtNode = document.createTextNode(secondTxtVal),


     liNodeFirst.appendChild(firstTxtNode);
     liNodeSecond.appendChild(secondTxtNode);
     alert(liNodeFirst)
     alert(liNodeSecond)
    }


