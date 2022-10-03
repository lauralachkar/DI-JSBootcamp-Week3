function changeStyle(){
    document.getElementsByTagName("div")[0].setAttribute
 ("style", "background-color: blue;")
    document.getElementsByTagName("div")[0].style.padding = "20px";
}
    
changeStyle()

let deleteValues = document.querySelectorAll("ul li");
  for(i = 0 ; (li = deleteValues[i]); i++){
    if(deleteValues[i].innerHTML == "John"){
     li.parentNode.removeChild(li)
    }
}

document.getElementsByTagName("li")[0].setAttribute("style", "border: solid black 1px");


document.getElementsByTagName("body")[0].style.fontSize =  "x-large";