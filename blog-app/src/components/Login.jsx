import { Button,TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const[form,setForm]=useState({
    email:'',
    password:''
  })
  const navigate=useNavigate();
  function capValue(){
    // console.log(form);
    axios.post('http://localhost:3000/user/login',form).then((res)=>{
      alert(res.data.message);
      if(res.data.token){
       sessionStorage.setItem('logintoken',res.data.token)
       navigate('/blogs');
      }
      else{
      navigate('/');
      }
    }).catch((error)=>{
      alert('Invalid login');
    })

  }
  return (
    <div style={{margin:'10%'}}>
        
        <Typography variant='h3' style={{color:"black"}}>BlogApp Login</Typography>
        <br />
       <div>
        <TextField label='Email' variant='outlined' name='email' onChange={(e)=>{
          setForm({...form,email:e.target.value})
        }}></TextField>
        </div>
        <br />
        <div>
        <TextField label='password'variant='outlined' name='password' onChange={(e)=>{
           setForm({...form,password:e.target.value})
        }}></TextField>
        </div>
        <br />
        <Button color='primary' variant='contained' onClick={capValue}>Login</Button>
        <div>
            <Link to={'/signup'}>New user? Please register here</Link>
        </div>
    </div>
  )
}

export default Login