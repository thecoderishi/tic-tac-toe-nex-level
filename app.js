let status = document.querySelector('.status');
let reset = document.querySelector(".reset");
let cells = document.querySelectorAll('.game-cell');

// Players Symbols
const xSymbol = '×';
const oSymbol = '○';

let isGameLive = true;
let isXNext = true;

const whoWon = (symbol) => {
    console.log(symbol);
    isGameLive = false;
    if (symbol === 'x') {
        status.innerHTML = `<span>${xSymbol} has won!</span>`;
    } else {
        status.innerHTML = `<span>${oSymbol} has won!</span>`;
    }
}

//Checking Game Status After Every Click
const checkGameStatus = () => {
    const zeroZero = cells[0].classList[1];
    const zeroOne = cells[1].classList[1];
    const zeroTwo = cells[2].classList[1];
    const oneZero = cells[3].classList[1];
    const oneOne = cells[4].classList[1];
    const oneTwo = cells[5].classList[1];
    const twoZero = cells[6].classList[1];
    const twoOne = cells[7].classList[1];
    const twoTwo = cells[8].classList[1];


    //Checking Wining Conditions

    if (zeroZero && zeroZero === zeroOne && zeroOne === zeroTwo) {
        whoWon(zeroZero);
        cells[0].classList.add('won');
        cells[1].classList.add('won');
        cells[2].classList.add('won');
    }else
    if (oneZero && oneZero === oneOne && oneOne === oneTwo) {
        whoWon(oneZero);
        cells[3].classList.add('won');
        cells[4].classList.add('won');
        cells[5].classList.add('won');
    }else
    if (twoZero && twoZero === twoOne && twoOne === twoTwo) {
        whoWon(twoZero);
        cells[6].classList.add('won');
        cells[7].classList.add('won');
        cells[8].classList.add('won');
    }else
    if (zeroZero && zeroZero === oneZero && oneZero === twoZero) {
        whoWon(zeroZero);
        cells[0].classList.add('won');
        cells[3].classList.add('won');
        cells[6].classList.add('won');
    }else
    if (zeroOne && zeroOne === oneOne && oneOne === twoOne) {
        whoWon(zeroOne);
        cells[1].classList.add('won');
        cells[4].classList.add('won');
        cells[7].classList.add('won');
    }else
    if (zeroTwo && zeroTwo === oneTwo && oneTwo === twoTwo) {
        whoWon(zeroTwo);
        cells[2].classList.add('won');
        cells[5].classList.add('won');
        cells[8].classList.add('won');
    }else
    if (zeroZero && zeroZero === oneOne && oneOne === twoTwo) {
        whoWon(zeroZero);
        cells[0].classList.add('won');
        cells[4].classList.add('won');
        cells[8].classList.add('won');
    }else
    if (zeroTwo && zeroTwo === oneOne && oneOne === twoZero) {
        whoWon(zeroTwo);
        cells[2].classList.add('won');
        cells[4].classList.add('won');
        cells[6].classList.add('won');
    } else {
        isXNext = !isXNext;
        if (isXNext) {
            status.innerHTML = `${xSymbol} is next`;
        }
        else {
            status.innerHTML = `<span>${oSymbol} is next</span>`;
        }
    }
}


//Reset Handler
const handleReset = () => {
    isXNext = true;
    status.innerHTML = `${xSymbol} is next`;
    for (const cell of cells) {
        cell.classList.remove('x');
        cell.classList.remove('o');
        cell.classList.remove('won');
    }
    isGameLive = true;
    
}

// Game Cell Handle
const handleCellClick = (e) => {
    const classList = e.target.classList;
    if (!isGameLive || classList[1] === 'x' || classList[1] === 'o') {
        return;
    }
    if (isXNext) {
        classList.add('x');
        checkGameStatus();
    } else {
        classList.add('o');
        checkGameStatus();
    }
    
}


//Event Listner Reset
reset.addEventListener('click', handleReset);

//Event Listner of Cellls
for (const cell of cells) {
    cell.addEventListener('click', handleCellClick);
}