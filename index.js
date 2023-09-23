const express = require("express");
const app = express();
const { connection } = require("./database/db");
const booksRouter = require("./routes/books");

app.use(express.json());

// Set up routes
app.use("/books", booksRouter);  
const PORT = process.env.PORT || 4051;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
