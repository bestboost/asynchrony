import '../css/common.css';

const logger = time => 
     console.log(`Лог каждые ${time} - ${Date.now()}`);

// console.log("before setInterval:");

// setInterval(logger, 2000, 2000);

// console.log("after setInterval:");



// const timerId = setInterval(logger, 2000, 2000);
// const shouldCancelTimer = Math.random() > 0.3;
// console.log("shouldCancelTimer:", shouldCancelTimer)

// if(shouldCancelTimer) {
//      clearInterval(timerId);
// };