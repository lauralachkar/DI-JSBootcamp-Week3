
const planetsArray = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune" ]
const colorsArray = ["blue","red","purple","yellow","pink","brown","green","orange",]

for (i = 0 ; i<planetsArray.length ; i++){
    let planetElements = document.createElement("div");
    planetElements.setAttribute("class","planet");
    planetElements.setAttribute("style",`background-color:${colorsArray[i]}`)
    document.getElementsByTagName("section")[0].appendChild(planetElements)
}