
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header/Header'
import Home from './Pages/Home'


function App() {
    
  return (
    <>
          <Header/>

      <Routes>

        <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer/>


    </>
  )
}

export default App
