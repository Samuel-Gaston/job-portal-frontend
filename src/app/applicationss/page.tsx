"use client";
import { useEffect } from 'react';
import '../components/Nav.css';
import Sidebar from '../components/Sidebar';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { BsFillTrash3Fill } from "react-icons/bs";
type Application = {
  _id:number;
  name:string;
  email:string;
  phone:string;
  qualification:string;
  skill:string;
  location:string;
  hobbies:string;
  certificate:string;
}
const Page = () => {

    const router = useRouter();

        const [Application, setApplication] = useState<Application[]>([])

      const getAllApplications = async() =>{
    try {
      const response = await axios.get("https://job-server-portal.onrender.com/application")
      setApplication(response.data)
      console.log('response data', response.data);
    } catch (error) {
       console.error(error);
    }
      }
      useEffect(() =>{
        getAllApplications();
      },[]);

  //       const handleReply = (applicantEmail: string, applicantName?: string) => {
  //   const subject = encodeURIComponent("Regarding Your Job Application");
  //   const body = encodeURIComponent(
  //     applicantName
  //       ? `Hi ${applicantName},\n\nI am contacting you regarding your application.`
  //       : "Hello,\n\nI am contacting you regarding your application."
  //   );
    

  //   const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${applicantEmail}&su=${subject}&body=${body}`;
  //   window.open(gmailUrl, "_blank");
  // };

  const handleReply = (applicantEmail: string) => {
  const subject = encodeURIComponent("Application Received");
  const body = encodeURIComponent("We have received your application. We'll get back to you shortly.");
  
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${applicantEmail}&su=${subject}&body=${body}`;
  window.open(gmailUrl, "_blank");
};

      const deleteApplication = (id:number) =>{
        axios.delete(`https://job-server-portal.onrender.com/application/${id}`).then(() =>{
          setApplication(Application.filter(Application => Application._id !== id));
           toast.success("Application deleted Successfully.", {
                         style:{
                         minHeight:20,
                        fontSize:12,
                        fontWeight:'bold',
                         backgroundColor:'rgb(18, 18, 51)',
                       }
                        })  
        })
        
      }


  return (
    <div>
      <ToastContainer />
        <div className='dashboard'>
            <div className='left-dashboard'>
            <div className='logo' style={{marginLeft:5}}><span style={{ fontSize: 50, color: 'white', fontWeight: 'bold' }}>S</span><span style={{ fontSize: 30, color: 'green', fontWeight: 'bold' }}>earch</span></div>
     <Sidebar />
            </div>
            <div className='right-dashboard'>
        <h1 className='text-xl'>Applications Management</h1>
        <br />
        <br />
 <div className=" rounded-xl shadow-lg p-6 mt-10 w-full max-w-4xl mx-auto border border-gray-800" style={{ backgroundColor:'rgb(5, 5, 28)'}}>

 

    
      <div className="overflow-x-auto">
            {Application.map((application) => (
              <div key={application._id} style={{borderBottom:'1px solid gray',}}>
                <h1  style={{padding:10}}  className="py-3 px-6 text-gray-400">Name: {application.name}</h1>
               <p  style={{padding:10}}  className="py-3 px-6 text-gray-400">Email: {application.email}</p>
                <p  style={{padding:10}}  className="py-3 px-6 text-gray-400">Telephone: {application.phone}</p>
                <p  style={{padding:10}}  className="py-3 px-6 text-gray-400">Qualification: {application.qualification}</p>
                 <p  style={{padding:10}}  className="py-3 px-6 text-gray-400">Skills: {application.skill}</p>
                <p  style={{padding:10}}  className="py-3 px-6 text-gray-400">Location: {application.location}</p>
               <p  style={{padding:10}}  className="py-3 px-6 text-gray-400">Hobbies: {application.hobbies}</p>
                 <p  style={{padding:10}}  className="py-3 px-6 text-gray-400">Certificates: {application.certificate}</p>
                <p  style={{padding:10}}  className="py-3 px-6 text-gray-400">
    <BsFillTrash3Fill onClick={() => deleteApplication(application._id)} className='text-red-500 cursor-pointer inline' size={20} />
                </p>
            <div className='flex flex-wrap justify-end'>
                  <button onClick={() => handleReply(application.email)} style={{width:'100px', height:30, backgroundColor:'green', cursor:'pointer', marginRight:50, marginTop:-35, borderRadius:10}}>Reply</button>
            </div>

              </div>
            ))}
     

      </div>

 
    </div>
            </div>
        </div>
    </div>
  )
}

export default Page;