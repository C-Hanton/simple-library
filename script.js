// Excercise is to write a cosntruction to make a Book object
//We will revisit this in the next project. Your book objects should have the book’s title, author, the number of pages, and whether or not you have read the book.

/*function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${this.title} by ${this.author} has ${this.pages} pages and is ${this.read}`
    }
}
    */

const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, "read");

// Project Start

//create an array to act as a Library

const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${this.title} by ${this.author} has ${this.pages} pages and is ${this.read}`
    }
}

// Create a function to add new books to Library

function addBookToLibrary(title, author, pages, read){
    const newBook = new Book (title, author, pages, read)
    myLibrary.push(newBook)
}




//addBookToLibrary("Treasure island", "Robert Louis Stevenson", 292, "not read");

// write a function that loops through the array and displays each book on the page
myLibrary.forEach(book => console.log(book.info()));

// Write a script to store information on the html form in the table

function addData() {

    // Get values from the form
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').value;

    //validate entries from the form

    if(!title | !author | !pages | !read){
        alert("Please fill in all fields on the form");
        return;
    }

    // create a new book object and add it to the library

    addBookToLibrary(title, author, pages, read);

    // clear the inputs
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('pages').value = '';
    document.getElementById('read').value = '';

    //display updated library in the table

    displayBooks();
}

// Create a displayBooks fucntion to loop through the myLibrary array and update the table dynamically
function displayBooks(){
    // get the table body element
    const resultTable = document.getElementById('result');

    // clear existing rows
    resultTable.innerText = '';

    // loop through the library and create rows for each book
    myLibrary.forEach((book, index) => {
        const row = document.createElement('tr');

        const titleCell = document.createElement('td')
        titleCell.textContent = book.title;
        row.appendChild(titleCell);

        const authorCell = document.createElement('td');
        authorCell.textContent = book.author;
        row.appendChild(authorCell);

        const pagesCell = document.createElement('td');
        pagesCell.textContent = book.pages;
        row.appendChild(pagesCell);

        const readCell = document.createElement('td');
        readCell.textContent = book.read;
        row.appendChild(readCell);

        // Optional: Add a delete button
        const deleteCell = document.createElement('td');
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => {
            myLibrary.splice(index, 1); // Remove book from library
            displayBooks(); // Refresh table
        };
        deleteCell.appendChild(deleteButton);
        row.appendChild(deleteCell);

        resultTable.appendChild(row);

        // Create button to change a books 'read' status
        const toggleReadCell = document.createElement('td')
        const toggleReadButton = document.createElement('button');
        toggleReadButton.textContent = "Toggle Read";
        toggleReadButton.onclick = () => {
            //toggle read status of the book
            book.read = book.read === 'read' ? 'not read' : 'read';
            displayBooks();
        }
        toggleReadCell.appendChild(toggleReadButton);
        row.appendChild(toggleReadCell);
    })

    

}

