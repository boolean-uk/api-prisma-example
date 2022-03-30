const express = require("express")

const booksRouter = express.Router()

const {prisma} = require("../utils/database")

//GET /books - getting all books from the database
booksRouter.get("/", (req, res) => {

  const where = {}
  if(req.query.type) {
    where['type'] = req.query.type
  }

  if(req.query.topic) {
    where['topic'] = req.query.topic
  }

  prisma.book.findMany( {where})
    .then(books => res.json({books: books}))
})

//GET /books/:id - loads a single book by id
booksRouter.get("/:id", (req, res) => {
  prisma.book.findUnique({
    where: { 
      id: parseInt(req.params.id) 
    } 
  }).then(book => {
    if(!book) {
      res.status(404)
      res.json({error: 'book does not exist'})
    } else {
      res.json({book})
    }
  }) 
})

//DELETE /books/10
booksRouter.delete("/:bookId", (req, res) => {
  prisma.book.delete({
    where: { 
      id: parseInt(req.params.bookId) 
    } 
  }).then(book => res.json({book}))
})

booksRouter.put("/:bookId", (req, res) => {
  
  const updatedBook = {
    title: req.body.title,
    type: req.body.type, 
    author: req.body.author,
    topic: req.body.topic,
    publicationDate: new Date(Date.parse(req.body.publicationDate)),
    pages: parseInt(req.body.pages),
  }

  prisma.book.update({
    where: { 
      id: parseInt(req.params.bookId) 
    },
    data: updatedBook
  }).then(book => res.json({book}))
})

//POST /books - Adds a new book
booksRouter.post("/", (req, res) => {
 
  const newBook = {
    title: req.body.title,
    type: req.body.type, 
    author: req.body.author,
    topic: req.body.topic,
    publicationDate: new Date(Date.parse(req.body.publicationDate)),
    pages: parseInt(req.body.pages),
  }

  prisma.book.create({
    data: newBook
  }).then(book => {
    res.json({book})
  })
})

module.exports = booksRouter