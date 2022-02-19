const userLibrary = [];
let libraryContainer = document.querySelector('#library');
let addBtn = document.querySelector('.add-book');
let updateBtn = document.querySelector('.update-progress');
let removeBooksBtn = document.querySelector('.remove-selected-books');
let emptyLibraryBtn = document.querySelector('.empty-library');

function Book(title, author, pages, progress){

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.progress = progress;

}

hg = new Book("Hunger Games", "Suzanne Collins", 300, "Read");
hg2 = new Book("Hunger Games: Catching Fire", "Suzanne Collins", 350, "Read");



// addBookToLibrary(hg);
// addBookToLibrary(hg2);

function addBookToLibrary(bookObj){
    userLibrary.push(bookObj);

    let row = document.createElement("tr");
    row.className = 'row';

    let title = document.createElement("td");
    title.className = 'book-cell';
    title.textContent = bookObj.title;

    let author = document.createElement("td");
    author.className = 'book-cell';
    author.textContent = bookObj.author;

    let pages = document.createElement("td");
    pages.className = 'book-cell';
    pages.textContent = bookObj.pages;

    let progress = document.createElement("td");
    progress.className = 'book-cell';
    progress.textContent = bookObj.progress;

    
    row.appendChild(title);
    row.appendChild(author);
    row.appendChild(pages);
    row.appendChild(progress);
    libraryContainer.appendChild(row);
}


// function viewLibraryBooks(){
//     for (let i = 0; i < userLibrary.length; i++){
//         for(libraryBook in userLibrary[i]){
//             book.textContent += `${libraryBook}: ${userLibrary[i][libraryBook]} \n`;
//         }
//     }
// }

// viewLibraryBooks();
