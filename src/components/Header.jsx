import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Header() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    // Function to handle opening the modal
    const openModal = () => {
        setIsModalOpen(true);
    };

    // Function to handle closing the modal
    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <Navbar expand="lg" className="bg-danger p-4">
                
                <Container>
                    <Navbar.Brand>
                     <h1 className='text-dark'> <img src='https://pngimg.com/uploads/letter_p/letter_p_PNG28.png' style={{width:"50px", height:"55px"}} className='me-3'/>PAR-KING</h1> 
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        
                        <Nav className="ms-auto ">
                            <Link to={'/'} style={{textDecoration:'none'}}><h2 className='text-white'>Home</h2></Link>
                            <Link to={'/booking'} style={{textDecoration:'none'}}><h2 className='ms-md-5 text-white'>Bookings</h2></Link>
                            <Link onClick={openModal} style={{ cursor: 'pointer',textDecoration:'none' }} ><h2 className='ms-md-5 text-white'>How it works</h2></Link>
                        </Nav>

                        <button className='btn btn-light rounded p-2 ms-md-5 text-dark'>Sign Out</button>
                     
                    </Navbar.Collapse>
                   
                </Container>
            </Navbar>

            {/* how it works modal */}
            
            <div>
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        {isModalOpen && (
                            <div className="modal-overlay p-4 shadow m-4">
                                <div className="modal-content">
                                    <div className='d-flex justify-content-around mb-3'>
                                        <h2>HOW IT WORKS</h2>
                                        <button className='btn btn-danger text-white rounded' onClick={closeModal}><FontAwesomeIcon icon={faXmark} className='fa-2xl'/></button>
                                    </div>
                                    
                                    <div style={{ border: '2px solid red' }}></div>
                                    <div className='mt-4 d-flex'>
                                        <div>
                                            <span className='fs-1 text-danger'>1</span>
                                        </div>
                                        <div className='ms-3'>
                                            <h3>Find your car park!</h3>
                                            <p>Sign up and check your preferred place for parking</p>
                                        </div>
                                    </div>

                                    <div className='mt-2 d-flex'>
                                        <div>
                                            <span className='fs-1 text-danger'>2</span>
                                        </div>
                                        <div className='ms-3'>
                                            <h3>Book!</h3>
                                            <p>Select date and time, check availability,see prices..</p>
                                        </div>
                                    </div>

                                    <div className='mt-2 d-flex'>
                                        <div>
                                            <span className='fs-1 text-danger'>3</span>
                                        </div>
                                        <div className='ms-3'>
                                            <h3>Park!</h3>
                                            <p>Upon arrival, just show your reservation in the car park.</p>
                                        </div>
                                    </div>
                                    <div>
                                        <marquee class="text-black text-9xl md:text-9xl text-6xl" scrollamount="25" behavior="" direction="left"><img src="https://www.scribblefun.com/wp-content/uploads/2020/02/Car.png" alt="" style={{ height: '50px', width: '100px' }} />  </marquee>
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>


        </>
    )
}

export default Header