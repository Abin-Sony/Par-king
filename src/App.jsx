
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Footer from './components/Footer'
// import Header from './components/Header'
import BookingForm from './pages/BookingForm'


function App() {
  

  return (
    <>
    {/* <Header/> */}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/bookingform' element={<BookingForm/>} />
    </Routes>
      <Footer/>
    </>
  )
}

export default App
