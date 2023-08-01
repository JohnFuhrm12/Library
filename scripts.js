let myLibrary = ['book1', 'book2'];

function Book(name, read) {
  this.name = name;
  this.read = read;
}

function addBookToLibrary() {
    let newBook = new Book();
    myLibrary.push(newBook);
}

window.onload = function() {
    const button = document.getElementById('btn');
    const booksList = document.getElementById('books');
    let notLoaded = true;

    button.addEventListener('click', () => {
        console.log(notLoaded);
      });

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