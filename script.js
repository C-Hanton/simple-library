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




addBookToLibrary("Treasure island", "Robert Louis Stevenson", 292, "not read");

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
}
