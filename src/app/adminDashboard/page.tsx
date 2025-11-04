"use client";
import '../components/Nav.css';
import { useRouter } from 'next/navigation';
import Sidebar from '../components/Sidebar';
import ChatWidget from '../components/Chat';
import { MdLightMode } from "react-icons/md";
import { GiArchiveRegister } from "react-icons/gi";
const Page = () => {
    const router = useRouter();

  return (
    <div>
        <div className='dashboard'>
            <div className='left-dashboard'>
            <div className='logo' style={{marginLeft:5}}><span style={{ fontSize: 50, color: 'white', fontWeight: 'bold' }}>S</span><span style={{ fontSize: 30, color: 'green', fontWeight: 'bold' }}>earch</span></div>
        <Sidebar />
            </div>
            <div className='right-dashboard'>
        <h1 style={{color:'green', fontSize:25, fontWeight:'bold'}}>Job-Portal Management - <span style={{marginLeft:30, fontSize:30}} className='text-gray-300'>Admin's Panel</span></h1>
        <br />
        <br />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 text-center">
     
      <div onClick={() => router.push("/jobs")} style={{backgroundColor:'rgb(5, 5, 28)'}} className=" shadow-md rounded-2xl p-6 hover:shadow-lg transition-all border border-gray-500 cursor-pointer">
        <div className="flex flex-col items-center">
          <MdLightMode className="text-4xl mb-3" style={{color:'green', marginTop:10}} />
          <h1 className="text-lg font-semibold text-gray-300">Jobs</h1>
        </div>
      </div>

   
      <div onClick={() => router.push("/applicationss")} style={{backgroundColor:'rgb(5, 5, 28)'}} className=" shadow-md rounded-2xl p-6 hover:shadow-lg transition-all border border-gray-500 cursor-pointer">
        <div className="flex flex-col items-center">
          <GiArchiveRegister className="text-4xl mb-3"  style={{color:'green', marginTop:10}} />
          <h1 className="text-lg font-semibold text-gray-300" style={{marginBottom:5}}>Applications</h1>
        </div>
      </div>


    </div>

         <ChatWidget />
            </div>
        </div>
    </div>
  )
}

export default Page;