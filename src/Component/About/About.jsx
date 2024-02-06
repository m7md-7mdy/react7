import React, { Component } from 'react'
import './About.css'

export default class About extends Component {
    render() {
        return (
            <div className='about'>
                <div className='  text-white py-5'>
                    <div className=' container text-center'>
                        <div className=' row justify-content-center pt-5 mt-5'>
                            <h2 className='fs-1'> ABOUT COMPONENT</h2>
                            <h1 className='maro1 text-center'>*</h1>

                           
                            <div className=' col-md-6'>
                                <p>
                                    Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                            </div>
                            <div className=' col-md-6'>
                                <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
