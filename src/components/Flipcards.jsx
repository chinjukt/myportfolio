import React from 'react'
import '../components/Flipcards.css'
import bmi from '../images/bmi.png'
import reliance from '../images/reliance.png'
import resturant from '../images/restaurant.png'
import shineme from '../images/shineme.png'

function Flipcards() {
    
  return (
    <>
    <div className="container-fluid d-flex align-items-center justify-content-center flex-row">
        <div className="box">
            <div className="body">
                <div className="imgContainer">
                    <img src={bmi} alt="no-image" />
                    
                </div>
                <div className="content d-flex flex-column align-items-center justify-content-center">
                    <div>
                        <h3 className="text-white fs-5">BMI Calculator</h3>
                        <p className="fs-6 text-white">This is a simple responsive BMI calculator using react js.</p>
                        {/* <div className='d-flex align-items-center justify-content-center'> */}
                            <a className='mt-4 ' href="https://polite-daifuku-48298e.netlify.app/" target='_blank'><i class="fa-solid fa-link fa-2x" style={{color:'white'}}></i></a>
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </div>
        <div className="box">
            <div className="body">
                <div className="imgContainer">
                    <img src={reliance} alt="no-image"/>
                    
                </div>
                <div className="content d-flex flex-column align-items-center justify-content-center">
                    <div>
                        <h3 className="text-white fs-5">Reliance Digital Clone</h3>
                        <p className="fs-6 text-white">I created a clone of the Reliance website using React, </p>
                        {/* <div className='d-flex align-items-center justify-content-center'> */}
                            <a className='mt-4 ' href="https://coruscating-cat-f3fd1d.netlify.app/" target='_blank'><i class="fa-solid fa-link fa-2x" style={{color:'white'}}></i></a>
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </div>
        <div className="box">
            <div className="body">
                <div className="imgContainer">
                    <img src={resturant} alt="no image"/>
                    
                </div>
                <div className="content d-flex flex-column align-items-center justify-content-center">
                    <div>
                        <h3 className="text-white fs-5">Resturant Website</h3>
                        <p className="fs-6 text-white">This is a simple resturant website design created using html and css</p>
                        <a className='mt-4 ' href="https://jazzy-lamington-c3f421.netlify.app/" target='_blank'><i class="fa-solid fa-link fa-2x" style={{color:'white'}}></i></a>

                    </div>
                </div>
            </div>
        </div>
        <div className="box">
            <div className="body">
                <div className="imgContainer">
                    <img src={shineme} alt="no-image"/>
                    
                </div>
                <div className="content d-flex flex-column align-items-center justify-content-center">
                    <div>
                        <h3 className="text-white fs-5">Carservice booking website</h3>
                        <p className="fs-6 text-white">This is a MERN stack car service booking website, includes both admin and user side </p>
                        <a className='mt-4 ' href="https://car-service-booking-app.vercel.app/" target='_blank'><i class="fa-solid fa-link fa-2x" style={{color:'white'}}></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Flipcards