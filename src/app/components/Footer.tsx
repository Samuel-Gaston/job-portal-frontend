"use client";
import '../components/Nav.css';
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMusicalNotes } from "react-icons/io";
import { MdAddIcCall } from "react-icons/md";
import { FiClock } from "react-icons/fi";
import { AiOutlineCopyright } from "react-icons/ai";
import { motion } from 'framer-motion';
const Footer = () => {
    const variants = {
        hidden:{opacity:0, x:-100},
         visible:{opacity:1, x:0}
        }
               
  return (
    <div>
         <div className='footer'>
          <motion.div className='left-footer'
                   variants={variants}
        initial="hidden"
       whileInView= "visible"
       viewport={{once:false, amount:0.5}}
        transition={{ duration: 0.5}}>
          <h1>Search</h1>
          <p className='text-gray-300'>Awesome job-portal website template</p>
          <p className='text-gray-300'><FaLocationDot className='inline' /> Address 5171 we camptel</p>
          <p className='text-gray-300'><IoIosMusicalNotes className='inline' /> Call +911-540-021-1243</p>
          <p className='text-gray-300'><MdAddIcCall className='inline' /> Email.son@gmail.com</p>
          <p className='text-gray-300'><FiClock className='inline' /> Hours 10:00-14:00 Mon-Sat</p>
          </motion.div>
            <motion.div className='right-footer text-gray-300'
                     variants={variants}
        initial="hidden"
       whileInView= "visible"
       viewport={{once:false, amount:0.5}}
        transition={{ duration: 0.5}}>
           <p>Company</p>
           <p>About Us</p>
           <p>Private Policy</p>
           <p>Terms & Conditions</p>
           <p>Contact Us</p>
           <p>Support Center</p>
           <p>Careers</p>
            <p>Support Center</p>
           </motion.div>
          <motion.div className='right-footer text-gray-300'
                   variants={variants}
        initial="hidden"
       whileInView= "visible"
       viewport={{once:false, amount:0.5}}
        transition={{ duration: 0.5}}>
          <h1>Account</h1>
          <p>Sign in</p>
          <p>View Cart</p>
          <p>Track My Order</p>
          <p>Help Ticket</p>
          <p>Job Details</p>
          <p>Compare jobs</p>
           <p>Support Center</p>
          </motion.div>

           <motion.div className='right-footer text-gray-300'
                   variants={variants}
        initial="hidden"
       whileInView= "visible"
       viewport={{once:false, amount:0.5}}
        transition={{ duration: 0.5}}>
          <h1>Account</h1>
          <p>Sign in</p>
          <p>View applicants</p>
          <p>Track My Order</p>
          <p>Help Ticket</p>
          <p>Job Details</p>
          <p>Compare Jobs</p>
           <p>Support Center</p>
          </motion.div>
         </div>


         <div className='last text-gray-300'>
          <motion.div className='left-last'
                   variants={variants}
        initial="hidden"
       whileInView= "visible"
       viewport={{once:false, amount:0.5}}
        transition={{ duration: 0.5}}>
            <p><AiOutlineCopyright className='inline' /> 2025 Search- HTML Job-Portal Template, All right reserved.</p>
          </motion.div>
         </div>


    </div>
  )
}

export default Footer;