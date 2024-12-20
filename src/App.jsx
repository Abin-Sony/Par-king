
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Footer from './components/Footer'
import BookingForm from './pages/BookingForm'
import ParkingPlace from './pages/ParkingPlaces'
import Booking from './pages/Booking'

function App() {
  
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/booking' element={<Booking/>} />
      <Route path='/bookingform' element={<BookingForm/>} />
      <Route path='/ParkingPlace' element={<ParkingPlace/>} />
    </Routes>
      <Footer/>
    </>
  )
}

export default App
