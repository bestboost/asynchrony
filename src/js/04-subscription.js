// import '../css/common.css';
const BSN = require("bootstrap.native")

const modal = new BSN.Modal('#subscription-modal');
console.log( modal);
modal.show()

// const PROMPT_DELAY = 1500;
// const MAX_PROMPT_ATTEMPTS = 3;

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