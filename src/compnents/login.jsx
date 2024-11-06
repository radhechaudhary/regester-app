import React from 'react'
import { useState } from "react";
import { Link } from 'react-router-dom';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export default function Login(prop) {
    let Mystyle={
        display: "flex", flexDirection: "column", gap:"40px"
    };
    let Mystyle2={
        width:"fit-content"
    };
    let[username, addUsername]=useState("")
    let[password, addPassword]=useState("")

    function submit(e){
        e.preventDefault();
        if(username==="" || password===""){
            alert("username or passowrd cannot be blank")
          }
        else{
            prop.checkLogin(username, password)
        }
    }

  return (
    <div className="login main-body">
        {
            prop.isLoading?<Backdrop
            sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
            open={true}
          >
            <CircularProgress color="inherit" />
          </Backdrop>: <div className="form">
            <form onSubmit={submit}>
                <div style={Mystyle}>
                    <input type="text" placeholder="username" name="username" value={username} onChange={(e) => addUsername(e.target.value)}/>
                    <input type="password" placeholder="password" name="password" value={password} onChange={(e) => addPassword(e.target.value)}/>
                </div>
                <p className="error">{prop.error}</p>
                <button type="submit" className="btn btn-primary" style={Mystyle2}>Login</button>
            </form><br/>
            <p>Don't have an account? <Link to="/signup">Register</Link></p>
            </div> 
        }
       
    </div>
  )
}
