import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from './voucher/HeaderVoucher';
import './login.css';
import wave from './wave.png';
import avatar from './avatar.svg';
import phone from './phone.svg';

function Register() {
    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            history.push("/home")
        }

    }, [])
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const history = useHistory();

    async function signUp() {
        let item = { name, email, password };
        console.warn(item)

        if (item.name === '') {
            alert('Please Enter Your Name ')
        }
        else if (item.email === '' || !/\S+@\S+\.\S+/.test(item.email)) {
            alert('Email Field is empty or False')
        }
        else if (item.password === '' || item.password.length <= 5) {
            alert('Password must be > 5 ')
        }
        else {
            let result = await fetch("http://localhost:8000/api/register", {
                method: 'POST',
                body: JSON.stringify(item),
                headers: {
                    "Content-Type": 'application/json',
                    "Accept": 'application/json'
                }
            })
            result = await result.json()
            localStorage.setItem("user-info", JSON.stringify(result))
            history.push("/home")
        }

    }
    return (
        <div>
            <Header />

            <h1>Register Page</h1>
            <img className="wave" src={wave} />
            <div className="containers">
                <div className="imgs">
                    <img src={phone} />
                </div>
                <div className="login-content">
                    <div className="horme">
                        <img src={avatar} />
                        <h2 className="title">Register</h2>
                        <div className="input-div one">
                            <div className="i">
                                <i className="fas fa-user"></i>
                            </div>
                            <div className="div">
                                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder="name" />
                            </div>
                        </div>
                        <div className="input-div one">
                            <div className="i">
                                <i className="fas fa-user"></i>
                            </div>
                            <div className="div">
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="email" />
                            </div>
                        </div>
                        <div className="input-div pass">
                            <div className="i">
                                <i className="fas fa-lock"></i>
                            </div>
                            <div className="div">

                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="password" />
                            </div>



                        </div>
                        
                        <button onClick={signUp} className="btn btn-primary">Sign Up</button>
                    </div>
                </div>
            </div>


        </div>
    )
}
export default Register;