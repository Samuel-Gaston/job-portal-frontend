"use client";
import { useEffect } from 'react';
import '../components/Nav.css';
import Sidebar from '../components/Sidebar';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { BsFillTrash3Fill } from "react-icons/bs";
type Job = {
  _id:number;
  title:string;
  qualification:string;
  description:string;
  skill:string;
  deadline:string;
}
const Page = () => {

    const router = useRouter();

      const [showModal, setShowModal] = useState(false)
      const [title, settitle] = useState("")
      const [qualification, setqualification] = useState("")
      const [description, setdescription] = useState("")
       const [skill, setskill] = useState("")
        const [deadline, setdeadline] = useState("")


        const [Job, setJob] = useState<Job[]>([])

      const getAllJob = async() =>{
    try {
      const response = await axios.get("http://localhost:5000/job")
      setJob(response.data)
      console.log('response data', response.data);
    } catch (error) {
       console.error(error);
    }
      }
      useEffect(() =>{
        getAllJob();
      },[]);


      const deleteJob = (id:number) =>{
        axios.delete(`http://localhost:5000/job/${id}`).then(() =>{
          setJob(Job.filter(Job => Job._id !== id));
        })
      }

             const handlesubmit = () =>{
                    if(!title || !qualification || !description || !skill || !deadline){
          toast.error("Error. Fill In.", {
                         style:{
                         minHeight:20,
                        fontSize:12,
                        fontWeight:'bold',
                         backgroundColor:'rgb(18, 18, 51)',
                       }
                        })
      }
      else{
        axios.post("http://localhost:5000/job", {title, qualification, description,skill,deadline}).then(() =>{
          settitle(title)
          setqualification(qualification)
          setdescription(description)
          setskill(skill)
          setdeadline(deadline)
              toast.success("Job added Successfully.", {
                         style:{
                         minHeight:20,
                        fontSize:12,
                        fontWeight:'bold',
                         backgroundColor:'rgb(18, 18, 51)',
                       }
                        })
                router.push("/adminDashboard");   
        }).catch((error) => toast.error("error", error))
          
      }
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
        <h1 className='text-xl'>Job Management</h1>
        <br />
        <br />
 <div className=" rounded-xl shadow-lg p-6 mt-10 w-full max-w-4xl mx-auto border border-gray-800" style={{ backgroundColor:'rgb(5, 5, 28)'}}>

      <div className="flex items-center justify-between mb-6">
        <button
     onClick={() => setShowModal(true)}
     className=""
     style={{padding:3, cursor:'pointer', marginBottom:20, marginTop:10, backgroundColor:'green', width:'100px', textAlign:'center', borderRadius:5}}>Add </button> </div>

    
      <div className="overflow-x-auto">
            {Job.map((job) => (
              <div key={job._id} style={{borderBottom:'1px solid gray',}}>
                <h1  style={{padding:10}}  className="py-3 px-6 text-gray-400">Title: {job.title}</h1>
                <p  style={{padding:10}}  className="py-3 px-6 text-gray-400">Qualification: {job.qualification}</p>
                 <p  style={{padding:10}}  className="py-3 px-6 text-gray-400">Description: {job.description}</p>
                <p  style={{padding:10}}  className="py-3 px-6 text-gray-400">Skills: {job.skill}</p>
               <p  style={{padding:10}}  className="py-3 px-6 text-gray-400">Deadline: {job.deadline}</p>
                <p  style={{padding:10}}  className="py-3 px-6 text-gray-400">
    <BsFillTrash3Fill onClick={() => deleteJob(job._id)} className='text-red-500 cursor-pointer inline' size={20} />
                </p>
              </div>
            ))}
     

      </div>

     
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" >
          <div className=" relative" style={{width:'370px', borderRadius:20,backgroundColor:'rgb(5, 5, 28)', border:'3px solid green'}}>
            <h3 className="text-center" style={{marginTop:20, marginBottom:20}}>Add a New Job</h3>
              <input
                type="text"
                placeholder="Enter Title"
                value={title}
                onChange={(e) => settitle(e.target.value)}
                style={{padding:5, width:'calc(77% - 20px)', border:'1px solid green', marginLeft:50, borderRadius:10, textAlign:'center'}}
                required
              />
<br />
<br />
              <input
                type="text"
                placeholder="Enter Qualification"
                value={qualification}
                onChange={(e) => setqualification(e.target.value)}
                style={{padding:5, width:'calc(77% - 20px)', border:'1px solid green', marginLeft:50, borderRadius:10, textAlign:'center'}}
                required
              />
<br />
<br />
              <input
                type="text"
                placeholder="Enter Description"
                value={description}
                onChange={(e) => setdescription(e.target.value)}
               style={{padding:5, width:'calc(77% - 20px)', border:'1px solid green', marginLeft:50, borderRadius:10, textAlign:'center'}}
                 required
              />
              <br />
              <br />

                 <input
                type="text"
                placeholder="Enter Skills"
                value={skill}
                onChange={(e) => setskill(e.target.value)}
               style={{padding:5, width:'calc(77% - 20px)', border:'1px solid green', marginLeft:50, borderRadius:10, textAlign:'center'}}
                 required
              />
              <br />
              <br />
               <input
                type="date"
                placeholder="Enter Deadline"
                value={deadline}
                onChange={(e) => setdeadline(e.target.value)}
               style={{padding:5, width:'calc(77% - 20px)', border:'1px solid green', marginLeft:50, borderRadius:10, textAlign:'center'}}
                 required
              />
              <br />
              <br />
                <button  type="button" onClick={() => setShowModal(false)} style={{
                    backgroundColor:'white',
                    marginLeft:50,
                    padding:5,
                    marginBottom:20,
                    width:'calc(40% - 20px)',
                    cursor:'pointer',
                    borderRadius:10, color:'black'
                }}>Cancel</button>
                <button onClick={handlesubmit} style={{
                      backgroundColor:'green',
                      cursor:'pointer',
                    marginLeft:10,
                    padding:5,
                    marginBottom:50,
                    marginTop:20,
                    width:'calc(40% - 20px)',
                    borderRadius:10
                }}>Add</button>

          </div>
        </div>
      )}
    </div>
            </div>
        </div>
    </div>
  )
}

export default Page;