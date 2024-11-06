import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

function SignUp(prop) {
    let Mystyle={display: "flex", flexDirection: "column", gap:"40px"}
    let MyStyle2={width:"fit-content"}

    const [values, setValues]=useState({name:"", mobile:"", username:"", password:""});  // hook to store input values
    function handleChange(e){       // function that triggers when any input is triggered
      const name=e.target.name   
      var value=e.target.value
      if(name!=="name"){           // dont allow spaces except name
        value=value.trim();
      }
      setValues({
        ...values,
        [name]:value
      })
    }

    function submit(e){        //submit function when form is submitted
      e.preventDefault();
      const name=values.name.trim()
      setValues({
        ...values,
        name:name
      })
      if(values.username==="" || values.password===""  || values.name==="" || values.mobile==="" ){
          alert("A Field cannot be blank")
        }
      else{
          prop.signUp(values);
      }
  }

  return (
    <div className="sign-up login main-body">
      {
            prop.isLoading?<Backdrop
            sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
            open={true}
          >
            <CircularProgress color="inherit" />
          </Backdrop>:
        <div className='form'>
        <form onSubmit={submit}>
            <div style={Mystyle}>
                <input type="text" value={values.name} onChange={(e)=>handleChange(e)} placeholder="Name"  name="name"/>
                <input type="text" value={values.mobile} onChange={(e)=>handleChange(e)} placeholder="mobile" name="mobile"/>
                <input type="text" value={values.username} onChange={(e)=>handleChange(e)} placeholder="username" name="username"/>
                <input type="password"  value={values.password} onChange={(e)=>handleChange(e)} placeholder="password" name="password"/>
            </div>
            <p class="error">{prop.error}</p>
            <button type="submit" class="btn btn-primary" style={MyStyle2}>Submit</button>
            
        </form>
        <p>Account already exist? <Link to="/login">Sign In</Link></p>
        </div>}
    </div>
  )
}
export default SignUp;