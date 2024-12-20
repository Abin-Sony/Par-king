import React, { useState } from 'react'
import { addBookingDetailApi } from '../services/allApi'
import Header from '../components/Header'

function BookingForm() {

    const [bookingDetails,setBookingDetails] = useState({
        name:"",
        city:"",
        mobileNum:"",
        vehicleModel:"",
        vehicleNum:"",
        entryTime:"",
        exitTime:""
    })
    const handleSubmit= async()=>{
        const {name, city, mobileNum, vehicleModel, vehicleNum, entryTime, exitTime} = bookingDetails 

        if(!name || !city || !mobileNum || !vehicleModel || !vehicleNum || !entryTime || !exitTime){
            alert('Please fill the form completely')
        }
        else{
            const result = await addBookingDetailApi(bookingDetails)

            if(result.status>=200 && result.status<300){
                alert("Booking successfull")
            }
            else{
                alert("something went wrong")
            }
        }
    }


  return (
    <>
    <Header/>
    <div className="container">
                <div className="row">
                    <div className="col-md-3"></div>
                   
                        <div className="col-md-6">
                            <form className='shadow p-4 my-5' >
                                
                                    <h2 className='text-center mb-4 text-danger fw-bold'>Parking Slot Allocation Form</h2>
                                    <div className='mb-3'>
                                        <input type="text" placeholder="Name" className='form-control' onChange={(e)=>setBookingDetails({...bookingDetails, name:e.target.value})} />
                                    </div>
        
                                    <div className='d-flex mb-3'>
                                        <input type="text" placeholder="City of residence" className='form-control' onChange={(e)=>setBookingDetails({...bookingDetails, city:e.target.value})}  />
                                        <input type="tel" placeholder="Phone No:" className='form-control ms-3' onChange={(e)=>setBookingDetails({...bookingDetails, mobileNum:e.target.value})}  />

                                    </div>
        
                                    <div className='d-flex mb-3'>
                                        <input type="text" placeholder="Vehicle model" className='form-control' onChange={(e)=>setBookingDetails({...bookingDetails, vehicleModel:e.target.value})} />
                                        <input type="text" placeholder="Vehicle number" className='form-control ms-3' onChange={(e)=>setBookingDetails({...bookingDetails, vehicleNum:e.target.value})} />
                                    </div>

                                    <div className='mb-3'>
                                            <label >Entry Time:</label>
                                            <input type="datetime-local" className='form-control mt-2' onChange={(e)=>setBookingDetails({...bookingDetails, entryTime:e.target.value})}/>
                                    </div>

                                    <div className='mb-3'>
                                            <label>Exit Time:</label>
                                            <input type="datetime-local" className='form-control mt-2' onChange={(e)=>setBookingDetails({...bookingDetails, exitTime:e.target.value})} />
                                    </div>
                                   
                                    <div className='mb-3'>
                                        <button className='btn btn-danger shadow  text-white w-100 mt-2' onClick={handleSubmit}>Confirm Booking</button>
                                    </div>
                                
                            </form>
                        </div>
                        <div className='col-md-3'></div>

                </div>

        </div>
    </>
  )
}

export default BookingForm