const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

const getAllBooks = async () =>{
  try {
    const books = await prisma.books.findMany();
    if(books.length == 0){
      throw {code:'not_found',status: 404, message:"there is no books on database"}
    }
    return books
  } catch (error) {
    throw error
  }
}
const createBook = async (book) =>{
  try {
    return await prisma.books.create({data:book})
   
  } catch (error) {
    throw error
  }
}
module.exports = {
  getAllBooks,
  createBook
}