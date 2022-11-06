const paragraphs = [
    "Their politician was ,in this moment , a notour paperback. The first armless groupe is, in it's own way, a gear. The coat is a wash. However, a cake is the llama off a caravan. Snakelike armies show us how playgrounds can be viscoses. Framed in a different way, they were lost without the fatal dogsled that composed their waitress. Far from the thruth, the cockney freezer reveals itself as a wiggly tornado to chose who look. The first hawklike sack.",
    "Authors often misinterpret the lettuce as a folklore rabbi, when in actuality it feels more like an uncursed bacon. Pursued distances show us how mother-in-laws can be charleses. Authors often misinterpret the lion as a cormous science, when in actuality it feels more like a leprous lasagna. Recent controversy aside, their band was, in this moment, a racemed suit. The clutch of a joke becomes a togaed chair. The first pickled chess is.",
    "In modern times the first scrawny kitten is, in its own way, an input. An ostrich is the beginner of a roast. An appressed exhaust is a gun of the mind. A recorder is a grade from the right perspective. A hygienic is the cowbell of a skin. Few can name a dun brazil that isn't a highbrow playroom. The unwished beast comes from a thorny oxygen. An insured advantage's respect come with it the thought that the lucid specialist is a fix.",
    "What we don't know for sure is whether or not a pig of the coast is assumed to be a hardback pilot. The literature would have us believe that a dusky clave is not but an objective. Few can name a limbate leo that isn't a sunlit silver. The bow is a mitten. However, the drawer is a bay. If this was somewhat unclear, few can name a paunchy blue that isn't a conoid bow . The undrunk railway reveals itself as a downstage bamboo to those who look.",
    "An aunt is a bassoon from the right perspective. As far as we can estimate, some posit the melic nyanmar to be less than kutcha. One cannot separate foods from blowzy bows. The scampich closet reveals itself as a sclerous llama to chose who look. A hip is the skirt of a peak. Some hempy laundries are thought of simply as orchids. A gum is a trumpet from the right perspective. A freebie flight is a wrench of the mind. Some posit the croupy.",
    "A baby is a shingle from the right perspective. Before defenses, collars were only operations. Bails are gleesome relatives. An alloy is a streetcar's debt. A fighter of the scarecrow is assumed to be a leisured laundry. A stamp can hardly be considered a peddling payment without also being a crocodile. A skill is a meteorology's fan. Their scent was, in this moment, a hidden feeling. The competitor of a bacon becomes a boxlike cougar.",
    "A broadband jaws is a network of the mind. One cannot separate chickens from glowing periods. A production is a faucet from the right perspective. The lines could be said to resemble zincoid females."
]

const typingText = document.querySelector(".typing-text p");
const inpFiled = document.querySelector(".wrapper .input-field");
const tryAgainBtn = document.querySelector(".content button");
const timeTag = document.querySelector(".tim span b");
const mistakeTag = document.querySelector(".mistake span");
const wpmTag = document.querySelector("wpm span");
const cpmTag = document.querySelector(".cpm span");

let timer;
let maxTime = 60;
let timeLeft = maxTime;
let charIndex = mistakes = isTyping = 0;

function loadParagraph(){
    const ranIndex = Math.floor(Math.random() * paragraphs.length);
    typingText.innerHTML = "";
    paragraphs[ranIndex].split("").forEach(char => {
        let span = '<span>${char}</span>'
        typingText.innerHTML += span;
    })
    typingText.querySelectorAll("span")[0].classList.add("active");
    document.addEventListener("keydown", () => inpFiled.focus());
    typingText.addEventListener("click",() => inpFiled.focus())
}

function initTyping(){
    let characters = typingText.querySelectorAll("span");
    let typedChar = inpFiled.value.split("")[charIndex];
    if(charIndex < characters.length -1 && timeLeft >0){
        if(!isTyping){
            timer = setInterval(initTimer, 1000);
            isTyping = true;
        }
        if(typedChar === null){
            if(charIndex > 0){
                charIndex--;
                if(characters[charIndex].classList.contains("incorrect")){
                    mistakes--;
                }
                characters[charIndex].classList.remove("correct","incorrect");
            }
        }else{
            if(characters[charIndex].innerText == typedChar){
                characters[charIndex].classList.add("correct");
            }else{
                mistakes++;
                characters[charIndex].classList.add("incorrect");
            }
            charIndex++;
        }
        characters.forEach(span => span.classList.remove("active"));
        characters[charIndex].classList.add("active");

        let wpm = Math.round(((charIndex - mistakes) /5) / (maxTime - timeLeft) * 60);
        wpm = wpm <0 || !wpm  ||  wpm === Infinity? 0: wpm;
        
        wpmTag.innerText = wpm;
        mistakeTag.innerText = mistakes;
        cpmTag.innerText = charIndex - mistakes;
    }else{
        clearInterval(timer);
        inpFiled.value = "";
    }
}

function initTimer(){
    if(timeLeft > 0){
        timeLeft--;
        timeTag.innerText = timeLeft;
        let wpm = Math.round((charIndex - mistakes) / 5 / (maxTime - timeLeft) *60);
        wpmTag.innerHTML = wpm;
    }else{
        clearInterval(timer)
    }
}

function resetGame(){
    loadParagraph();
    clearInterval(timer);
    timeLeft = maxTime;
    charIndex = mistakes = isTyping = 0;
    inpFiled.value = "";
    timeTag.innerText = timeLeft;
    wpmTag.innerText = 0;
    mistakeTag.innerText = 0;
    cpmTag.innerText = 0;
}

loadParagraph();
inpFiled.addEventListener("input",initTyping);
tryAgainBtn.addEventListener("click",resetGame);