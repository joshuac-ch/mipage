import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'

export default function Carrosel({img1="",img2="",img3=""}) {
  return (
    <div className="">
      <Carousel className='w-80 md:w-150'>
  <CarouselContent className=''>
    <CarouselItem><img className="w-full object-cover rounded-md" src={img1} alt="" /></CarouselItem>
    <CarouselItem><img className="w-full object-cover rounded-md" src={img2} alt="" /></CarouselItem>
    <CarouselItem><img className="w-full object-cover rounded-md" src={img3} alt="" /></CarouselItem>
  </CarouselContent>
  <CarouselPrevious className='bg-white/10 border-0'/>
  <CarouselNext  className='bg-white/10 border-0'/>
</Carousel>
    </div>
  )
}
