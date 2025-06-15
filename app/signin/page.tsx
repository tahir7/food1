"use client";
import { Badge, Button, Card, Flex, Heading, HoverCard, Text, } from '@radix-ui/themes'
import React from 'react'
import { signIn } from "next-auth/react"
import { PiGoogleLogo } from 'react-icons/pi';
import googlelogo from "../signin/googlelogo.png"
import Image from 'next/image';
import { BiColor } from 'react-icons/bi';


export default function SignIn() {



  return (
   
    <main className='flex items-center flex-col  ' 
   
    >

<Card className='border: "black" shadow : "4.0px 8.0px 8.0px hsl(0deg 0% 0% / 0.38)"  borderRadius: 16,
 backgroundColor: "transparent" mt-6'>

      <Flex direction='column' gap="3" align="center">

        <Heading className='mb-1 items-center underline' > SignIn Page </Heading>

        <Badge color='gray' className='mt-4 mb-1 '> Welcome Dear Guest ! </Badge>
        <Text color='gray' className='mt-5 mb-4'> You can login using your existing Google account. </Text>

      <Card className='mt-4' variant="classic" size="4">

        <Flex justify='between' align="start" className="min-h-1 rounded overflow-hidden shadow-lg  relative  w-full h-20 px-1 py-1 mt-4">

          {/* <div className="min-h-1 rounded overflow-hidden shadow-lg  relative  w-full h-20 px-1 py-1"> */}

          <Image
            src={googlelogo}
            alt="Google Authorization"
            // fill={true} // Use fill property for the image to fill the container
            objectFit="cover" // Control cropping and scaling
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            width={70}
            height={50}

            className="object-cover rounded-lg px-2 ml-6" // Apply rounded corners using Tailwind

          //   sizes='115vw'
          // style={{objectFit: 'cover' }}
          />


          {/* </div> */}

          <div className="mb-4 mt-3 ">


            <Button

              onClick={() => signIn("google")}

              variant="solid"
              size = "3"
            >

              Sign-in

            </Button>
          </div>
        </Flex>
        </Card>
      </Flex>
      </Card>
    </main>
   
  )
}

