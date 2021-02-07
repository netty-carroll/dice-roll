const dice = document.querySelector('#dice');
const roll = document.querySelector('button');
const rollDie = ()=> Math.floor(math.random()*6 + 1);
const rollDice = ()=> `img src="dice${rollDie()}.png">`

roll.onclick = ()=>dice.innerHTML = rollDice();