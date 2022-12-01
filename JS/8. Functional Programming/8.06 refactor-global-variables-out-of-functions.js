// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(books, bookName) {
  const newArray = [...books];
  newArray.push(bookName);
  return newArray;

  // Change code above this line
}

// Change code below this line
function remove(books, bookName) {
  const newArray = books.concat([]);
  const book_index = books.indexOf(bookName);
  if (book_index >= 0) {

    newArray.splice(book_index, 1);
    return newArray;

    // Change code above this line
  }
}