import React from 'react'
import Flipcards from './Flipcards'

function Projects() {
  return (
    <div className='mt-5 bg-light mb-5 p-4' >
        <div className='d-flex align-items-center justify-content-center flex-column mt-5' id='projects'>
            <h2 className=''>PROJECTS</h2>
            <div>
                <Flipcards/>
            </div>
            <div className='mt-4 mb-5 d-flex justify-content-center align-items-center'>
                <a href="https://app.netlify.com/teams/chinjukt/sites" className='btn btn-primary fw-bolder' target='_blank'>EXPLORE MORE</a>
            </div>
      </div>
    </div>
  )
}

export default Projects