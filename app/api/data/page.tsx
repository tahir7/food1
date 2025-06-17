import React from 'react'
import data from './data';
import { NextRequest } from 'next/server';

interface d  {
    id: number;
    dishname: string;
    price: number;
    size : number
}

const   getData = async () => {

    const response : d[] = await data();

    // const r  = JSON.parse(response)

    console.log("::: ", response);

    // console.log("::: ", r);
  return (
    <div>
        
        { 
        // r.map( i => <> {i.id} </>)

        // response.map(i => <> {i.id} </>)
        
        }
        
    </div>
  )
}

export default getData