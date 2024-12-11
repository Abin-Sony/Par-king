import React from 'react'
import './Signup.css'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div className='addUser'>
      <h3>SIGNUP</h3>
      <form className='addUserform' action="">
        <div className='input1'>
          <label htmlFor="name">Name:</label>
          <input type="text" 
          id='name'
          placeholder='Enter your name'/>

<label htmlFor="name">email:</label>
          <input type="text" 
          id='email'
          placeholder='Enter your email'/>

<label htmlFor="name">Mobile  number:</label>
          <input type="text" 
          id='mobile'
          placeholder='Enter your number'/>


<label htmlFor="name">Vehicle number:</label>
          <input type="text" 
          id='vehicle'
          placeholder='Enter your number'/>



<label htmlFor="name">Password:</label>
          <input type="password" 
          id='password'
          placeholder='password'/>

          <button type='submit' className='btn btn-danger rounded shaddow'>Log in</button>

        </div>
      </form>
      <div className='signup'>
        <a href="">Allredy have an account ?</a><br />
       <Link to={'/login'}> <button className='btn btn-primary w-50%' type='submit'>LOGIN</button></Link>

      </div>
       
    </div>
  )
}

export default Signup