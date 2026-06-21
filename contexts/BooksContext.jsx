import { createContext, useEffect, useState } from "react"
import { collection, addDoc, getDocs, query, where } from "firebase/firestore"
import { db } from "../lib/firebase"
import { useUser } from "../hooks/useUser"
 
export const BooksContext = createContext()
 
export function BooksProvider({ children }) {
  const [books, setBooks] = useState([])
  const { user } = useUser()
 
  async function fetchBooks() {
    try {
      const q = query(collection(db, "books"), where("userId", "==", user.uid))
      const snapshot = await getDocs(q)
      const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      setBooks(list)
    } catch (error) {
      console.log(error.message)
    }
  }
 
  async function fetchBookById(id) {
    try {} catch (error) { console.log(error.message) }
  }
 
  async function createBook(data) {
    try {
      await addDoc(collection(db, "books"), { ...data, userId: user.uid })
    } catch (error) {
      console.log(error.message)
    }
  }
 
  async function deleteBook(id) {
    try {} catch (error) { console.log(error.message) }
  }
 
  useEffect(() => {
    if (user) { fetchBooks() } else { setBooks([]) }
  }, [user])
 
  return (
    <BooksContext.Provider value={{ books, fetchBooks, fetchBookById, createBook, deleteBook }}>
      {children}
    </BooksContext.Provider>
  )
}
