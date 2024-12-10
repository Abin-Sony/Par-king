import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
    return (
        <div>
            <div className='p-5'>
                <div className='row'>
                    <div className="col-md-4">
                        <h4 className='text-danger'>Par-King</h4>
                        <p style={{ textAlign: 'justify' }} className='mt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic ea obcaecati officia nihil eum aspernatur quam sunt amet ut mollitia iure consequatur suscipit laboriosam, molestiae aliquam consequuntur id corporis alias.</p>
                    </div>



                    <div className="col-md-2 d-md-flex justify-content-center mt-4 mt-md-0">
                        <div>
                            <h4 className='text-danger'>Link</h4>
                            <Link to={'/Login'}> <p className='mt-3'>Login page</p></Link>
                            <Link to={'/ParkingPlace'}> <p>Parking place</p></Link>
                            <Link to={'/BookingForm'}>  <p>Booking Form</p></Link>
                        </div>
                    </div>



                    <div className="col-md-2 d-md-flex justify-content-center  mt-4 mt-md-0">
                        <div>
                            <h4 className='text-danger'>Guides</h4>
                            <p className='mt-3'>React</p>
                            <p>React Bootstrap</p>
                            <p>Bootswatch</p>

                        </div>

                    </div>



                    <div className="col-md-4 px-md-5 mt-4 mt-md-0">
                        <h4 className='text-danger '>Contact Us</h4>
                        <div className='d-flex mt-3 shadow'>
                            <input type="text" placeholder='Email Id'
                                className='form-control' />
                            <button className='btn btn-danger ms-3'>Subscribe</button>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Footer