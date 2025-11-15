import React from 'react'
import Header from '../Header/Header'
import LeftButton from './LeftButton'
import Carrosel from './Carrosel'
import img1 from "./../../../public/proyecto2/foto1.png"
import img2 from "./../../../public/proyecto2/foto2.png"
import img3 from "./../../../public/proyecto2/foto3.png"
import "../../styles/global.css"
export default function PlantillaProyects({data,tipo="carrusel"}) {
  
   return (
   <>    
        <video autoPlay loop  muted className="absolute inset-0 w-full h-full object-cover -z-10" >
            <source src="/fondo4.mp4" type="video/mp4"/>    
        </video>
        <div className="sticky top-0 z-50 text-white backdrop-blur-xl border-1 border-white/5 bg-white/5 ">
            <Header ></Header>
        </div>
        <div className="relative backdrop-blur-xl bg-white/5">
                <div className="flex text-white justify-center pt-10 pb-10 ">
                    <div className="">
                        <LeftButton ruta={"/proyectos/index.html"}></LeftButton>
                    </div>    
                    <div className="">
                        <div className="mt-4">
                            <p className="text-xl">| {data.fecha}</p>
                        </div>
                        <div className="mt-4">
                            <p className="text-4xl">{data.title}</p>
                        </div>
                        {
                            tipo=="carrusel"&&
                            (
                                <div className="mt-8">
                                    <Carrosel img1={data.imagenes[0]} img2={data.imagenes[1]} img3={data.imagenes[2]}></Carrosel>
                                </div>
                            )
                        }
                        {data.link&&(
                            <div className="flex justify-start mt-8">
                                <a
                                    href={data.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 bg-indigo-500 text-white rounded-xl hover:bg-indigo-600 transition"
                                >
                                    Ver app en Appetize
                                </a>
                            </div>
                        )}
                        <div className="">
                            <div className="mt-4">
                                <p className="text-xl">{data.title}</p>
                            </div>
                            <div className="prose-sm md:prose-lg md:w-150 mr-6">
                                <div className="text-white/40">
                                    <p className="font-bold text-white">Descripcion del Proyecto</p>
                                    <p>{data.descripcion}</p>
                                </div>
                                <div className="">
                                    <p className="font-bold">Caracteristicas destacadas</p>
                                    <ul className="list-decimal text-white/40">
                                        {data.caracteristicas.map((c,i)=>{
                                            return(
                                                <li key={i}>
                                                    <p><strong className='text-white'>{c.name}</strong>
                                                    {c.descri}
                                                    </p>
                                                </li>
                                            )
                                        })
                                        }
                                        
                                    </ul>
                                </div>
                                <div className="">
                                    <p className="font-bold">Tecnologias Usadas:</p>
                                    <ul className="list-disc text-white/40">
                                        {data.tecnologias.map((t,i)=>{
                                            return(
                                                <li key={i}>
                                                    <p><strong className='text-white'>{t.name}</strong>{t.descri}</p>
                                                </li>
                                            )
                                        })}                                        
                                    </ul>
                                </div>
                                <div className="">
                                    <p className="font-semibold"><strong>Conclusion:</strong></p>
                                    <p className="text-white/40">
                                        {data.conclusion}
                                    </p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>    
   </>
    
  )
}
