"use client";
import './Nav.css';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import emailjs from  "emailjs-com";
import {motion} from 'framer-motion'
const Page = () => {
          const variants = {
                           hidden:{opacity:0, x:-100},
                           visible:{opacity:1, x:0}
                         }
           
          
         

    const router = useRouter();

   const [name, setname] = useState("");
   const [email, setemail] = useState("");
   const [phone, setphone] = useState("");
   const [message, setmessage] = useState("");




   const HandleSubmit = (e: any) =>{
    if(!name || !email || !message || !phone){
     toast.error("Error. Fill in.", {
           style:{
             minHeight:20,
            fontSize:12,
            fontWeight:'bold',
           }
          })
             setTimeout(() =>{
    }, 5000);
   }
   else{
       e.preventDefault();

    emailjs
      .send(
        "service_lksfa4q",      // <-- replace with your real service ID
        "template_r8rhcg4",     // <-- replace with your template ID
        {
          name: name,
          email: email,
          telephone: phone,
          message: message,
        },
        "NQOMU-8eNMYJoVqni"    // <-- replace with your Public Key
      )
      .then(() => {
        toast.success("Message sent successfully!", {
              style:{
             minHeight:20,
            fontSize:12,
            fontWeight:'bold',
              backgroundColor:'rgb(5, 5, 28)'
           }
        });
        setname("")
        setemail("")
        setphone("")
        setmessage("")
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        toast.error("Failed to send message.");
      });
        setTimeout(() =>{
    }, 5000);
   }
   }
  return (
  <motion.div className='' id='contact'>
   <ToastContainer />
   <div className='contact text-center' style={{marginTop:150}}>
       <h1 className='font-bold' style={{fontSize:20,}}>Contact Us with your Questions and Problems</h1>
    <form onSubmit={HandleSubmit}>
        <motion.input type='text' placeholder='Name' value={name} onChange={(e) => setname(e.target.value)} required 
           variants={variants}
        initial="hidden"
       whileInView= "visible"
       viewport={{once:false, amount:0.5}}
        transition={{ duration: 0.5}}/>

        <motion.input type='email' placeholder='Email' value={email} onChange={(e) => setemail(e.target.value)} required 
           variants={variants}
        initial="hidden"
       whileInView= "visible"
       viewport={{once:false, amount:0.5}}
        transition={{ duration: 0.5}}/>

         <motion.input type='number' placeholder='Telephone' value={phone} onChange={(e) => setphone(e.target.value)} required 
           variants={variants}
        initial="hidden"
       whileInView= "visible"
       viewport={{once:false, amount:0.5}}
        transition={{ duration: 0.5}}/>

        <br />
        <motion.textarea placeholder='Message' value={message} onChange={(e) => setmessage(e.target.value)} required 
           variants={variants}
        initial="hidden"
       whileInView= "visible"
       viewport={{once:false, amount:0.5}}
        transition={{ duration: 0.5}}/>
        <br />
        <motion.button 
         variants={variants}
        initial="hidden"
       whileInView= "visible"
       viewport={{once:false, amount:0.5}}
        transition={{ duration: 0.5}}>Send</motion.button>
    </form>
   </div>
   

  </motion.div>
  )
}

export default Page