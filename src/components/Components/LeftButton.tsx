import { ChevronLeft } from 'lucide-react'
import React from 'react'

export default function LeftButton({ruta}) {
  
  return (
    <>
    <div className="m-4 rounded-full p-1 hover:bg-white/20 bg-white/40">
       <a href={ruta}>
         <ChevronLeft></ChevronLeft>
       </a>
    </div>
    </>
  )
}
