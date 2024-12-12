
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Footer from './components/Footer'
import BookingForm from './pages/BookingForm'
import ParkingPlace from './pages/ParkingPlaces'


function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/bookingform' element={<BookingForm/>} />
      <Route path='/ParkingPlace' element={<ParkingPlace/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
