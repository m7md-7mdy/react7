import React, { Component } from 'react'
import './Around.css'
export default class Around extends Component {
    render() {
        return (

            <div className=' py-5 text-white aro' >
                <div className='container'>
                    <div className='row text-center justify-content-center  align-items-center pt5'>
                        <div className='col-md-4'>
                            <h2>  LOCATION</h2>
                            <p> 2215 John Daniel Drive</p>
                            <span>Clark, MO 65243</span>
                        </div>
                        <div className='col-md-4'>
                            <h2>  AROUND THE WEB</h2>
                            <i class="fa-brands fa-facebook icon1 ms-2 p-2"></i>
                            <i class="fa-brands fa-twitter icon1  ms-2 p-2"></i>
                            <i class="fa-brands fa-linkedin icon1  ms-2 p-2"></i>
                            <i class="fa-solid fa-globe icon1  ms-2 p-2"></i>
                        </div>
                        <div className='col-md-4'>
                            <h2>  ABOUT FREELANCER</h2>
                            <p> Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
