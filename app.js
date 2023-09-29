const d1 = {
    hearts: 5,
    house: 0,
    button: document.getElementById('bd1'),
    display: document.getElementById('d1'),
}
const d2 = {
    hearts: 5,
    house: 0,
    button: document.getElementById('bd2'),
    display: document.getElementById('d2')
}

const resetButton = document.getElementById('reset');
const heartsSelect = document.getElementById('hearts-select');
const duelist1HouseSelect = document.getElementById('house-select-d1');
const duelist2HouseSelect = document.getElementById('house-select-d2');
const mesage = document.getElementById('message');
const houses = ["🤍", "❤️","💛", "💚", "💙"]
let isGameOver = false;
let heartsStart = 5;

function updateHeart(duelist, opponent,index) {
    if (!isGameOver) {
        duelist.hearts -= 1;
        console.log(duelist.hearts)
        if (duelist.hearts === 0) {
            isGameOver = true;
            message.textContent = `${houses[opponent.house]} Wins!`;
            duelist.display.textContent = "💀";
        } else {
            updateHearts(index);
        }
    }
}

d1.button.addEventListener('click', function () {
    updateHeart(d1, d2, 1)
})
d2.button.addEventListener('click', function () {
    updateHeart(d2, d1, 2)
})

heartsSelect.addEventListener('change', function () {
    heartsStart = parseInt(this.value);
    updateHearts(0, 0);
    //reset();
})

duelist1HouseSelect.addEventListener('change', function() {
    newHouse = parseInt(this.value);
    d1.house = newHouse;
    d1.button.className = (`house${newHouse}`);
    updateHearts(1);
})

duelist2HouseSelect.addEventListener('change', function() {
    newHouse = parseInt(this.value);
    d2.house = newHouse;
    d2.button.className = (`house${newHouse}`);
    updateHearts(2);
})

function updateHearts(duelists) {
    if (duelists === 0) {
        d1.hearts = heartsStart
        d2.hearts = heartsStart
        d1.display.textContent = "";
        d2.display.textContent = "";
        for(let i=0; i<heartsStart; i++) {
            d1.display.textContent += houses[d1.house];
            d2.display.textContent += houses[d2.house];
        }
    } else if (duelists === 1) {
        d1.display.textContent = "";
        for(let i=0; i<d1.hearts; i++) {
            d1.display.textContent += houses[d1.house];
        }
    } else {
        d2.display.textContent = "";
        for(let i=0; i<d2.hearts; i++) {
            d2.display.textContent += houses[d2.house];
        }
    }
}

resetButton.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    updateHearts(0);
    message.textContent = "";
}