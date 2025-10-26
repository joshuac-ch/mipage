import  { Github, Linkedin, Music, User } from "lucide-react";
import { Button } from "../ui/button";
export default function Header() {
  return (

<div >
<div id="header" className="flex flex-row justify-between pl-15 pr-15 items-center w-full p-4">
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
        <ul className="flex text-md flex-row gap-10">
            <li className="transition-all duration-300 cursor-pointer hover:text-indigo-400/80"><a href="/">Sobre mi</a></li>
            <li className="transition-all duration-300 cursor-pointer hover:text-indigo-400/80">Experiencia</li>
            <li className="transition-all duration-300 cursor-pointer hover:text-indigo-400/80"><a href="/proyectos/">Proyectos</a> </li>
            <li className="transition-all duration-300 cursor-pointer hover:text-indigo-400/80">Contactar</li>
        </ul>
    </div>
    <div>
       <Button className="bg-white/10 hover:bg-indigo-200/10">Descargar CV</Button>
    </div>
</div>
</div>
  )
}
