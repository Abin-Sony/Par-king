import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='addUser'>
      <h3>LOGIN</h3>
      <form className='addUserform' action="">
        <div className='input1'>
          <label htmlFor="name">Name:</label>
          <input type="text" 
          id='name'
          placeholder='Enter your name'/>




<label htmlFor="name">Password:</label>
          <input type="password" 
          id='password'
          placeholder='password'/>

          <button type='submit' className='btn btn-danger rounded shaddow'>Log in</button>

        </div>
      </form>
      <div className='signup'>
        <a href="">Dont  have an account ?</a><br />
       <Link to={'/signup'}> <button className='btn btn-primary w-50%' type='submit'>Signup</button></Link>

      </div>
       
    </div>
  )
}

export default Login