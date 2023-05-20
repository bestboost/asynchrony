const BASE_URL = 'http://localhost:4040';  

function addBook(book){
     const options = {
          method: 'POST',
          headers: {
               'Content-Type': 'application/json',
          },
          body: JSON.stringify(book),
     };
     
     return fetch(`${BASE_URL}/books`, options)
     .then(r => r.json())
     .then(console.log());
};

addBook( {
     "title": "Тестовая книна HTML",
     "author": "Я",
     "genres": ["HTML"],
     "rating":8
 }).then(renderBook)
   .catch(error => console.log(error));

 addBook( {
     "title": "Тестовая книна CSS",
     "author": "Я",
     "genres": ["CSS"],
     "rating":7
 }).then(renderBook)
   .catch(error => console.log(error));

 function renderBook(book){
     console.log('Пришел ответ от бекенда можно рисовать')
     console.log(book);
 }
 