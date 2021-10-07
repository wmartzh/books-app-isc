const booksService = require('./service')
const joi = require('joi')

const newBookValidator = joi.object({
  title: joi.string().required(),
  description: joi.string().required(),
  author: joi.string().required(),
  year: joi.string().required(),
  genre: joi.string().required(),
  language: joi.string().required(),
  picture: joi.string().required(),
})
const getBooks = async (req, res) =>{
  try {
    // console.log('🚀 => getBooks => req', req);
    const result = await booksService.getAllBooks()
    res.json(result)
  } catch (error) {
    console.log('🚀 => getBooks => error', error);
    res.status(error.status).json({code:error.code, message:error.message})
  }

}

const createBook = async (req, res) =>{
  try {
    const value = await newBookValidator.validateAsync(req.body);

    const newBook =  await booksService.createBook(value);
     if(newBook){
     res.status(201).json({status:201,message:`${newBook.title} was added successfully`})
    }
    
  } catch (error) {
    console.log('🚀 => createBook => error', error);
    if(error.details){
      res.status(400).json({code:'request_object_error', message:error.details[0].message})

    }
    res.status(500).json({message:'Internal Error'})
  }
}

module.exports = {
  getBooks,
  createBook,
}