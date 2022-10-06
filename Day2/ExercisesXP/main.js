let getHeader = document.getElementsByTagName("h1");
let getArticle = document.getElementsByTagName("article");
console.log((getHeader[0].innerHTML))
console.log((getArticle[0].innerHTML))


function changeBackgroundColor(){
    let getSecondHeader = document.getElementsByTagName("h2")[0]
    getSecondHeader.setAttribute("style", "background-color: red;")
}

document.getElementById("myBtn").addEventListener("click", changeBackgroundColor);

function hideElement(){
    let thirdHeader = document.getElementsByTagName("h3")[0]
    thirdHeader.style.display = "none";
}

function setFontWeight(){
    let bold_Items = document.getElementsByTagName("p");
    for (i=0 ; i<bold_Items.length; i++){
        bold_Items[i].style.fontWeight = "900";
    }
}
