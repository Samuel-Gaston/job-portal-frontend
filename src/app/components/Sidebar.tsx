"use client";
import Link from 'next/link';
const Sidebar = () => {
  return (
    <div>
        <ul>
            <li><Link href='/adminDashboard'>Dashboard</Link></li>
           <li><Link href="/jobs">Jobs</Link></li>
            <li><Link href="/applicationss">Applications</Link></li>
         
             <li><Link href="/interview">Interview</Link></li>
          </ul>
          <button><Link href='/'>Logout</Link></button>
            </div>

  )
}

export default Sidebar;