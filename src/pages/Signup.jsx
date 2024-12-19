import React, { useState } from 'react'
import './Signup.css'
import { Link } from 'react-router-dom'

function Signup() {

  const [name, namechange] = useState("");
  const [email, emailchange] = useState("");
  const [mobile, mobilechange] = useState("");
  const [vehicle, vehiclechange] = useState("");
  const [password, passwordchange] = useState("");

  const handlesubmit=async(e)=>{
    e.preventDefault();
    let signupobj= {name,email,mobile,vehicle,password};
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
    <div className='addUser'>
      <h3>SIGNUP</h3>
      <form className='addUserform' onSubmit={handlesubmit} action="">
        <div className='input1'>
          <label htmlFor="name">Name:</label>
          <input value={name} onChange={e=>namechange(e.target.value)} type="text" 
          id='name'
          placeholder='Enter your name'/>

<label htmlFor="name">email:</label>
          <input value={email} onChange={e=>emailchange(e.target.value)} type="text" 
          id='email'
          placeholder='Enter your email'/>

<label htmlFor="name">Mobile  number:</label>
          <input value={mobile} onChange={e=>mobilechange(e.target.value)} type="text" 
          id='mobile'
          placeholder='Enter your number'/>


<label htmlFor="name">Vehicle number:</label>
          <input value={vehicle} onChange={e=>vehiclechange(e.target.value)} type="text" 
          id='vehicle'
          placeholder='Enter your number'/>



<label htmlFor="name">Password:</label>
          <input value={password} onChange={e=>passwordchange(e.target.value)} type="password" 
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