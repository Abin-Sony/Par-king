import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>

      <div className='container'>
        
        <div className='p-3'>
          <marquee behavior="" direction="left" scrollamount="20" > <h1 className='text-danger fw-bold'><img src=" https://t4.ftcdn.net/jpg/01/75/41/99/360_F_175419966_DvmsbkV48YXpByUUcbFamnYq7KEvDTuG.jpg" style={{ width: '100px' }} alt="" /> WELCOME PAR-KING  </h1> </marquee>
        </div>

        <div className='row' style={{ height: '250px' }}>
          <div className="col-md-4"></div>
          
          <div className="col-md-4 mt-5" >
            <Link to={'/login'}><button className='btn btn-danger rounded shadow w-100 mt-5 mb-4'>CLICK HERE</button></Link>
          </div>
          
          <div className="col-md-4"></div>

        </div>
      </div>


    </>

  )
}

export default Home