'use client'
import { createContext, useState, useContext } from 'react'

const BookmarkContext = createContext()

export function BookmarkProvider({ children }) {
  const [bookmarks, setBookmarks] = useState([])

  const toggleBookmark = (user) => {
    setBookmarks(prev =>
      prev.find(u => u.id === user.id)
        ? prev.filter(u => u.id !== user.id)
        : [...prev, user]
    )
  }

  return (
    <BookmarkContext.Provider value={{ bookmarks, toggleBookmark }}>
      {children}
    </BookmarkContext.Provider>
  )
}

export function useBookmarks() {
  return useContext(BookmarkContext)
}