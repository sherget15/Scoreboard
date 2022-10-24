let homeScore = document.getElementById('home-score')
let guestScore = document.getElementById('guest-score')

let homeOne = 0
let homeTwo = 0
let homeThree = 0


function addOne() {
    homeOne += 1
    homeScore.textContent = homeOne
}

function addTwo() {
    homeTwo += 2
    homeScore.textContent = homeTwo
}

function addThree() {
    homeThree += 3
    homeScore.textContent = homeThree
}


