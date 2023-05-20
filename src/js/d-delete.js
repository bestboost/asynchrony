const BASE_URL = 'http://localhost:4040';

function removeBook(bookId) {
     const url = `${BASE_URL}/books/${bookId}`;
     const options = {
       method: 'DELETE',
     };

     fetch(url, options).then(r => r.json());
};

removeBook(26);
removeBook(25);