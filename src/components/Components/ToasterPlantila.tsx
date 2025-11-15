import React, { useEffect } from 'react'
import { toast, Toaster } from 'sonner'

export default function ToasterPlantila() {
    useEffect(() => {
    // escuchar eventos desde Astro o JS nativo
    window.addEventListener("show-toast", (e) => {
      const { message, type } = e.detail;

      if (type === "success") toast.success(message);
      else if (type === "error") toast.error(message);
      else toast(message);
    });
  }, []);
  return <Toaster position="top-left"></Toaster>
    
  
}
