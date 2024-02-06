import React, { Component } from 'react'
import './Form.css'
export default class Form extends Component {
    
    render() {
        return (
            <div className='mo'>
                <h2 className=' text-center pt-5 fs-1'>CONATCT SECTION</h2>
                <h1 className='maro3 text-center'>*</h1>
                <div className="container w-75  me-5">
                    <form className='w-75'>
                        <div className="py-3">
                            <input className="form-control  border-0 " placeholder="User Name" maxLength={10} name="name" id="name" type="text" required />
                            <hr />
                            <input className="form-control border-0" placeholder="User Age" maxLength={10} name="age" id="age" type="text" required />
                            <hr />
                            <input className="form-control border-0" placeholder="User Email" maxLength={10} name="email" id="email" type="text" required />
                            <hr />
                            <input className="form-control border-0" placeholder="User Password" maxLength={10} name="password" id="password" type="password" required />
                            <hr />
                        </div>
                        <div>
                            <button className="btn  btn-success mt-4 mb-5"> Send Massage</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
