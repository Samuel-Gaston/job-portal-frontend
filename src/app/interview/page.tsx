"use client";
import { useEffect } from 'react';
import '../components/Nav.css';
import Sidebar from '../components/Sidebar';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { BsFillTrash3Fill } from "react-icons/bs";
type Interview = {
  _id:number;
  title:string;
  name:string;
  date:string;
}
const Page = () => {

    const router = useRouter();

      const [showModal, setShowModal] = useState(false)
      const [title, settitle] = useState("")
       const [name, setname] = useState("")
        const [date, setdate] = useState("")


        const [Interview, setInterview] = useState<Interview[]>([])

      const getAllInterview = async() =>{
    try {
      const response = await axios.get("https://job-portal-server1-a8ij.onrender.com/interview")
      setInterview(response.data)
      console.log('response data', response.data);
    } catch (error) {
       console.error(error);
    }
      }
      useEffect(() =>{
        getAllInterview();
      },[]);


      const deleteInterview = (id:number) =>{
        axios.delete(`https://job-portal-server1-a8ij.onrender.com/interview/${id}`).then(() =>{
          setInterview(Interview.filter(Interview => Interview._id !== id));
          toast.success("Interview deleted Successfully.", {
                         style:{
                         minHeight:20,
                        fontSize:12,
                        fontWeight:'bold',
                        backgroundColor:'rgb(18, 18, 51)',
                       }
                        })
      setTimeout(() =>{
    router.push("/interview")
    }, 2000)
        })
      }

             const handlesubmit = () =>{
                    if(!title || !name || !date){
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
        axios.post("https://job-portal-server1-a8ij.onrender.com/interview", {title,name,date}).then(() =>{
          settitle(title)
          setname(name)
          setdate(date)
              toast.success("Interview added Successfully.", {
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
        <h1 className='text-xl'>Interview Management</h1>
        <br />
        <br />
 <div className=" rounded-xl shadow-lg p-6 mt-10 w-full max-w-4xl mx-auto border border-gray-800" style={{ backgroundColor:'rgb(5, 5, 28)'}}>

      <div className="flex items-center justify-between mb-6">
        <button
     onClick={() => setShowModal(true)}
     className=""
     style={{padding:3, cursor:'pointer', marginBottom:20, marginTop:10, backgroundColor:'green', width:'100px', textAlign:'center', borderRadius:5}}>Add </button> </div>

    
      <div className="overflow-x-auto">
            {Interview.map((interview) => (
              <div key={interview._id} style={{borderBottom:'1px solid gray',}}>
                <p  style={{padding:10}}  className="py-3 px-6 text-gray-400">Name: {interview.name}</p>
                <p  style={{padding:10}}  className="py-3 px-6 text-gray-400">Job_Title: {interview.title}</p>
               <p  style={{padding:10}}  className="py-3 px-6 text-gray-400">Date: {interview.date}</p>
                <p  style={{padding:10}}  className="py-3 px-6 text-gray-400">
    <BsFillTrash3Fill onClick={() => deleteInterview(interview._id)} className='text-red-500 cursor-pointer inline' size={20} />
                </p>
              </div>
            ))}
     

      </div>

    
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" >
          <div className=" relative" style={{width:'370px', borderRadius:20,backgroundColor:'rgb(5, 5, 28)', border:'3px solid green'}}>
            <h3 className="text-center" style={{marginTop:20, marginBottom:20}}>Add a New Interview</h3>
              <input
                type="text"
                placeholder="Enter Job Title"
                value={title}
                onChange={(e) => settitle(e.target.value)}
                style={{padding:5, width:'calc(77% - 20px)', border:'1px solid green', marginLeft:50, borderRadius:10, textAlign:'center'}}
                required
              />
<br />
<br />
                 <input
                type="text"
                placeholder="Enter Applicant's Name"
                value={name}
                onChange={(e) => setname(e.target.value)}
               style={{padding:5, width:'calc(77% - 20px)', border:'1px solid green', marginLeft:50, borderRadius:10, textAlign:'center'}}
                 required
              />
              <br />
              <br />
                <input
                type="date"
                placeholder="Enter Date"
                value={date}
                onChange={(e) => setdate(e.target.value)}
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