import React from 'react'
import About from './About'

function Header() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        {/* <a className="navbar-brand ms-5" href="#"><img src="  " class="rounded-circle" alt="Cinque Terre"/> Navbar</a> */}

        <div className="collapse navbar-collapse justify-content-center " id="navbarTogglerDemo03">
            <ul className="navbar-nav mr-5 mt-2 mt-lg-0 me-5">
            <li className="nav-item active me-5">
                <a className="nav-link fs-3 fw-bold " href="#home">HOME <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item me-5">
                <a className="nav-link fs-3 fw-bold" href="#about">ABOUT</a>
            </li>

            <li className="nav-item me-5">
                <a className="nav-link fs-3 fw-bold" href="#projects">PROJECTS</a>
            </li>

            <li className="nav-item ">
                <a className="nav-link fs-3 fw-bold" href="#contact">CONTACT</a>
            </li>
            
            </ul>
            
        </div>
        </nav>
    </div>
  )
}

export default Header