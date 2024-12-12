import React from 'react'
import Header from '../components/Header'

function BookingForm() {
    return (
        <>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-md-3"></div>

                    <div className="col-md-6">
                        <form className='shadow p-4 my-5' >

                            <h2 className='text-center mb-4 text-danger fw-bold'>Parking Slot Allocation Form</h2>
                            <div className='mb-3'>
                                <input type="text" placeholder="Name" className='form-control' />
                            </div>

                            <div className='d-flex mb-3'>
                                <input type="text" placeholder="City of residence" className='form-control' />
                                <input type="tel" placeholder="Phone No:" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" className='form-control ms-3' />

                            </div>

                            <div className='d-flex mb-3'>
                                <input type="text" placeholder="Vehicle model" className='form-control' />
                                <input type="text" placeholder="Vehicle number" className='form-control ms-3' />
                            </div>

                            <div className='mb-3'>
                                <label >Entry Time:</label>
                                <input type="datetime-local" className='form-control mt-2' />
                            </div>

                            <div className='mb-3'>
                                <label>Exit Time:</label>
                                <input type="datetime-local" className='form-control mt-2' />
                            </div>


                            <div className='mb-3'>
                                <button className='btn btn-danger shadow text-white w-100 mt-2'>Confirm Booking</button>
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