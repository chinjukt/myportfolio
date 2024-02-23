import React from 'react'

function Footer() {
  return (
    <div>
    <div className='d-flex align-items-center justify-content-center bg-light' style={{height:'200px'}}>
        <div className='d-flex align-items-center justify-content-between w-100'>
            <div className='ms-5' style={{color:'black',width:'500px'}}>
                <h4> CHINJU K T</h4>
                <h6>A Full stack Web Developer building the Frontend and backend of Websites and Web Applications that leads to the success of the overall product</h6>
            </div>
        

            <div className="links d-flex flex-column me-3">
                <h4 style={{color:'black'}}>SOCIAL</h4>
                <p><a href='https://github.com/chinjukt?tab=repositories' target='_blank' className='me-3' style={{textDecoration:'none',color:'black'}}><i class="fa-brands fa-github fa-2x"></i></a>
                <a href='https://www.linkedin.com/in/chinju-thankachan-b64a9a167/' target='_blank' className='me-5' style={{textDecoration:'none',color:'black'}}><i class="fa-brands fa-linkedin fa-2x"></i></a>
                </p>
            </div>

        </div>
        
        

    </div>
    <p style={{color:'black'}} className='d-flex flex-column justify-content-center align-items-center bg-light pb-4'>© Copyright 2024. Made by Chinju K T</p>
</div>
  )
}

export default Footer