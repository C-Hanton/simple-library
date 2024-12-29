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

function addBookToLibrary(){

}
