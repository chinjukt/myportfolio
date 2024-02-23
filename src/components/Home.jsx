import React from 'react'

function Home() {
  return (
    <>
    <div id='home' style={{height:'500px',width:'100%',background: 'rgb(225,225,227)',
background: 'linear-gradient(90deg, rgba(225,225,227,0.70640756302521) 0%, rgba(236,236,237,1) 100%, rgba(250,250,250,0.44870448179271705) 100%)'}}>
        <div className='d-flex flex-column justify-content-center align-items-center h-100'>
            <h2 className='fw-bolder'>HEY, I'M CHINJU K T</h2>
            <div className='w-50'>
                <p className='mt-3 fs-4' style={{textAlign:'center'}}>A Full stack Web Developer building the Frontend and backend of Websites
                and Web Applications that leads to the success of the overall product</p> 
            </div>

            <div className='mt-4'>
                <a className='btn btn-primary fw-bolder' href='#projects'>PROJECTS</a>
            </div>
            
        </div>
    </div>
    </>
  )
}

export default Home