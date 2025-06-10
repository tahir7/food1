import { prisma } from '@/prisma/client'
import React from 'react'
import Image from 'next/image';
import biryani from "../displaymenu/biryani.png";
import chickenkarahi from "../displaymenu/chickenkarhari.png"
import roghniNaan from "../displaymenu/roghniNaan.png"
import Pagination from '@/app/components/pagination';
import { number } from 'zod';
import { Flex, Grid } from '@radix-ui/themes';

interface Props {
    searchParams : { page : string }
}

const displayAllMenuItems = async ({searchParams } : Props) => {

   

  
    const response = await prisma.menu.findMany( {
        
    });

    const totalitems = await prisma.menu.count() ;
    return (

       
        <Grid columns={{ initial: "1", md: "3" }} gap="3" width="auto">

          
            {/* https://v1.tailwindcss.com/components/cards */}

            {
                response.map(i =>                   

                    <div key={i.id} className="max-w-sm rounded overflow-hidden shadow-lg">
                        {
                            i.id === 1 ?

                                <div className="max-w-sm rounded overflow-hidden shadow-lg  relative  w-full h-50 px-1 py-1">
                                    <Image
                                        src={biryani}
                                        alt="Profile Picture"
                                        fill={true} // Use fill property for the image to fill the container
                                        objectFit="cover" // Control cropping and scaling
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        // width={250}
                                        // height={200}
                                        className="object-cover rounded-lg px-2" // Apply rounded corners using Tailwind

                                    //   sizes='115vw'
                                    // style={{objectFit: 'cover' }}
                                    />
                                </div>
                                :
                                ""}
                        {
                            i.id === 2 ?
                                <div className="max-w-sm rounded overflow-hidden shadow-lg  relative  w-full h-50 px-1 py-1">
                                    <Image
                                        src={roghniNaan}
                                        alt="Profile Picture"
                                        fill={true} // Use fill property for the image to fill the container
                                        objectFit="cover" // Control cropping and scaling
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        // width={250}
                                        // height={200}
                                        className="object-cover rounded-lg px-2" // Apply rounded corners using Tailwind

                                    //   sizes='115vw'
                                    // style={{objectFit: 'cover' }}
                                    />
                                </div>
                                :
                                ""}

                        { i.id === 3 ?
                        <div className="max-w-sm rounded overflow-hidden shadow-lg  relative  w-full h-50 px-1 py-1">
                            <Image
                                src={chickenkarahi}
                                alt="Profile Picture"
                                fill={true} // Use fill property for the image to fill the container
                                objectFit="cover" // Control cropping and scaling
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                // width={250}
                                // height={200}
                                className="object-cover rounded-lg px-2" // Apply rounded corners using Tailwind

                            //   sizes='115vw'
                            // style={{objectFit: 'cover' }}
                            />
                        </div>
                        :
                        ""  }

                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{i.picname}</div>
                            <p className="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"> $ { i.price }</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Add</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Remove</span>
                        </div>

                        
                    </div>
                   
                )                
            }

 </Grid> //-------
        
    )
}

export default displayAllMenuItems

