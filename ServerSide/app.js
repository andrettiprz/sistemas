// app.js
const express = require("express");

const app = express();
const port = 3000;

// Set EJS as the view engine
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

// Sample data
const books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { title: "To Kill a Mockingbird", author: "Harper Lee" },
  { title: "1984", author: "George Orwell" },
];

// Route for the home page
app.get("/", (req, res) => {
  res.render("index", { books: books });
});


//Para añadir otro libro
app.post("/addBook", (req, res) => {
  const newBook = { title: req.body.title, author: req.body.author };
  books.push(newBook);
  res.redirect("/");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
