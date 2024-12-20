import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Signup() {

  const [name, namechange] = useState("");
  const [email, emailchange] = useState("");
  const [mobile, mobilechange] = useState("");
  const [vehicle, vehiclechange] = useState("");
  const [password, passwordchange] = useState("");

  const handlesubmit = async (e) => {
    e.preventDefault();
    let signupobj = { name, email, mobile, vehicle, password };
    //console.log(signupobj);

    try {
      // Send a POST request to the backend
      const response = await fetch('http://localhost:4000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signupobj),
      });

      const data = await response.json();

      if (response.ok) {
        // Display success alert
        alert(data.message || 'Signup successful!');
      } else {
        // Display error alert
        alert(data.message || 'Signup failed. Please try again.');
      }
    } catch (error) {
      // Handle fetch errors
      alert('An error occurred. Please try again later.');
      console.error('Error during signup:', error);
    }




  }


  return (
    <div className='addUser mb-5'>
      <div className='p-2'>
        <marquee behavior="" direction="left" scrollamount="20" > <h1 className='text-danger fw-bold'><img src=" https://t4.ftcdn.net/jpg/01/75/41/99/360_F_175419966_DvmsbkV48YXpByUUcbFamnYq7KEvDTuG.jpg" style={{ width: '100px' }} alt="" /> WELCOME PAR-KING  </h1> </marquee>
      </div>

      <div className="row">
        <h3 className='text-center mt-3 fw-bold text-danger'>SIGNUP</h3>
        <div className="col-md-4"></div>

        <div className="col-md-4">
          <form className='shadow p-4' onSubmit={handlesubmit} action="">


            <div className='mb-3'>
              <label htmlFor="name">Name:</label>
              <input value={name} onChange={e => namechange(e.target.value)} type="text"
                id='name'
                placeholder='Enter your name' className='form-control mt-1' />
            </div>

            <div className='mb-3'>
              <label htmlFor="name">email:</label>
              <input value={email} onChange={e => emailchange(e.target.value)} type="text"
                id='email'
                placeholder='Enter your email' className='form-control mt-1' />
            </div>

            <div className='d-flex'>
              <div className='mb-3'>
                <label htmlFor="name">Mobile  number:</label>
                <input value={mobile} onChange={e => mobilechange(e.target.value)} type="text"
                  id='mobile'
                  placeholder='Enter your number' className='form-control mt-1' />
              </div>


              <div className='mb-3 ms-3'>
                <label htmlFor="name">Vehicle number:</label>
                <input value={vehicle} onChange={e => vehiclechange(e.target.value)} type="text"
                  id='vehicle'
                  placeholder='Enter your number' className='form-control mt-1' />
              </div>
            </div>



            <div className='mb-2'>
              <label htmlFor="name">Password:</label>
              <input value={password} onChange={e => passwordchange(e.target.value)} type="password"
                id='password'
                placeholder='password' className='form-control mt-1' />
            </div>

            <button type='submit' className='btn btn-danger rounded w-100 shadow mt-2 mb-3'>CREATE ACCOUNT</button>


            <div className='d-flex flex-column align-items-center justify-content-center'>
              <a href=""><h5 className=' mt-4'>ALREADY HAVE AN ACCOUNT ?</h5></a>
              <Link to={'/login'}><button className='btn btn-primary' type='submit'>LOGIN</button></Link>

            </div>
          </form>

        </div>
        <div className="col-md-4"></div>

      </div>

    </div>
  )
}

export default Signup