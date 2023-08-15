

import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Footer from './components/shared/Footer/Footer'
import Home from './components/pages/Home'
import Header from './components/shared/Header/Header'
import DrinkList from './components/pages/DrinkList'
import DrinkDetail from './components/shared/DrinkDetail/DrinkDetail'

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/drinklist' element={<DrinkList/>}/>
      <Route path='/drinklist/:id' element={<DrinkDetail/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
