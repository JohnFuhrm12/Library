let book1 = new Book('The Hobbit', 'J.R.R Tolkien', 304, true)

let myLibrary = [book1];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function showBooks() {
    const booksList = document.getElementById('books');
    
    document.querySelectorAll('.bookDiv').forEach(e => e.remove());

    myLibrary.forEach((book) => {
        let newBookDiv = document.createElement('div');
        let newBookTitle = document.createElement('h1');

        let newBookAuthor = document.createElement('h2');
        let newBookPages = document.createElement('h2');
        let newBookRead = document.createElement('h2');

        let newReadButton = document.createElement('button');
        let newDeleteButton = document.createElement('button');

        newBookDiv.className = 'bookDiv';
        newBookTitle.innerText = book.title;
        newBookTitle.id = book;
        newBookTitle.className = 'bookTitle';
        newReadButton.innerText = 'Read';
        newReadButton.id = 'read-' + book;
        newDeleteButton.innerText = 'Delete';
        newDeleteButton.className = 'DeleteBtn';

        newBookAuthor.innerText = book.author;
        newBookPages.innerText = book.pages + ' Pages';
        newBookRead.innerText = book.read;

        newBookDiv.appendChild(newBookTitle);
        newBookDiv.appendChild(newBookAuthor);
        newBookDiv.appendChild(newBookPages);
        newBookDiv.appendChild(newBookRead);

        newBookDiv.appendChild(newReadButton);
        newBookDiv.appendChild(newDeleteButton);
        booksList.appendChild(newBookDiv);
    })

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
        })
    });
}

function addBookToLibrary(title, author, pages, read) {
    event.preventDefault();
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    console.log(myLibrary);
    showBooks();
}

function getValues(event){
    event.preventDefault();
    let title = this.title.value;
    let author = this.author.value;
    let pages = this.pages.value;
    let read = this.read.value;
    addBookToLibrary(title, author, pages, read);
 }	

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
    }
}