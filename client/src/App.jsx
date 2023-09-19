import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function App() {
  const[name,setName]=useState('')
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post('',{name,email,password})
    .then(result=>console.log(result))
    .catch(error => console.log(error))
  }
  return (
    <div className='d-flex justify-content-center align-items-center bg-dark vh-100'>
    
      <div className='bg-white p-3 rounded w-25'>
      <h1 className="justify-content-center align-items-center">Money Saving App</h1>
    <form onSubmit={handleSubmit}>
      <h2>Sign In</h2>
          <div class="mb-3">
          <label for="name"><strong>Name</strong></label>
            <input type="text" class="form-control rounded-0" id="name" autoComplete="off" name="names" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)}></input>
          </div>
          <div class="mb-3">
            <label for="email"><strong>Email</strong></label>
            <input type="text" class="form-control rounded-0" id="email" name="email"  autoComplete="off" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)}></input>
          </div>
          <div class="mb-3">
            <label for="password"><strong>Password</strong></label>
            <input type="password" class="form-control rounded-0" id="password" autoComplete="off" name="password" placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)}></input>
          </div>

          <button type="submit" className="btn btn-success w-100 rounded-0">Sign Up</button>
          <p></p>
          <Link type="submit" className="btn btn-success w-100 rounded-0">Login</Link>
          <p></p>
          
        </form>
        </div>
        </div>
       
    
  )
}

export default App
