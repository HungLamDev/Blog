import React from 'react'
import { Toaster } from 'react-hot-toast'

export default function Root({ children }) {
  return (
    <>
      {children}
      <Toaster position="top-right" />
    </>
  )
}