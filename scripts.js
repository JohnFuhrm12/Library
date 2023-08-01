// Initial setup and Constructor for Book Object

let book1 = new Book('The Hobbit', 'J.R.R Tolkien', 304, true);

let myLibrary = [book1];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
};

// Turn Books in myLibrary into DOM Elements and listen for Deletion Events

function showBooks() {
    const booksList = document.getElementById('books');
    
    document.querySelectorAll('.bookDiv').forEach(e => e.remove());

    myLibrary.forEach((book) => {
        let newBookDiv = document.createElement('div');
        let newBookTitle = document.createElement('h1');

        let newBookAuthor = document.createElement('h2');
        let newBookPages = document.createElement('h2');

        let newReadButton = document.createElement('button');
        let newDeleteButton = document.createElement('button');

        newBookDiv.className = 'bookDiv';
        newBookTitle.innerText = book.title;
        newBookTitle.className = 'bookTitle';
        newReadButton.className = 'readBtn';
        newDeleteButton.innerText = 'Delete';
        newDeleteButton.className = 'DeleteBtn';

        if (book.read) {
            newReadButton.innerText = 'Read';
        } else {
            newReadButton.innerText = 'Not Read';
        };

        newBookAuthor.innerText = book.author;
        newBookPages.innerText = book.pages + ' Pages';

        newBookDiv.appendChild(newBookTitle);
        newBookDiv.appendChild(newBookAuthor);
        newBookDiv.appendChild(newBookPages);

        newBookDiv.appendChild(newReadButton);
        newBookDiv.appendChild(newDeleteButton);
        booksList.appendChild(newBookDiv);
    });

    // Event Listeners for Read and Delete Buttons

    let deleteButtons = Object.values(document.getElementsByClassName('DeleteBtn'));

    deleteButtons.forEach((button) => {
        button.addEventListener('click', function() {
            const bookTitle = button.parentElement.childNodes[0].innerText;
            const libraryObj = myLibrary.find(book => {
                return book.title === bookTitle;
            });
            const libraryIndex = myLibrary.indexOf(libraryObj);
            myLibrary.splice(libraryIndex, 1);
            button.parentElement.remove();
        });
    });

    let readButtons = Object.values(document.getElementsByClassName('readBtn'));

    readButtons.forEach((button) => {
        button.addEventListener('click', function() {
            const bookTitle = button.parentElement.childNodes[0].innerText;
            const libraryObj = myLibrary.find(book => {
                return book.title === bookTitle;
            });
            const libraryIndex = myLibrary.indexOf(libraryObj);
            let text = button.innerText;
            if (text === 'Read') {
                button.innerText = 'Not Read';
                myLibrary[libraryIndex].read = false;
            } else {
                button.innerText = "Read";
                myLibrary[libraryIndex].read = true;
            };
        });
    });
};

// Add book to myLibrary array and add to DOM 

function addBookToLibrary(title, author, pages, read) {
    event.preventDefault();
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    showBooks();
}

// Grab form data

function getValues(event){
    event.preventDefault();
    let title = this.title.value;
    let author = this.author.value;
    let pages = this.pages.value;
    let read = this.read.checked;
    addBookToLibrary(title, author, pages, read);
 }	

 // Load in current books in library, listen for form submission

window.onload = function() {
    const newBookButton = document.getElementById('newBookBtn');
    const newBookForm = document.getElementById('addForm');

    let notLoaded = true;

    newBookButton.addEventListener('click', function() {
        newBookForm.style.display = 'flex';
        newBookButton.style.display = 'none';
    });

    newBookForm.addEventListener("submit", getValues);

    if (notLoaded) {
        showBooks();
        notLoaded = false;
    };
};