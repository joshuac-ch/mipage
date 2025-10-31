import { defineCollection, z } from "astro:content";

const proyects=defineCollection({
    schema:z.object({
        fecha:z.string(),
        title:z.string(),
        fondo:z.string().url(),
        descripcion:z.string(),
        imagenes:z.array(),
        caracteristicas:z.array(),
        tecnologias:z.array(),
        conclusion:z.string()
    })
})
export const colletions=proyects