import React, {useState} from 'react';
import './App.css';
import {Link} from 'react-router-dom'

const Signup = () => {
    let [email,setEmail] = useState("");
    let [password,setPassword] = useState("");
    let [username,setUsername] = useState("");
    let [phone,setPhone] = useState("");
    let [role,setRole] = useState("");

    const signupFunc = async (event) =>{
        event.preventDefault();
        let data = {
            username : username,
            email : email,
            password : password,
            phone : phone,
            role : role
        }
        console.log(data);
        let url = "https://freshdesk-clone.herokuapp.com/api/register"
        //let url = 'http://localhost:4000/api/register'
        let response = await fetch(url,{
            method:"POST",
            body : JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
        let Fetchdata = await response.json();
        //console.log("Fetched Data", Fetchdata);
        if(Fetchdata.status===200){
            alert('Registration successfull');
        }
        setEmail("");
        setPassword("");
        setUsername("");
        setPhone("");
        setRole("");

    }

    return (
        <div className="container mt-3 d-flex justify-content-center">
            <div className="card col-6 card-bg text-center">
                   <h1>Register</h1>
                <div className="card-body w-75 mx-auto">
                    <form className="form-group" onSubmit={signupFunc} method="POST">
                        <input type="text" name="username" id="username" className="bg-light form-control mb-2" onChange={(e)=> setUsername(e.target.value)} value={username} placeholder="Username" required/>
                        <input type="email" name="email" id="email" className="bg-light form-control mb-2" onChange={(e)=> setEmail(e.target.value)} placeholder="Email" value={email} required/>
                        <input type="password" name="password" id="password" className="bg-light form-control mb-2" onChange={(e)=> setPassword(e.target.value)} value={password} placeholder="Password" required/>
                        <input type="tel" name="phone" id="phone" className="bg-light form-control mb-2" onChange={(e)=> setPhone(e.target.value)} placeholder="Phone" value={phone} required/>
                        <select className="form-control mb-2" onChange={(e)=>setRole(e.target.value)}>
                            <option value="">Select Role</option>
                            <option value="admin">Admin</option>
                            <option value="customer">Customer</option>
                            <option value="agent">Agent</option>
                        </select>
                        <button type="submit" className="btn btn-info px-3">Signup</button>
                    </form>
                    <div>
                        <Link to="/">Back to Login</Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Signup;