//Exercise1

let getDiv = document.getElementById("container");
console.log(getDiv)

let listItems = document.querySelectorAll("li");
 for(i=0; i<listItems.length; i++){
  if(listItems[i].innerHTML == "Pete"){
   listItems[i].innerHTML = "Richard";
  }
 }

 let listOfItems = document.querySelectorAll(".list");
 for(i=0; i<listOfItems.length; i++){
  listOfItems[i].firstElementChild.innerHTML = "laura";
 }

 let listElements = document.querySelectorAll(".list li");
 for (let i = 0; (li = listElements[i]); i++) {
  if(listElements[i].innerHTML == "Sarah")
  li.parentNode.removeChild(li);
 }