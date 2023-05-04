import '../css/common.css';
const BSN = require("bootstrap.native");

const modal = new BSN.Modal('#subscription-modal');
console.log(modal);

const refs = {
     modal: document.querySelector('#subscription-modal')
}
refs.modal.addEventListener('hide.bs.modal', () => {
     setTimeout(() => {
          console.log('Открываем модалку')
          modal.show()
     }, PROMPT_DELAY);
} );

const PROMPT_DELAY = 1500;
const MAX_PROMPT_ATTEMPTS = 3;

setTimeout(() => {
     console.log('Открываем модалку')
     modal.show()
}, PROMPT_DELAY);



// let promptCounter = 0;
// let hasSubscribed = false;

// const intervalId = setInterval(() => {
//      if(promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscribed) {
//           console.log('Нужно остановить интервал');
//           clearInterval(intervalId);
//           return;
//      }
//      console.log('Подпишись на рассылку!' + Date.now());
//      promptCounter += 1; 
// }, PROMPT_DELAY);