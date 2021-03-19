const books = [
    {
    id:"1",
    name:"That's not my bunny",
    author :"Tulsidas",
    description :"Indus House",
    isbn :"746fs4222",
    year :1983,
    photo :"http://training.pyther.com/books/9780746066928_cover_image.jpg"
},
{
    id: "_wozd33zdf",
    name: "To the Lighthouse",
    description: "A landmark novel of high modernism, the text, centering on the Ramsay family and their visits to the Isle of Skye in Scotland between 1910 and 1920, skillfully manipulates temporality and psychological exploration. The novel includes little dialogue and almost no action; most of it is written as thoughts and observations. The novel recalls the power of childhood emotions and highlights the impermanence of adult relationships. Among the book's many tropes and themes are those of loss, subjectivity, and the problem of perception",
    author: "Virginia Woolf",         
    photo: "https://images-na.ssl-images-amazon.com/images/I/512RH0o4H2L._SL160_.jpg"
},
{
    id :"22",
    name:"What is a Virus",
    author:"Smith",
    publisher:"Indus House",
    isbn:"746fs4222",
    year:1983,
    photo:"http://training.pyther.com/books/9781474991513_cover_image.jpg"
}
]

const delay = 500;


const generatedID = function () {
return '_' + Math.random().toString(36).substr(2, 9);
};

class BookApi {
static getAllBooks() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Object.assign([], books));
        }, delay);
    });
}

static saveBook(book) {
    book = Object.assign({}, book); 
    return new Promise((resolve) => {
        setTimeout(() => {
            if (book.id) {
                const existingBookIndex = books.findIndex(a => a.id === book.id);
                books.splice(existingBookIndex, 1, book);
            } else {
                book.id = generatedID();
                books.push(book);
            }
            resolve(book);
        }, delay);
    });
}

static getBook(bookId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const existingBookIndex = books.findIndex(book => book.id === bookId);
            const bookFound = Object.assign({}, books[existingBookIndex]);
            resolve(bookFound);
        }, delay);
    });
}

static deleteBook(bookId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const indexOfBookToDelete = books.findIndex(book => book.id === bookId);
            books.splice(indexOfBookToDelete, 1);
            resolve();
        }, delay);
    });
}
}

export default BookApi;