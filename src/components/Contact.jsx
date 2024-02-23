import React from 'react'
import resume from '../Resume.pdf'

function Contact() {
  return (
    <div className='mt-5 bg-light mb-5 p-4' id='contact'>
      <div className='d-flex align-items-center justify-content-center flex-column mt-5'>
        <h2 className=''>CONTACT ME</h2>
        <div className='mt-4'>
          <h5><i class="fa-solid fa-envelope"></i> {'  '} <a style={{textDecoration:'none',color:'black'}} href="mailto:chinjukt97@gmail.com">chinjukt97@gmail.com</a></h5>
        </div>
        <div className='mt-4'>
          <h5><i class="fa-solid fa-phone"></i> {'   '} <a style={{textDecoration:'none',color:'black'}} href="tel:9072992042">9072992042</a></h5>
        </div>
        <div className='mt-5 mb-5'>
          <a className='btn btn-primary' download="resume-PDF-document" href={resume}>DOWNLOAD CV</a>
        </div>

      </div>

    </div>
  )
}

export default Contact