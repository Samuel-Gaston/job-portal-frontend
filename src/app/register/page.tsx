'use client';
import '../components/Nav.css';
import { useState } from 'react';
import { ToastContainer,toast } from 'react-toastify';
import axios from 'axios';
import { useRouter } from 'next/navigation';
axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://localhost:5000";
const page = () => {
       const router = useRouter();
       const login = () =>{
        router.push("/login");
       } 
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
   const [password, setpassword] = useState("");
   const [cpassword, setcpassword] = useState("");



    const add = () =>{
        if(!name || !email || !password || !cpassword){
         toast.error("Error. please fill In.", {
          style:{
          backgroundColor:'rgb(18, 18, 51)',
            color:'white',
            minHeight:'40px',
            fontSize:'13px'
          }})
        }
        else if(password !== cpassword){
       toast.error("Error. passwords do not matched.", {
          style:{
            backgroundColor:'rgb(18, 18, 51)',
            color:'white',
            minHeight:'40px',
            fontSize:'13px'
          }})    
        }
        else{
     axios.post("/user", {name, email, password, cpassword}).then((res) =>{
        toast.success(`${res.data.msg}`, {
          style:{
           backgroundColor:'rgb(18, 18, 51)',
            color:'white',
            minHeight:'40px',
            fontSize:'13px'
          }}
        );
        router.push("/login")
     }).catch((error) => toast.error(`${error.response.data.msg}`,{
        style:{
           backgroundColor:'rgb(18, 18, 51)',
            color:'white',
            minHeight:'40px',
            fontSize:'13px'
          }
     }))
 }
    }
  return (
    <div>
      <ToastContainer />
       <div className='Overall flex flex-wrap justify-center'>
         <div className='register bg-blue-950'>
          <h1 className='text-center text-white'>Sign-Up</h1>
          <p style={{marginLeft:20}}>Hey, Nice meeting you!</p>
          <br />
          <input type='text' placeholder='Name here' value={name} onChange={(e) => setname(e.target.value)} />
          <br />
          <br />
          <input type='email' placeholder='email here' value={email} onChange={(e) => setemail(e.target.value)} />
          <br />
          <br />
          <input type='password' placeholder='password here' value={password} onChange={(e) => setpassword(e.target.value)} />
          <br />
          <br />
          <input type='password' placeholder='Re-Write password again' value={cpassword} onChange={(e) => setcpassword(e.target.value)} />
          <br />
          <br />
          <button className='text-center text-white' onClick={add}>Submit Now!</button>
          <p style={{marginTop:-15, textAlign:'center', marginBottom:30}}>Aleady have an account? <a onClick={login} style={{color:'green', fontWeight:'bold', cursor:'pointer'}}>Sign-In</a></p>
        </div>
       </div>
    </div>
  )
}

export default page