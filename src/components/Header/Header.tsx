import  { Github, Linkedin, Menu, Music, User,X } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
export default function Header() {
    const [open, setopen] = useState(false)
  return (

<div >
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
<div id="header" className="flex flex-row justify-between px-6 py-4 items-center w-full">
    <div className="">
         <ul className="flex flex-row gap-4">
            <li className="cursor-pointer hover:text-indigo-400/80 hover:scale-120 transition-all">
                <Github className=""></Github>               
            </li>
            <li className="cursor-pointer hover:text-indigo-400/80 hover:scale-120 transition-all">
                <Linkedin></Linkedin>                
            </li>
        </ul>
    </div>
    

    <div>
        <ul className="hidden md:flex text-md flex-row gap-10">
            <li className="transition-all duration-300 cursor-pointer hover:text-indigo-400/80"><a href="/">Sobre mi</a></li>
            <li className="transition-all duration-300 cursor-pointer hover:text-indigo-400/80"><a href="/#experiencia">Experiencia</a></li>
            <li className="transition-all duration-300 cursor-pointer hover:text-indigo-400/80"><a href="/proyectos/">Proyectos</a> </li>
            <li className="transition-all duration-300 cursor-pointer hover:text-indigo-400/80"><a href="/#contactar">Contactar</a></li>
            <li className="transition-all duration-300 cursor-pointer hover:text-indigo-400/80"><a href="/extras">Extras</a></li>
        </ul>
    </div>
    <div className="hidden md:block">
       <Button className="bg-white/10 hover:bg-indigo-200/10">Descargar CV</Button>
    </div>
    {/* Ícono de menú hamburguesa (visible solo en móvil) */}
      <div className="md:hidden">
        <button onClick={() => setopen(!open)}>
          {open ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

     {
        open&&(
            <div className="md:hidden absolute top-16 flex flex-col bg-black/20 left-0 items-center p-6 gap-6 transition-all w-full">
            <a href="/" className="hover:text-indigo-400/80 transition-all" onClick={()=>setopen(false)}>Sobre mi</a>
            <a href="/#experiencia" className="hover:text-indigo-400/80 transition-all" onClick={()=>setopen(false)}>Experiencia</a>
            <a href="/proyectos" className="hover:text-indigo-400/80 transition-all" onClick={()=>setopen(false)}>Proyectos</a>
            <a href="/#contactar" className="hover:text-indigo-400/80 transition-all" onClick={()=>setopen(false)}>Contactar</a>
            <a href="/extras" className="hover:text-indigo-400/80 transition-all" onClick={()=>setopen(false)}>Extras</a>
            </div>
        )
     }
</div>
</div>
  )
}
