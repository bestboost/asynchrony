try {
     console.log('Внутри try до myVar');

         myVar;

     console.log('Внутри try после myVar');
} catch {
     console.log('Ошибка!');
}

console.log('После try...catch');