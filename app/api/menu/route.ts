// import { NextRequest, NextResponse } from 'next/server';
// import React from 'react';
// import  {schema}  from "./schema";



// interface data {
//     dishname : string,
//     price : number,
//     // size  : number
// }
// export  async function POST(request : NextRequest) {

    
//     const body : data = await request.json();

//     console.log(body);

//     const validate = schema.safeParse(body);

//     if(!validate.success) {
//         return NextResponse.json(validate)
//     }

//     const newItem = await prisma.menu.create ( {
        
//         data : {
//             dishname : body.dishname,
//             price : body.price
           
//         }
//     })
    
//     return  NextResponse.json(body);
    
// }

// export async function  GET(request : NextRequest) {
    
//     const resp = await prisma.menu.findMany()

//     return NextResponse.json("A")
//     // return NextResponse.json(resp);

//     // return resp.map(i=>
//     // {
//     //     i.dishname + "<br>"
//     // }
//     // )
// }