"use client";
import Link from 'next/link';
const SidebarApplicant = () => {
  return (
    <div>
        <ul>
            <li><Link href='/applicantDashboard'>Dashboard</Link></li>
           <li><Link href="/">Jobs</Link></li>
            <li><Link href="/appy">Apply</Link></li>
            
             <li><Link href="/schedules">See Schedules</Link></li>
          </ul>
          <button><Link href='/'>Logout</Link></button>
            </div>

  )
}

export default SidebarApplicant;