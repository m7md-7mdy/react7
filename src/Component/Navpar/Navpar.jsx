import React, { Component } from 'react'
import'./NavBar.css'
import { Link } from 'react-router-dom'
export default class Navpar extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg   fixed-top">
                    <div className="container-fluid">
                      <Link className="navbar-brand fs-1 ps-5 text-white " to="/Img">START FRAMEWORK
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                  <Link className="nav-link active  nav10 text-white fw-bold"  aria-current="page" to="/LinkBOUT">ABOUT</Link>
                                </li>
                                <li className="nav-item">
                                  <Link className="nav-link text-white fw-bold" to="/PORTFOLIO">PORTFOLIO</Link>
                                </li>
                                <li className="nav-item">
                                  <Link className="nav-link pe-5 text-white fw-bold" to="/Form">CONTACT</Link>
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>

            </>
        )
    }
}
