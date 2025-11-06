"use client";
import './Nav.css';
import { useRouter } from 'next/navigation';
import {motion} from 'framer-motion'
import { FiMenu } from 'react-icons/fi';
import { useState } from 'react';
const Nav = () => {
    const router = useRouter();
 const variants = {
                           hidden:{opacity:0, x:-100},
                           visible:{opacity:1, x:0}
                         }

    const login = () =>{
        router.push("/login");
    }

    const [showMenu, setshowMenu] = useState(false)

    const toggleMenu = () =>{
        setshowMenu(!showMenu)
    }
  return (
    <div>
        <motion.div className='Nav'
        variants={variants}
        initial="hidden"
       whileInView= "visible"
       viewport={{once:false, amount:0.5}}
        transition={{ duration: 0.5}}>
            <div className='logo'><span style={{color:'green', fontSize:60}}>S</span><span style={{fontSize:30}}>e</span><span style={{fontSize:30}}>arch</span></div>
                  <ul className="hidden md:flex justify-center items-center space-x-4">
                <li><a href='#home'>Home</a></li>
                <li><a href='#job'>Jobs</a></li>
                <li><a href='#contact'>Contact</a></li>
                </ul>

    <div className='hidden md:flex flex-wrap justify-end' style={{marginTop:-40}}>
       <button onClick={login}>Sign-In</button>
    </div>
        <FiMenu  className="md:hidden flex flex-wrap justify-end" style={{marginLeft:260, marginTop:-50, backgroundColor:'green', width:35, height:30, padding:4, borderRadius:6, cursor:'pointer'}} onClick={toggleMenu} size={24} />
  
      {showMenu && (
        <ul className="md:hidden flex justify-center" style={{backgroundColor: 'rgb(18, 18, 51)', marginTop:20, marginLeft:0}}>
          <li><a className="block py-2 px-4 hover:bg-gray-100" href='#home'>Home</a></li>
          <li><a className="block py-2 px-4 hover:bg-gray-100" href='#job'>Jobs</a>  </li>
          <li><a className="block py-2 px-4 hover:bg-gray-100" href='#contact'>Contact</a></li>
   <div className='flex flex-wrap justify-end' style={{marginLeft:0}}>
        <button style={{marginTop:70,  marginLeft:-130}} onClick={login} >Sign-In</button>
   </div>
        </ul>
      )}
        </motion.div>

        <motion.div className='content'>
            <motion.h1 className='text-center text-5xl font-bold'
            variants={variants}
        initial="hidden"
       whileInView= "visible"
       viewport={{once:false, amount:0.5}}
        transition={{ duration: 0.5}}><span style={{color:'green'}}><span style={{fontSize:60, color:'white'}}>W</span>elcome</span><span style={{color:'white'}}></span> to <span style={{color:'green'}}>Dream</span> <span style={{color:'white'}}>Job</span><span style={{color:'green'}}> Platform</span></motion.h1>
            <motion.p className='text-center' style={{marginTop:20, fontSize:14}}
            variants={variants}
        initial="hidden"
       whileInView= "visible"
       viewport={{once:false, amount:0.5}}
        transition={{ duration: 0.5}}><span>Explore exciting job opportunities and locate yourself with your desire job. </span></motion.p>
              <motion.p className='text-center' style={{marginTop:10, fontSize:14}}
              variants={variants}
        initial="hidden"
       whileInView= "visible"
       viewport={{once:false, amount:0.5}}
        transition={{ duration: 0.5}}>Eager to get started ? Search Now!</motion.p>
             
             <div className='flex flex-wrap justify-center'>
                 <motion.button
                 variants={variants}
        initial="hidden"
       whileInView= "visible"
       viewport={{once:false, amount:0.5}}
        transition={{ duration: 0.5}}>See Below!</motion.button>
             </div>

        </motion.div>
     </div>
  )
}

export default Nav;