const validJSON = '{ "name": "Манго", "age": 3 }';
const invalidJSON = '{ бекенд вернул вот такое чудо }';

try {
     console.log(1);

     console.log(JSON.parse(invalidJSON));

     console.log(2);
} catch (error) {
    console.log(error) 
    if(error.name === 'SyntaxError') {
     console.log('Ошибка парса JSON надо что-то сделать');
    }
};

console.log('После try...catch');