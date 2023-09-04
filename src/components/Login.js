import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login({ isLogin, login }) {
    const [data, setData] = useState({})
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (data.name && data.password) {
            isLogin(true)
            setData({})
            navigate("/")
        } else {
            isLogin(false)
        }
    }

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    return (
        <div>
            {login ? (
                <div className='m-5 pt-5 w-25 mx-auto'>
                    <p className='fw-bold'>You are logged in</p>
                    <button className='btn btn-info btn-lg text-white' onClick={()=>isLogin(false)}>Logout</button>
                </div>
            ) : (
                <form className='m-5 pt-5 w-25 mx-auto form' onSubmit={handleSubmit}>
                    <div className=''>
                        <input type='text' placeholder='Username' className='form-control' name='name' onChange={handleChange} />
                    </div>
                    <div className='my-4'>
                        <input type='password' placeholder='Password' className='form-control' name='password' onChange={handleChange} />
                    </div>
                    <div className=''>
                        <button className='btn btn-info text-white'>Login</button>
                    </div>

                </form>
            )
            }

        </div>
    )
}

export default Login