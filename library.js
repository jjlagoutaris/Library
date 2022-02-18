const userLibrary = [];
let libraryContainer = document.querySelector('.library-container');
let book = document.querySelectorAll('.book');

function Book(title, author, pages, progress){

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.progress = progress;

}

hg = new Book("HG", "SC", 300, "Read");
hg2 = new Book("CF", "SC", 350, "Not Read");

addBookToLibrary(hg);
addBookToLibrary(hg2);

function addBookToLibrary(bookObj){
    userLibrary.push(bookObj);
}

// console.log(userLibrary);


function viewLibraryBooks(){
    for (let i = 0; i < userLibrary.length; i++){
        for(libraryBook in userLibrary[i]){
            book.textContent += `${libraryBook}: ${userLibrary[i][libraryBook]} \n`;
        }
    }
}

viewLibraryBooks();
