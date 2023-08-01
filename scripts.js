let myLibrary = ['book1', 'book2'];

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
        let newBook = document.createElement('h1');
        let newReadButton = document.createElement('button');
        let newDeleteButton = document.createElement('button');

        newBookDiv.className = 'bookDiv';
        newBookDiv.id = 'bookDiv';
        newBook.innerText = book;
        newBook.id = book;
        newBook.className = 'bookTitle';
        newReadButton.innerText = 'Read';
        newReadButton.id = 'read-' + book;
        newDeleteButton.innerText = 'Delete';
        newDeleteButton.id = 'del-' + book;

        newBookDiv.appendChild(newBook);
        newBookDiv.appendChild(newReadButton);
        newBookDiv.appendChild(newDeleteButton);
        booksList.appendChild(newBookDiv);
    })
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

    const booksList = document.getElementById('books');
    let notLoaded = true;

    newBookButton.addEventListener('click', function() {
        newBookForm.style.display = 'block';
        newBookButton.style.display = 'none';
    });

    newBookForm.addEventListener("submit", getValues);

    if (notLoaded) {
        myLibrary.forEach((book) => {
            let newBookDiv = document.createElement('div');
            let newBook = document.createElement('h1');
            let newReadButton = document.createElement('button');
            let newDeleteButton = document.createElement('button');

            newBookDiv.className = 'bookDiv';
            newBook.innerText = book;
            newBook.id = book;
            newBook.className = 'bookTitle';
            newReadButton.innerText = 'Read';
            newReadButton.id = 'read-' + book;
            newDeleteButton.innerText = 'Delete';
            newDeleteButton.id = 'del-' + book;

            newBookDiv.appendChild(newBook);
            newBookDiv.appendChild(newReadButton);
            newBookDiv.appendChild(newDeleteButton);
            booksList.appendChild(newBookDiv);
        })
        notLoaded = false;
    }
}