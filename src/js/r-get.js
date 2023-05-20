const BASE_URL = 'http://localhost:4040';

 function fetchBooks(){
     fetch(`${BASE_URL}/books`)
     .then(r => r.json());
 };

 function fetchBookById(bookId){
     fetch(`${BASE_URL}/books/${bookId}`)
     .then(r => r.json());
 };

 fetchBooks();
 fetchBookById(2);
 fetchBookById(4);