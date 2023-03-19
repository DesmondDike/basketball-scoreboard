document.getElementById("home-score").textContent
document.getElementById("guest-score").textContent

let homescores = 0 
let homescore = document.getElementById("home-score")

let guestscores= 0
let guestscore = document.getElementById("guest-score")

function homeadd1(){
homescores += +1
homescore.textContent= homescores
}

function homeadd2(){
    homescores += +2
    homescore.textContent= homescores
}

function homeadd3(){
    homescores += +3
    homescore.textContent= homescores
}

function awayadd1(){
    guestscores += +1
    guestscore.textContent= guestscores
    }
    
    function awayadd2(){
        guestscores += +2
        guestscore.textContent= guestscores
    }
    
    function awayadd3(){
        guestscores += +3
        guestscore.textContent= guestscores
    }