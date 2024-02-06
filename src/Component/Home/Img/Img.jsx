import React, { Component } from 'react'
import Titel from './Titel'
import './Img.css'
import img1 from '../../../blog/cat.jpg'
export default class Img extends Component {

    render() {
        return (
            <div className='demo'>
                <div className='container-fluid '>
                    <div
                        class="row " >
                        <div className='col-md-12 d-flex  justify-content-center pt-5 mt-5'>
                            <img src={img1} className='  rounded-circle' height='400px' alt="" />
                        </div>
                        <div className='col-md-12 '>
                            <Titel />

                        </div>
                  
                    </div>

                </div>
            </div>
        )
    }

}
