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
                <a href="https://github.com/joshuac-ch" target={'_blank'}><Github className=""></Github> </a>              
            </li>
            <li className="cursor-pointer hover:text-indigo-400/80 hover:scale-120 transition-all">
                <a href="https://www.linkedin.com/in/joshua-gustavo-condorena-chuquica%C3%B1a-57817228b/" target={'_blank'}>
                <Linkedin></Linkedin>                
                </a>
            </li>
        </ul>
    </div>
    

    <div>
        <ul className="hidden md:flex text-md flex-row gap-10">
            <li className="transition-all duration-300 cursor-pointer hover:text-indigo-400/80"><a href="/index.html">Sobre mi</a></li>
            <li className="transition-all duration-300 cursor-pointer hover:text-indigo-400/80"><a href="/index.html#experiencia">Experiencia</a></li>
            <li className="transition-all duration-300 cursor-pointer hover:text-indigo-400/80"><a href="/proyectos/index.html">Proyectos</a> </li>
            <li className="transition-all duration-300 cursor-pointer hover:text-indigo-400/80"><a href="/index.html#contactar">Contactar</a></li>
            <li className="transition-all duration-300 cursor-pointer hover:text-indigo-400/80"><a href="/extras/index.html">Extras</a></li>
        </ul>
    </div>
    <div className="">
      <a href="/cv/CVJoshuaCondorenaV2.pdf" download={"/cv/CVJoshuaCondorenaV2.pdf"}>
       <Button className="bg-white/10 hover:bg-indigo-200/10">Descargar CV</Button>
      </a>
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
            <a href="/index.html" className="hover:text-indigo-400/80 transition-all" onClick={()=>setopen(false)}>Sobre mi</a>
            <a href="/index.html#experiencia" className="hover:text-indigo-400/80 transition-all" onClick={()=>setopen(false)}>Experiencia</a>
            <a href="/proyectos/index.html" className="hover:text-indigo-400/80 transition-all" onClick={()=>setopen(false)}>Proyectos</a>
            <a href="/index.html#contactar" className="hover:text-indigo-400/80 transition-all" onClick={()=>setopen(false)}>Contactar</a>
            <a href="/extras/index.html" className="hover:text-indigo-400/80 transition-all" onClick={()=>setopen(false)}>Extras</a>
            </div>
        )
     }
</div>
</div>
  )
}
