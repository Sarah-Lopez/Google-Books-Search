const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/googlebookssearch"
);

const bookSeed = [
  {
    title: "The Dead Zone",
    author: "Stephen King",
    synopsis:
      "A number-one national best seller about a man who wakes up from a five-year coma able to see people's futures",
    date: new Date(Date.now())
  },
  {
    title: "Lord of the Flies",
    author: "William Golding",
    synopsis:
      "The tale of a party of shipwrecked schoolboys, marooned on a coral island, ",
    date: new Date(Date.now())
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    synopsis:
      "The Catcher in the Rye is a 1951 novel by J. D. Salinger."
    date: new Date(Date.now())
  }
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
