

import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Footer from './components/shared/Footer/Footer'
import Main from './components/pages/Main/Main'

import Header from './components/shared/Header/Header'

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Main/>}/>
    </Routes>
     <Footer/>
    </>
  )
}

export default App
