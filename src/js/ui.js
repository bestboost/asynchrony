import addBook from './async-crud';

async function addAndRenderBook() {
     try {
         const book = await addBook({});
         console.log("addAndRenderBook  book:", book)
     } catch (error) {
          console.log("addAndRenderBook  error:", error)
          
     }
};

addAndRenderBook();