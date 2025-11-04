'use client';
import '../components/Nav.css';
import { useState } from 'react';
import { ToastContainer,toast } from 'react-toastify';
import axios from 'axios';
import { useRouter } from 'next/navigation';
const page = () => {
       const router = useRouter();
       const Back = () =>{
        router.push("/applicantDashboard");
       } 
   
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [phone, setphone] = useState("");
    const [qualification, setqualification] = useState("")
    const [skill, setskill] = useState("")
    const [location, setlocation] = useState("")
    const [hobbies, sethobbies] = useState("");
    const [certificate, setcertificate] = useState("")

  const handleSubmit = () => {
   

    if (!name || !email || !phone || !qualification || !skill || !location || !hobbies || !certificate) {
        toast.error("Error. Fill In.", {
                              style:{
                              minHeight:20,
                             fontSize:12,
                             fontWeight:'bold',
                              backgroundColor:'rgb(18, 18, 51)',
                            }
                    })
    
    }else{
      axios.post("http://localhost:5000/application", {name,email,phone, qualification, skill, location, hobbies, certificate}).then(() =>{
     
        setname(name)
        setemail(email)
        setphone(phone)
        setqualification(qualification)
        setlocation(location)
        setskill(skill)
        sethobbies(hobbies)
        setcertificate(certificate)
         toast.success("Application Sent Successfully.", {
                                 style:{
                                 minHeight:20,
                                fontSize:12,
                                fontWeight:'bold',
                                 backgroundColor:'rgb(18, 18, 51)',
                               }
                                })
                          setTimeout(() =>{
                           router.push("/applicantDashboard"); 
                             }, 2000) 
      }).catch((error) => toast.error("error", error))
    }

  

  };
 


  return (
    <div>
      <ToastContainer />
       <div className='Overall flex flex-wrap justify-center'>
         <div className='interview bg-blue-950 text-gray-300'>
          <h1 className='text-center text-white'>Forward well defined details. Apply Now!</h1>
                    <br />


          <p style={{marginLeft:20}}>Upload your complete name and the Job Postion!</p>
          <input  type='text'
             placeholder="Enter Name and the Job Title"
               onChange={(e) => setname(e.target.value)}
              className="block my-2"/>

                   <p style={{marginLeft:20}}>Upload your Email address!</p>
          <input  type='email'
             placeholder="Enter Email"
               onChange={(e) => setemail(e.target.value)}
              className="block my-2"/>

                   <p style={{marginLeft:20}}>Upload your reachable phone number!</p>
          <input type='number' 
             placeholder="Enter Number"
               onChange={(e) => setphone(e.target.value)}
              className="block my-2"/>

                 <p style={{marginLeft:20}}>Upload your highest qualification!</p>
          <textarea   
                placeholder="Enter Qualification"
        onChange={(e) => setqualification(e.target.value)}
              className="block my-2"/>


                  <p style={{marginLeft:20}}>Upload your set of skills!</p>
          <textarea   
                placeholder="Enter Skills"
                 onChange={(e) => setskill(e.target.value)}
              className="block my-2"/>

                <p style={{marginLeft:20}}>Upload your location!</p>
          <textarea   
                placeholder="Enter Location"
        onChange={(e) => setlocation(e.target.value)}
              className="block my-2"/>

                   <p style={{marginLeft:20}}>Upload your hobbies!</p>
          <textarea   
                placeholder="Enter Hobbies"
        onChange={(e) => sethobbies(e.target.value)}
              className="block my-2"/>

                <p style={{marginLeft:20}}>Upload other certicates! if you do not have, indicate "NONE"</p>
          <textarea   
                placeholder="Enter certificates"
        onChange={(e) => setcertificate(e.target.value)}
              className="block my-2"/>
          <br />
          <br />
          <button className='text-center text-white' onClick={handleSubmit}>Submit Now!</button>
          <p onClick={Back} style={{marginTop:-10, textAlign:'center', marginBottom:20, cursor:'pointer', padding:7}}
          className='hover:bg-gray-800'>Go Back</p>
           </div>
       </div>

    </div>
  )
}

export default page