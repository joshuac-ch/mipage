import { defineCollection,z } from "astro:content"; 
const getstacks=defineCollection({
    schema:z.object({
        nombre:z.string(),
        logo:z.string().url()        
    })
})
export const colletions=getstacks