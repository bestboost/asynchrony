const BASE_URL = 'http://localhost:4040';

function updateBookById(update, bookId) {
     const options = {
          method: 'PATCH',
          headers: {
               'Content-Type': 'application/json',
          },
          body: JSON.stringify(update),
     };

     return fetch(`${BASE_URL}/books/${bookId}`, options)
     .then(response => response.json());    
};

updateBookById({title: "Ну, Очень большая новая тестовая книга по HTML", rating: 10}, 13)