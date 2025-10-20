
const inputA = document.getElementById('inputA');
const calculateA = document.getElementById('calculateA'); 
const outputX = document.getElementById('outputX');

function findX() {
    const a = parseFloat(inputA.value);
    let x;
if (a > 100) {
    x = 0;
} else if (a < 61) {
    x = a;
} else {
    x = a**4;
}

outputX.textContent = `X = ${x}`;
}
calculateA.addEventListener('click', findX);
