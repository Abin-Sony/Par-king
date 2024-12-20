import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='addUser mb-5'>

      <div className='p-2 '>
        <marquee behavior="" direction="left" scrollamount="20" > <h1 className='text-danger fw-bold mt-3'><img src=" https://t4.ftcdn.net/jpg/01/75/41/99/360_F_175419966_DvmsbkV48YXpByUUcbFamnYq7KEvDTuG.jpg" style={{ width: '100px' }} alt="" /> WELCOME PAR-KING  </h1> </marquee>
      </div>

      <h3 className='text-center mt-3 fw-bold text-danger'>LOGIN</h3>
      <div className="row">
        <div className="col-md-4"></div>
        
        <div className="col-md-4">
          <form className='shadow p-4'>

            <div className="mb-3">
              <label htmlFor="name">NAME</label>
              <input type="text" id='name' placeholder='Enter your name' className='form-control mt-1' />
            </div>

            <div className='mb-3'>
              <label htmlFor="name">PASSWORD</label>
              <input type="password" id='password' placeholder='Password' className='form-control mt-1' />
            </div>

            <div>
              <button type='submit' className='btn btn-danger rounded shadow w-100'>LOGIN</button>
            </div>

            <div className="d-flex flex-column align-items-center justify-content-center mt-3">
              <a href="">Dont  have an account ?</a>
              <Link to={'/signup'}> <button className='btn btn-primary w-50%' type='submit'>SIGN UP</button></Link>
            </div>

          </form>
        </div>

        <div className="col-md-4"></div>
      </div>

    </div>
    
  )
}

export default Login