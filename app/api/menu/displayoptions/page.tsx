import React from 'react'
import Image from 'next/image';
import biryani from "../displayoptions/biryani.png";
import chickenkarahi from "../displayoptions/chickenkarhari.png"
import roghniNaan from "../displayoptions/roghniNaan.png"
import Pagination from '@/app/components/pagination';
import { number } from 'zod';
import { Card, Flex, Grid } from '@radix-ui/themes';
import getData from '../../data/page';
import data from '../../data/data';

interface Props {
    searchParams: { page: string }
}

interface d {
    id: number;
    dishname: string;
    price: number;
    size: number
}

const displayAllMenuItems = async ({ searchParams }: Props) => {

    // const searchParams1 = await searchParams;

    const handlePageChange = (page: number) => {
        console.log(page)

    }



    const page = await parseInt(searchParams.page) || 1;

    console.log("page :: ", page)
    const pageSize = 3;

    // const response = await prisma.menu.findMany( {
    //     skip : (page -1) * pageSize,
    //     take: pageSize
    // });

    const response: d[] = await data();

    //  array.slice(startIndex, endIndex);
    // startIndex: The index to start the slice from (inclusive).
    // endIndex: The index to end the slice at (exclusive).

    const response1 = response.slice((page - 1) * pageSize, page * pageSize);

    const colors = ["bg-amber-350", "bg-amber-660", "bg-gray-450", "bg-amber-250", "bg-yellow-250", "bg-lime-200", "bg-lime-500"]

    // const totalitems = await prisma.menu.count();

    const totalitems =   response.length; 

    // console.log("totalitems ::  ",totalitems)

    return (

        <div>

            <Grid columns={{ initial: "1", xs: "3" }} gap="2" width="auto" className='mx-6 mt-10'>


                {/* https://v1.tailwindcss.com/components/cards */}

                {
                    response1.map(i =>



                        <div key={i.id} className={`max-w-sm rounded overflow-hidden shadow-lg `}>

                            {/* ${ Math.floor(Math.random() * 6) + 1 } */}


                            {
                                i.id === 1 ?

                                    <div className={`max-w-sm rounded overflow-hidden shadow-lg  relative  w-full h-50 px-1 py-1 `
                                    }>
                                        <Image
                                            src={biryani}
                                            alt="Profile Picture"
                                            fill={true} // Use fill property for the image to fill the container
                                            objectFit="cover" // Control cropping and scaling
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            // width={250}
                                            // height={200}

                                            className="object-cover rounded-lg px-2 " // Apply rounded corners using Tailwind

                                        //   sizes='115vw'
                                        // style={{objectFit: 'cover' }}
                                        />
                                    </div>
                                    :
                                    ""}
                            {
                                i.id === 2 ?
                                    <div className={`max-w-sm rounded overflow-hidden shadow-lg  relative  w-full h-50 px-1 py-1`}>
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

                            {i.id === 3 ?
                                <div className={`max-w-sm rounded overflow-hidden shadow-lg  relative  w-full h-50 px-1 py-1`}>
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
                                ""}

                            <div className="px-1 py-2">
                                <div className="font-bold text-xl mb-2">{i.dishname}</div>
                                <p className="text-gray-700 text-base">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                </p>
                            </div>
                            <div className="px-1 py-1">
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700  mb-2"> $ {i.price}</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700  mb-2">Add</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700  mb-2">Remove</span>
                            </div>


                        </div>

                    )
                }


            </Grid>
            <br></br>
            <Pagination
                pageSize={pageSize}
                itemCount={totalitems}
                currentPage={page} />


        </div>

    )
} 

export default displayAllMenuItems

