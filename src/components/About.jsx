import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function About() {
  return (
    <div className='mt-5 bg-light mb-5 p-4' id='about'>
      <div className='d-flex align-items-center justify-content-center flex-column mt-5'>
        <h2 className=''>ABOUT ME</h2>
        <p className='mt-3 fs-4 w-50' style={{textAlign:'center'}}>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
      </div>
      <div className='d-flex align-items-center justify-content-between mt-5 mb-5'>
        <div className='w-100' >
          <h3>Get to know me!</h3>
          <div className='m-4'>
            <h5 style={{textAlign:'justify'}}>I'm a Fullstack Web Developer building the Front-end and backend of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.</h5>

            <h5 style={{textAlign:'justify'}}>I have a strong understanding of responsive design principles, ensuring that the websites I build look great and function flawlessly across all devices.</h5>

            <h5 style={{textAlign:'justify',marginTop:'12px'}}>I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</h5>
          </div>

          <div className='mt-5 ms-4'>
            <a className='btn btn-primary fw-bolder' href='#contact'>CONTACT</a>
          </div>
        </div>
        <div className='w-100'>
          <h3>My Skills</h3>
          
          <div className='ms-5 mt-5'>
            <Row>
              
              <Col sm={12} md={4} lg={3} xl={2} className='shadow rounded me-2 d-flex justify-content-center align-items-center' style={{}}>
                  <h4 className='p-3'>HTML</h4>
              </Col>
              <Col sm={12} md={4} lg={3} xl={2} className='shadow rounded me-2 d-flex justify-content-center align-items-center' >               
                  <h4 className='p-3'>CSS</h4>
              </Col>
              <Col sm={12} md={4} lg={3} xl={2} className='shadow rounded me-2 d-flex justify-content-center align-items-center' >  
                  <h4 className='p-3'>Javascript</h4>
              </Col>
              <Col sm={12} md={4} lg={3} xl={2} className='shadow rounded me-2 d-flex justify-content-center align-items-center' >
                  <h4 className='p-3'>React</h4>
              </Col>
              <Col sm={12} md={4} lg={3} xl={2} className='shadow rounded me-2 d-flex justify-content-center align-items-center' >
                  <h4 className='p-3'>MERN</h4>
              </Col>
              
            
              
              
              <Col sm={12} md={4} lg={3} xl={2} className='shadow rounded me-2 d-flex justify-content-center align-items-center' >               
                  <h4 className='p-3'>Express.js</h4>
              </Col>
              <Col sm={12} md={4} lg={3} xl={2} className='shadow rounded me-2 d-flex justify-content-center align-items-center' >  
                  <h4 className='p-3'>MongoDB</h4>
              </Col>
              <Col sm={12} md={4} lg={3} xl={2} className='shadow rounded me-2 d-flex justify-content-center align-items-center' >
                  <h4 className='p-3'>Node.js</h4>
              </Col>
              <Col sm={12} md={4} lg={3} xl={2} className='shadow rounded me-2 d-flex justify-content-center align-items-center' >
                  <h4 className='p-3'>Github</h4>
              </Col>

              <Col sm={12} md={4} lg={3} xl={2} className='shadow rounded me-2 d-flex justify-content-center align-items-center' >
                  <h4 className='p-3'>mysql</h4>
              </Col>

              <Col sm={12} md={4} lg={3} xl={2} className='shadow rounded me-2 d-flex justify-content-center align-items-center' >
                  <h4 className='p-3'>PHP</h4>
              </Col>

              <Col sm={12} md={4} lg={3} xl={2} className='shadow rounded me-2 d-flex justify-content-center align-items-center' >
                  <h4 className='p-3'>Codeigniter</h4>
              </Col>

              <Col sm={12} md={4} lg={3} xl={2} className='shadow rounded me-2 d-flex justify-content-center align-items-center' >
                  <h4 className='p-3'>RestAPI</h4>
              </Col>
              
            </Row>

            
          </div>
        </div>      
      </div>
    </div>
  )
}

export default About
