const express = require("express");
const morgan = require("morgan");
const cors = require("cors")
const bodyParser = require("body-parser");

const app = express();
app.use(cors())
app.use(morgan("dev"));
app.use(bodyParser.json());

//TODO: Implement books and pets APIs here
const booksRouter = require('./routers/books')

app.use("/books", booksRouter)

const port = 3030;
//Start the server
app.listen(port, () => {
  console.log(`[SERVER] Running on http://localhost:${port}/`);
});
