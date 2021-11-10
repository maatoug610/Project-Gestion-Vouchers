import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import Header from './voucher/HeaderVoucher';
import './login.css';
import wave from './wave.png';
import avatar from './avatar.svg';
import phone from './phone.svg';

function Login() {
    {/* Declaration: */ }

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory();

    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            history.push("/dashboard")
        }
    }, [])



    async function login() {

        let item = { email, password };

        console.log(item.email,item.password);
        let result = await fetch("http://localhost:8000/api/login", {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            },
            body: JSON.stringify(item)
        });

        result = await result.json();
        if (result.status == '200') {
            localStorage.setItem("user-info", JSON.stringify(result.data))
            history.push("/home")
        } else if (result.status == '404') {
            alert("You don't have enter the True input")
        }
        console.log(result);
        //Notations des variables
        //camelCase : getAllUser (name function , varaible)
        //PascalCase : PostController (name class)
        //aa-dd-tttt : class, id CSS / name of route
        //aa_dd_tttt : name of table and field database 

        //


    }
    return (
        <div>
            <Header/>
            <h1>Login Page</h1>
    
            <img className="wave" src={wave} />
            <div className="containers">
                <div className="imgs">
                    <img src={phone} />
                </div>
                <div className="login-content">
                    <div className="horme">
                        <img src={avatar} />
                        <h2 className="title">Login</h2>
                        <div className="input-div one">
                            <div className="i">
                                <i className="fas fa-user"></i>
                            </div>
                            <div className="div">
                                
                                <input type="email" placeholder="email.." onChange={(e) => setEmail(e.target.value)} className="input" required />
                            </div>
                        </div>
                        <div className="input-div pass">
                            <div className="i">
                                <i className="fas fa-lock"></i>
                            </div>
                            <div className="div">
                                
                                <input type="password" placeholder="password.." onChange={(e) => setPassword(e.target.value)} className="input" required />
                            </div>
                        </div>
                        <a className="forget"href="#">Forgot Password?</a>
                        <button onClick={login} className="login-btn">Login</button>
                    </div>
                </div>
            </div>
            </div>
    )
}
export default Login;