const userLibrary = [];
let libraryContainer = document.querySelector('#library');
let addBtn = document.querySelector('.add-book');
let updateBtn = document.querySelector('.update-progress');
let removeBooksBtn = document.querySelector('.remove-selected-books');
let emptyLibraryBtn = document.querySelector('.empty-library');

let title = document.getElementById("title");
let author = document.getElementById("author");
let pages = document.getElementById("pages");
// let progressRead = document.getElementById("read");
// let progressUnread = document.getElementById("unread");

const radioButtons = document.querySelectorAll('input[name="progress"]');
let selectedProgress;
let bookIndex = 0;


class Book {
    constructor(title, author, pages, progress, index) {

        this.title = title;
        this.author = author;
        this.pages = pages;
        this.progress = progress;
        this.index = index;

    }
}

addBtn.addEventListener("click", () => {
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            selectedProgress = radioButton.value;
            break;
        }
    }
});

addBtn.addEventListener('click', addBookToLibrary);

function addBookToLibrary() {

    let obj = new Book(title.value, author.value, pages.value, selectedProgress, bookIndex++);

    userLibrary.push(obj);

    let row = document.createElement("tr");
    row.className = 'row';

    let titleCell = document.createElement("td");
    titleCell.className = 'book-cell';
    titleCell.textContent = obj.title;

    let authorCell = document.createElement("td");
    authorCell.className = 'book-cell';
    authorCell.textContent = obj.author;

    let pagesCell = document.createElement("td");
    pagesCell.className = 'book-cell';
    pagesCell.textContent = obj.pages;

    let progressCell = document.createElement("td");
    progressCell.className = 'book-cell';
    progressCell.textContent = obj.progress;

    row.appendChild(titleCell);
    row.appendChild(authorCell);
    row.appendChild(pagesCell);
    row.appendChild(progressCell);
    libraryContainer.appendChild(row);

    title.value = '';
    author.value = '';
    pages.value = '';
    selectedProgress = '';
}


// function viewLibraryBooks(){
//     for (let i = 0; i < userLibrary.length; i++){
//         for(libraryBook in userLibrary[i]){
//             book.textContent += `${libraryBook}: ${userLibrary[i][libraryBook]} \n`;
//         }
//     }
// }

// viewLibraryBooks();
