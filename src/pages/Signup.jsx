import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <>
      <div className='addUser mb-5'>

        <div >
          <marquee behavior="" direction="left" scrollamount="20" > <h1 className='text-danger fw-bold mt-4'><img src=" https://t4.ftcdn.net/jpg/01/75/41/99/360_F_175419966_DvmsbkV48YXpByUUcbFamnYq7KEvDTuG.jpg" style={{ width: '100px' }} alt="" /> WELCOME PAR-KING  </h1> </marquee>
        </div>

        <h3 className='text-center mt-3 fw-bold text-danger'>SIGNUP</h3>
        <div className="row">
          <div className="col-md-4"></div>
          
          <div className="col-md-4">
            <form className='shadow p-4'>

              <div className='mb-3'>
                <label htmlFor="name">NAME</label>
                <input type="text" id='name' placeholder='Enter your name' className='form-control mt-1' />
              </div>

              <div className='mb-3'>
                <label htmlFor="name">EMAIL</label>
                <input type="text" id='email' placeholder='Enter your email' className='form-control mt-1' />
              </div>

              <div className='d-flex'>
                <div className='mb-3'>
                  <label htmlFor="name">MOBILE NUMBER</label>
                  <input type="text" id='mobile' placeholder='Enter your number' className='form-control mt-1' />
                </div>

                <div className='mb-3 ms-3'>
                  <label htmlFor="name">VEHICLE NUMBER</label>
                  <input type="text" id='vehicle' placeholder='Enter your number' className='form-control mt-1' />
                </div>
              </div>

              <div className='mb-2'>
                <label htmlFor="name">PASSWORD</label>
                <input type="password" id='password' placeholder='password' className='form-control mt-1' />
              </div>

              <div className='mb-2'>
                <button className='btn btn-danger shadow rounded w-100 mt-2 mb-3' type='submit'>CREATE ACCOUNT</button>
              </div>

              <div className='d-flex flex-column align-items-center justify-content-center mt-3'>
                <a href="">Already have an account ?</a>
                <Link to={'/login'}> <button className='btn btn-primary w-50%' type='submit'>LOGIN</button></Link>
              </div>

            </form>
          </div>

          <div className="col-md-4"></div>
        </div>

      </div>
    </>
  )
}

export default Signup