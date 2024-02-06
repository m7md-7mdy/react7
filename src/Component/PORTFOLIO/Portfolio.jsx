import React, { Component } from 'react'
import './Portfolio.css'
import img2 from '../../blog/poert1.png'
import img3 from '../../blog/port2.png'
import img4 from '../../blog/port3.png'

export default class Portfolio extends Component {
    render() {
        return (
            <div className='test'>
                <h2 className=' text-center fs1'>PORTFOLIO COMPONENT</h2>
                <h1 className='maro2  text-center'>*</h1>
                <div className=' container mb-4  '>
                    <div className='row'>
                        <div className=' col-md-4 gy-4 '>
                            <div className='item position-relative overflow-hidden rounded ' data-bs-toggle="modal" data-bs-target="#img-1">
                                <div>   <img src={img2} className='w-100 test' height='250px' alt="" /></div>
                                <div className='layer position-absolute'>
                                    <h2 className=' d-flex justify-content-center align-items-center '><i className="fa-solid icon6 fa-plus" />
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className=' col-md-4 gy-4 '>
                            <div className='item position-relative overflow-hidden rounded ' data-bs-toggle="modal" data-bs-target="#img-2">
                                <div>   <img src={img3} className='w-100 test' height='250px' alt="" /></div>
                                <div className='layer position-absolute'>
                                    <h2 className=' d-flex justify-content-center align-items-center '><i className="fa-solid icon6 fa-plus" />
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className=' col-md-4 gy-4 '>
                            <div className='item position-relative overflow-hidden rounded ' data-bs-toggle="modal" data-bs-target="#img-3">
                                <div>   <img src={img4} className='w-100 test' height='250px' alt="" /></div>
                                <div className='layer position-absolute'>
                                    <h2 className=' d-flex justify-content-center align-items-center '><i className="fa-solid icon6 fa-plus" />
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className=' col-md-4 gy-4 '>
                            <div className='item position-relative overflow-hidden rounded ' data-bs-toggle="modal" data-bs-target="#img-4">
                                <div>   <img src={img2} className='w-100 test' height='250px' alt="" /></div>
                                <div className='layer position-absolute'>
                                    <h2 className=' d-flex justify-content-center align-items-center '><i className="fa-solid icon6 fa-plus" />
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className=' col-md-4 gy-4 '>
                            <div className='item position-relative overflow-hidden rounded ' data-bs-toggle="modal" data-bs-target="#img-5">
                                <div>   <img src={img3} className='w-100 test' height='250px' alt="" /></div>
                                <div className='layer position-absolute'>
                                    <h2 className=' d-flex justify-content-center align-items-center '><i className="fa-solid icon6 fa-plus" />
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className=' col-md-4 gy-4 '>
                            <div className='item position-relative overflow-hidden rounded ' data-bs-toggle="modal" data-bs-target="#img-6">
                                <div>   <img src={img4} className='w-100 test' height='250px' alt="" /></div>
                                <div className='layer position-absolute'>
                                    <h2 className=' d-flex justify-content-center align-items-center '><i className="fa-solid icon6 fa-plus" />
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* --------------------------------------------------------- */}
                <div>
                    {/* Modal */}
                    <div className="modal fade" id="img-1" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-body p-0">
                                    <img src={img2}className='w-100' alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal fade" id="img-2" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-body p-0">
                                    <img src={img3} className='w-100' alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal fade" id="img-3" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-body p-0">
                                    <img src={img4} className='w-100' alt="" />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="modal fade" id="img-4" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">

                                <div className="modal-body p-0">
                                    <img src={img2} className='w-100' alt="" />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="modal fade" id="img-5" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-body p-0">
                                    <img src={img3} className='w-100' alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal fade" id="img-6" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-body p-0">
                                    <img src={img4} className='w-100' alt="" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}
