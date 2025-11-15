import React, { useEffect } from 'react'
import { toast, Toaster } from 'sonner'

export default function ToasterCorreo() {
 useEffect(()=>{
    window.addEventListener("show-email",(e)=>{
        const {message,type}=e.detail 
        if(type=="success") toast.success(message)
        else if(type=="error") toast.error(message)
        else toast(message)    
    })
 },[])   
  return <Toaster position='bottom-left'></Toaster>
}
