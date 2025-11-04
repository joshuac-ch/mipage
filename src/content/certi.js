import { defineCollection, z } from "astro:content";

const certi=defineCollection({
    schema:z.object({
        name:z.string(),
        img: z.string(),
        descri: z.string()
    })
})
export const colletions=certi