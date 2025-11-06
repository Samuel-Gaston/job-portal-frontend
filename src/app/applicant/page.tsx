"use client";
import { useEffect } from 'react';
import '../components/Nav.css';
import Sidebar from '../components/Sidebar';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { BsFillTrash3Fill } from "react-icons/bs";
type User = {
  _id:number;
  name:string;
  email:string;
}
const Page = () => {

    const router = useRouter();

        const [User, setUser] = useState<User[]>([])

      const getAllUsers = async() =>{
    try {
      const response = await axios.get("https://job-portal-server1-a8ij.onrender.com/user")
      setUser(response.data)
      console.log('response data', response.data);
    } catch (error) {
       console.error(error);
    }
      }
      useEffect(() =>{
        getAllUsers();
      },[]);

 


      const deleteUser = (id:number) =>{
        axios.delete(`https://job-portal-server1-a8ij.onrender.com/user/${id}`).then(() =>{
          setUser(User.filter(User => User._id !== id));
           toast.success("User deleted Successfully.", {
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
        <h1 className='text-xl'>Users Management</h1>
        <br />
        <br />
 <div className=" rounded-xl shadow-lg p-6 mt-10 w-full max-w-4xl mx-auto border border-gray-800" style={{ backgroundColor:'rgb(5, 5, 28)'}}>

 

    
      <div className="overflow-x-auto">
            {User.map((User) => (
              <div key={User._id} style={{borderBottom:'1px solid gray',}}>
                <h1  style={{padding:10}}  className="py-3 px-6 text-gray-400">Name: {User.name}</h1>
               <p  style={{padding:10}}  className="py-3 px-6 text-gray-400">Email: {User.email}</p>
                <p  style={{padding:10}}  className="py-3 px-6 text-gray-400">
    <BsFillTrash3Fill onClick={() => deleteUser(User._id)} className='text-red-500 cursor-pointer inline' size={20} />
                </p>


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