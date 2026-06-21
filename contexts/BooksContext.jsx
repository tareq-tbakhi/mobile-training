import { createContext, useState, useContext } from "react"
import { addDoc, collection } from "firebase/firestore"
import { db } from "../lib/firebase"
import { UserContext } from "./UserContext"

export const BooksContext = createContext()

export function BooksProvider({ children }) {
  const { user } = useContext(UserContext)
  const [books, setBooks] = useState([])   // starts as an empty list
 
  async function fetchBooks() {}
  async function fetchBookById(id) {}

  
  async function createBook(data) {
      try {
    await addDoc(collection(db, "books"), {
      ...data,
      userId: user.uid,
    })
  } catch (error) {
    console.log(error.message)
  }

  }
  async function deleteBook(id) {}
 
  return (
    <BooksContext.Provider value={{ books, fetchBooks, fetchBookById, createBook, deleteBook }}>
      {children}
    </BooksContext.Provider>
  )
}
