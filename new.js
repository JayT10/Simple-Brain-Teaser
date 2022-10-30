const questionEl = document.querySelector("h1");
const inputEl    = document.querySelector("input");
const buttonEl   = document.querySelector("button");
const rightEl    = document.querySelectorAll("h4")[0];
const wrongEl    = document.querySelectorAll("h4")[1];

const rand1 = Math.floor(Math.random() * 8) + 1;
const rand2 = Math.floor(Math.random() * 8) + 1;

const list  = [`added`, `subtracted`, `multiplied`, `divided`];
const listRandom = Math.floor(Math.random() * list.length);
const listName = list[listRandom];


// Question Script (questionEl or H1 Element)
function askQuestion() {
  if (listName === `added`) {
    questionEl.textContent = `What is ${rand1} ${listName} to ${rand2}`;
  } else if (listName === `subtracted`) {
    questionEl.textContent = `What is ${rand1} ${listName} from ${rand2}`;
  } else {
    questionEl.textContent = `What is ${rand1} ${listName} by ${rand2}`;
  }
}
askQuestion();


// Operation fucntions
function toDo(correctAns) {
  if (inputEl.value == correctAns) {
    rightEl.textContent = `Correct!`;
    setTimeout ( ()=> {
      rightEl.textContent = ``;
      location.reload();
    }, 1000 )
  } else {
    wrongEl.textContent = `Wrong! Answer is ${correctAns}`;
    setTimeout ( ()=> {
      wrongEl.textContent = ``;
      location.reload();
    }, 2000)
  }
}

function operation() {
   if (listName === `added`) {
      let add = rand1 + rand2;
      toDo(add);
  } else if (listName === `subtracted`) {
      let sub = rand1 - rand2;
      toDo(sub);
  } else if (listName === `multiplied`) {
      let multi = rand1 * rand2;
      toDo(multi);
  } else {
      let div = rand1/rand2
      toDo(div);
  }
}


// Events
buttonEl.addEventListener(`click`, operation);
document.addEventListener(`keypress`, (e)=> {
  if (e.key === `Enter`) {
    e.preventDefault();
    operation();
  }
})
