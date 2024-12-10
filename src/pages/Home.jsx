import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      
    <div className='row'>
    <marquee  behavior="" direction="left" scrollamount="20" > <img src=" https://t4.ftcdn.net/jpg/01/75/41/99/360_F_175419966_DvmsbkV48YXpByUUcbFamnYq7KEvDTuG.jpg"style={{width:'100px'}} alt="" /> Welcome Par-King   </marquee>
           
        <div className="col-md-4"></div>
        <div className="col-md-4">
        <Link to={'/login'}><button className='btn btn-danger rounded shaddow w-100'>CLICK HERE</button></Link>
        </div>
        <div className="col-md-4"></div>

    </div>
 

</>
   
  )
}

export default Home