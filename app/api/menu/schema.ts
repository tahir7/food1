import {z} from "zod";

export  const schema = z.object( {
    dishname : z.string().min(3),
    price : z.number().gt(1)
})