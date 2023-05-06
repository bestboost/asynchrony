import '../css/common.css';

const date1 = Date.now();


setTimeout(() => {
     const date2 = Date.now(); 

     console.log("date1:", date1)
     console.log("setTimeout  date2 :", date2 )
     console.log(date2 - date1);
}, 3000);