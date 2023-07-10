import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Contacts } from './pages/Contacts/Contacts'
import { Layout } from './components/Layout/Layout'
import { About } from './pages/About/About'
import { Category } from './pages/Category/Category'
import second from './styles/styles.scss'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='' element={<Home />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/about' element={<About />} />
          <Route path='/category' element={<Category />} />
        </Route>
      </Routes>

    </>
  )
}

export default App
