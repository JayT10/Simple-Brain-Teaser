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


// Click Event
buttonEl.addEventListener(`click`, operation);
document.addEventListener(`keypress`, (e)=> {
  if (e.key === `Enter`) {
    e.preventDefault();
    operation();
  }
})

function operation() {
  // To add
    if (listName === `added`) {
      let add = rand1 + rand2;
        if (inputEl.value == add) {
          rightEl.textContent = `Correct!, ${add}`;
          setTimeout ( ()=> {
            rightEl.textContent = ``;
            location.reload();
          }, 1000 )
        } else {
          wrongEl.textContent = `Wrong! Answer is ${add}`;
          setTimeout ( ()=> {
            wrongEl.textContent = ``;
            location.reload();
          }, 4000)
        }
    }
    // To Subtact
    else if (listName === `subtracted`) {
      let sub = rand1 - rand2;
        if (inputEl.value == sub) {
          rightEl.textContent = `Correct! ${sub}`;
          setTimeout ( ()=> {
            rightEl.textContent = ``;
            location.reload();
          }, 1500 )
        } else {
          wrongEl.textContent = `Wrong! Answer is ${sub}`;
          setTimeout ( ()=> {
            wrongEl.textContent = ``;
            location.reload();
          }, 4000)
        }
  }
  // To Multiply
  else if (listName === `multiplied`) {
    let multi = rand1 * rand2
      if (inputEl.value == multi) {
        rightEl.textContent = `Correct! ${multi}`;
        setTimeout ( ()=> {
          rightEl.textContent = ``;
          location.reload();
        }, 1500 )
      } else {
        wrongEl.textContent = `Wrong! Answer is ${multi}`;
        setTimeout ( ()=> {
          wrongEl.textContent = ``;
          location.reload();
        }, 4000)
      }

  }
  // To Divide
  else {
    let div = rand1/rand2
      if (inputEl.value == div) {
        rightEl.textContent = `Correct! ${div}`;
        setTimeout ( ()=> {
          rightEl.textContent = ``;
          location.reload();
        }, 1500 )
      } else {
        wrongEl.textContent = `Wrong! Answer is ${div}`;
        setTimeout ( ()=> {
          wrongEl.textContent = ``;
          location.reload();
        }, 4000)
      }
  }

}
