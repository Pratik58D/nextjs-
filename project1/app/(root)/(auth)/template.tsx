 "use client"


import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const navLinks = [
  {name : "Register" , href : "/register"},
  {name : "login" , href : "/login"},
  {name : "Forgot Password" , href : "/forget-password"}
]
const AuthLayout = ({
    children
} : {children : React.ReactNode}) => {

  const pathName = usePathname();
  const [name , setName] = useState();



  return (
    <>
    <div>
      <label > Name</label>
      <input type="text" onChange={(e)=> setName(e.target.value)} />
    </div>
    {
      navLinks.map((link)=>{
        const isActive = pathName === link.href || (pathName.startsWith(link.href) && link.href !== "/")
        return(

          <Link  href={link.href} key={link.name} className={isActive ? "font-bold  mr-4 text-red-700" :"text-blue-400 mr-4" }>
          
          {link.name}
          </Link>
        )
      })
    }
 
    {children}
    
    
    </>
 
  )
}

export default AuthLayout