import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loginAction } from '../actions/authAction'
export default function Login() {

    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const dispatch = useDispatch()
    const handleLogin = (e) => {
        e.preventDefault()
        dispatch(loginAction({ email, password }))
        e.target.reset()
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 offset-sm-3">
                        <div className="card">
                            <div className="card-header text-center">Login</div>
                            <div className="card-body">
                                <form onSubmit={handleLogin}>
                                    <input type="email" onChange={e => setemail(e.target.value)} className="form-control" placeholder='Enter Your Email' />
                                    <br />
                                    <input type="password" onChange={e => setpassword(e.target.value)} className="form-control" placeholder='Enter Your Password' />
                                    <br />
                                    <button className="btn btn-success w-100">Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
