'use client';
import '../components/Nav.css';
import {  useState } from 'react';
import { ToastContainer,toast } from 'react-toastify';
import axios from 'axios';
import { FaUserCircle } from "react-icons/fa";
import { useRouter } from 'next/navigation';
axios.defaults.withCredentials = false;
axios.defaults.baseURL = "https://job-portal-server1-a8ij.onrender.com";

const page = () => {
       const router = useRouter(); 
       const register = () =>{
        router.push("/register");
       }

      

    const [email, setemail] = useState("")
   const [password, setpassword] = useState("");


    const add = () =>{
        if( !email || !password ){
         toast.error("Error. please fill In.", {
          style:{
            backgroundColor:'rgb(18, 18, 51)',
            color:'white',
            minHeight:'40px',
            fontSize:'13px'
          }})
        }
        else{
          axios.post(`${"https://job-portal-server1-a8ij.onrender.com/admin/auth"}`, {email, password}).then((res) =>{
                  toast.success(`${res.data.msg}`,{
                style:{
            backgroundColor:'rgb(18, 18, 51)',
            color:'white',
            minHeight:'40px',
            fontSize:'13px'
          }
            } )
            router.push("/adminDashboard")
                }).catch((error) =>{
                axios.post(`${"https://job-portal-server1-a8ij.onrender.com/user/auth"}`, {email, password}).then(res =>{
                  toast.success(`${res.data.msg}`, {
                style:{
            backgroundColor:'rgb(18, 18, 51)',
            color:'white',
            minHeight:'40px',
            fontSize:'13px'
          }
            })
              router.push("/applicantDashboard");
             }).catch((error) => toast.error(`${error.response.data.msg}`,{
                style:{
               backgroundColor:'rgb(18, 18, 51)',
            color:'white',
            minHeight:'40px',
            fontSize:'13px'
          }
            })
          )
               
                })
          
          }
    }
  return (
    <div>
      <ToastContainer />
       <div className='Overall flex flex-wrap justify-center'>
         <div className='register bg-blue-950'>
          <h1 className='text-center text-white'>Sign-In</h1>
         <div className='flex flex-wrap justify-center' style={{marginTop:10}}>
           <FaUserCircle className="text-6xl text-gray-400 mx-auto mb-4" />
         </div>
          <p style={{marginLeft:20}}>Hey, Confirmed yourself!</p>
          <br />
          <input type='email' placeholder='email here' value={email} onChange={(e) => setemail(e.target.value)} />
          <br />
          <br />
          <input type='password' placeholder='password here' value={password} onChange={(e) => setpassword(e.target.value)} />
          <br />
          <br />
          <button className='text-center text-white' onClick={add}>Submit Now!</button>
          <p style={{marginTop:-15, textAlign:'center', marginBottom:30}}>Do not have an account? <a style={{color:'green', fontWeight:'bold', cursor:'pointer'}} onClick={register}>Sign-Up</a></p>
        </div>
       </div>
    </div>
  )
}

export default page