let myLibrary = [];

function Book(title,author,pageNum,completedStatus) {
  this.name = title;
  this.author = author;
  this.pageNum = pageNum;
  this.completedStatus = completedStatus;
}

function addBookToLibrary(book) {
 myLibrary.append(book);
}