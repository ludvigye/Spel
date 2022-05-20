let clicked = document.querySelector(".gurkpicture");
let counter = document.querySelector(".counter");
let upgrade1 = document.querySelector(".upgrade");
let quest = document.querySelector(".quest");
let totalclicksbutton = document.querySelector(".totalclicks")
let upgradecost = 20;
let upgradelevel = 1;
let click = 0;
let totalclicks = 0;
let questcost = 50;

clicked.addEventListener("click",Totalclicks);
clicked.addEventListener("click",Quest);
clicked.addEventListener("click",clicker);
upgrade1.addEventListener("click",upgrade);

function clicker(){
    click+=upgradelevel;
    counter.innerHTML = click + " gurkor";
}
function upgrade(){
    if(click >= upgradecost){
        upgradelevel++;
        click -= upgradecost;
        upgradecost*=3;
        upgrade1.innerHTML = "Gurkupgradering lvl " + upgradelevel + " " + upgradecost + ":-";
        counter.innerHTML = click + " gurkor";
    }
}
function Totalclicks(){
    totalclicks++;
    totalclicksbutton.innerHTML = "Total clicks: " + totalclicks;
}
function Quest(){
    if(totalclicks == questcost){
        questcost*=2;
        quest.innerHTML = "Quest: Få totalt "+ questcost + " gurkor";
        click += questcost;

    }
}