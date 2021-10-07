const router = require('express').Router();
const booksController = require('./controller')
router.get('/',booksController.getBooks)
router.post('/',booksController.createBook  )
module.exports = router;