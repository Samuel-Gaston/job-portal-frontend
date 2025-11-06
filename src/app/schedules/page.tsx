'use client';
import '../components/Nav.css';
import { useEffect, useState } from 'react';
import { ToastContainer,toast } from 'react-toastify';
import axios from 'axios';
import { useRouter } from 'next/navigation';
type Interview = {
    _id:number;
    name:string;
    title:string;
    date:string;
}
const page = () => {
       const router = useRouter();
       const Back = () =>{
        router.push("/applicantDashboard");
       } 
       
       const [Interviews, setInterviews] = useState<Interview[]>([])

       const getAllInterview = () =>{
        axios.get("https://job-server-portal.onrender.com/interview").then((res) =>{
            setInterviews(res.data)
        }).catch((error) => console.log(error))
       }
 
       useEffect(() =>{
        getAllInterview();
       },[])

     
 
  return (
    <div>
      <ToastContainer />
       <div className='Overall flex flex-wrap justify-center'>
         <div className='interview bg-blue-950' style={{ backgroundColor: 'rgb(5, 5, 36)', border:'2px solid green'}}>
          <h1 className='text-center text-white' style={{color:'green', fontWeight:'bold', fontSize:24}}>The Interview Schedules</h1>

          <div>
            {Interviews.map((interview) =>(
                <div key={interview._id} style={{borderBottom:'1px solid gray'}}>
                    <h1 style={{marginLeft:20, fontSize:14}} className='text-gray-300'><span style={{color:'green', fontWeight:'bold',}}>Name:</span> {interview.name}</h1>
                    <h1 style={{marginLeft:20, fontSize:14}} className='text-gray-300'><span style={{color:'green', fontWeight:'bold',}}>Job_Title:</span> {interview.title}</h1>
                    <h1 style={{marginLeft:20, fontSize:14}} className='text-gray-300'><span style={{color:'green', fontWeight:'bold',}}>Date:</span> {interview.date}</h1>
                    <br />
                </div>
            ))}
          </div>
    
      <p onClick={Back} style={{marginTop:30, textAlign:'center', marginBottom:20, cursor:'pointer', padding:6}} className='hover:bg-green-900 '>Go Back</p>
           </div>
       </div>


    </div>
  )
}

export default page