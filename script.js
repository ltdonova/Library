let myLibrary = [];
var LibraryContainer = document.querySelector('.grid-container');
var book1 = new Book("title1","author1",20,true);
addBookToLibrary(book1);
var books;

function Book(title,author,pageNum,completedStatus) {
  this.name = title;
  this.author = author;
  this.pageNum = pageNum;
  this.completedStatus = completedStatus;
}
function getRandomColor() {
    return Math.floor(Math.random()*16777215).toString(16);

}
function addBookToLibrary(book) {
 myLibrary.push(book);
}


function clearLibrary(){
    books = document.querySelectorAll('.book');

    [...books].forEach(book =>{
        book.parentNode.removeChild(book);
    })

   
}
function displayLibrary(){
    if(LibraryContainer.childElementCount>0)
        clearLibrary();

    myLibrary.forEach( book => {
        let bookSpot = document.createElement('div');
        bookSpot.classList.add('book');
        let color = getRandomColor();
        bookSpot.style.backgroundColor = color;
        LibraryContainer.append(bookSpot);
    });



}