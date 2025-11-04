"use client";
import '../components/Nav.css';
import { useRouter } from 'next/navigation';
import SidebarApplicant from '../components/SidebarApplicant';
import ChatWidget from '../components/PieChat';
const Page = () => {
    const router = useRouter();

  return (
    <div>
        <div className='dashboard'>
            <div className='left-dashboard'>
            <div className='logo' style={{marginLeft:5}}><span style={{ fontSize: 50, color: 'white', fontWeight: 'bold' }}>S</span><span style={{ fontSize: 30, color: 'green', fontWeight: 'bold' }}>earch</span></div>
        <SidebarApplicant />
            </div>
            <div className='right-dashboard'>
        <h1 className='font-bold'><span style={{marginLeft:30, fontSize:30}} className='text-gray-300'>Applicant's Panel</span></h1>
        <br />
        <br />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 text-center text-gray-300">
     
      <div onClick={() => router.push("/")} style={{backgroundColor:'rgb(5, 5, 28)', border:'1px solid gray', padding:10, marginBottom:10}} className=" shadow-md rounded-xl p-6 hover:shadow-lg transition-all border cursor-pointer">
        <div className="flex flex-col items-center" style={{marginBottom:10}}>
          <h1 className="text-lg font-semibold text-een300">View available Jobs</h1>
        </div>
      </div>

   
      <div onClick={() => router.push("/apply")} style={{backgroundColor:'rgb(5, 5, 28)', border:'1px solid gray', padding:10, marginBottom:10}} className=" shadow-md rounded-xl p-6 hover:shadow-lg transition-all border cursor-pointer">
        <div className="flex flex-col items-center" style={{marginBottom:10}}>
          <h1 className="text-lg font-semibold text-gray-300" style={{marginBottom:5}}>Send Application</h1>
        </div>
      </div>
         

          <div onClick={() => router.push("/schedules")} style={{backgroundColor:'rgb(5, 5, 28)', border:'1px solid gray', padding:10, marginBottom:10}} className=" shadow-md rounded-xl p-6 hover:shadow-lg transition-all border cursor-pointer">
        <div className="flex flex-col items-center" style={{marginBottom:10}}>
          <h1 className="text-lg font-semibold text-gray-300" style={{marginBottom:5}}>See Interview Schedules</h1>
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