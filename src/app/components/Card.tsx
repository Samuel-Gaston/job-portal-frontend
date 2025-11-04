"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
type Job = {
  _id:number;
  title:string;
  qualification:string;
  description:string;
  skill:string;
  deadline:string;
}
const Card = () => {
        const router = useRouter();
        const Apply = () =>{
            router.push("/login");
        }

         const variants = {
        hidden:{opacity:0, x:-100},
         visible:{opacity:1, x:0}
        }

        const [Jobs, setJobs] = useState<Job[]>([])

        const getAllJobs = () =>{
          axios.get("http://localhost:5000/job").then((res) =>{
            setJobs(res.data)
          }).catch((error) => toast.error("error", error))
        }

        useEffect(() =>{
           getAllJobs();
        },[])

  return (
    <div id='job'>
      <ToastContainer />
              <h1 className='text-center text-2xl' style={{marginTop:200}}>Featured Jobs</h1>
              <br />
<div className='flex flex-wrap justify-center'>
            <motion.div className='Card grid grid-cols-2' style={{gap:20}}>
            {Jobs.map((d) =>(
                <motion.div key={d._id} className='sub-card' style={{}}
                                         variants={variants}
        initial="hidden"
       whileInView= "visible"
       viewport={{once:false, amount:0.5}}
        transition={{ duration: 0.5}}>
                    <h1><span style={{color:'green', fontWeight:'bold',}}>Title: </span> <span className='text-gray-300'>{d.title}</span></h1>
                    <p> <span style={{color:'green', fontWeight:'bold',}}>Qualification: </span> <span className='text-gray-300'>{d.qualification}</span></p>
                    <p><span style={{color:'green', fontWeight:'bold',}}>Description: </span> <span className='text-gray-300'>{d.description}</span></p>
                    <p><span style={{color:'green', fontWeight:'bold',}}>Skills: </span> <span className='text-gray-300'>{d.description}</span></p>
                    <p><span style={{color:'green', fontWeight:'bold',}}>Deadline: </span> <span className='text-gray-300'>{d.deadline}</span></p>
                   <div className='flex flex-wrap justify-end'>
                     <button onClick={Apply}>Apply</button>
                   </div>
                </motion.div>
            ))}
        </motion.div>
</div>



    </div>
  )
}

export default Card;
