// DICE SIMULATOR
document.getElementById("roll").addEventListener("click", rollButton);
document.getElementById("reset").addEventListener("click", resetButton);

let select = document.getElementById("character-select");
let rollBtn = document.getElementById("roll");
let resetBtn = document.getElementById("reset");
let diceimg1 = document.getElementById("dice1");
let diceimg2 = document.getElementById("dice2");
let display = document.getElementById("diceDisplay");

function rollButton() {
  if (select.value == "once") {
    let rand1 = Math.round(Math.random() * 5 + 1);
    let rand2 = Math.round(Math.random() * 5 + 1);

    diceimg1.src = `images/${rand1}.png`;
    diceimg2.src = `images/${rand2}.png`;

    display.innerHTML += `<span>${rand1}, ${rand2}</span>`;
  }

  if (select.value == "five") {
    for (let n = 0; n < 5; n++) {
      let rand1 = Math.round(Math.random() * 5 + 1);
      let rand2 = Math.round(Math.random() * 5 + 1);

      diceimg1.src = `images/${rand1}.png`;
      diceimg2.src = `images/${rand2}.png`;

      display.innerHTML += `<span>${rand1}, ${rand2}</span>`;
    }
  }

  if (select.value == "option") {
    var Poption = +prompt("How many rolls?");

    for (let n = 0; n < Poption; n++) {
      let rand1 = Math.round(Math.random() * 5 + 1);
      let rand2 = Math.round(Math.random() * 5 + 1);

      diceimg1.src = `images/${rand1}.png`;
      diceimg2.src = `images/${rand2}.png`;

      display.innerHTML += `<span>${rand1}, ${rand2}</span>`;
    }
  }

  if (select.value == "snakeEyes") {
    let snakeRoll = 0;

    while (true) {
      let rand1 = Math.round(Math.random() * 5 + 1);
      let rand2 = Math.round(Math.random() * 5 + 1);

      diceimg1.src = `images/${rand1}.png`;
      diceimg2.src = `images/${rand2}.png`;

      display.innerHTML += `<span>${rand1}, ${rand2}</span>`;

      snakeRoll++;
      if (rand1 == 1 && rand2 == 1) {
        alert(`${snakeRoll} rolls to get Snake Eyes`);
        break;
      }
    }
  }
}

function resetButton() {
  diceimg1.src = `images/0.png`;
  diceimg2.src = `images/0.png`;

  display.innerHTML = `<h3>Dice Rolls</h3>`;
}
