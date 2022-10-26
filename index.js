let homeScore = document.getElementById('home-score')
let guestScore = document.getElementById('guest-score')

let homeOne = 0
let homeTwo = 0
let homeThree = 0

let guestOne = 0
let guestTwo = 0 
let guestThree = 0


function addOne() {
    homeOne += 1
    let homeTotal = homeOne + homeTwo + homeThree
    homeScore.textContent = homeTotal
}

function addTwo() {
    homeTwo += 2
    let homeTotal = homeOne + homeTwo + homeThree
    homeScore.textContent = homeTotal
}

function addThree() {
    homeThree += 3
    let homeTotal = homeOne + homeTwo + homeThree
    homeScore.textContent = homeTotal
}


function addOneGuest() {
    guestOne += 1
    let guestTotal = guestOne + guestTwo + guestThree
    guestScore.textContent = guestTotal
}

function addTwoGuest() {
    guestTwo += 2
    let guestTotal = guestOne + guestTwo + guestThree
    guestScore.textContent = guestTotal
}

function addThreeGuest() {
    guestThree += 3
    let guestTotal = guestOne + guestTwo + guestThree
    guestScore .textContent = guestTotal
}

